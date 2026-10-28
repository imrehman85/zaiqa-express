"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { MENU_BY_ID } from "@/lib/menu";

type Cart = Record<string, number>;

interface CartState {
  cart: Cart;
  count: number;
  total: number;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toast: string | null;
  bumpKey: number;
}

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = "zx-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({});
  const [loaded, setLoaded] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [bumpKey, setBumpKey] = useState(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Restore the cart after hydration so server and client markup match.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") as Cart;
      setCart(Object.fromEntries(Object.entries(saved).filter(([id, q]) => MENU_BY_ID[id] && q > 0)));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch {}
  }, [cart, loaded]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((c) => {
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  }, []);

  const add = useCallback((id: string) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    setBumpKey((k) => k + 1);
    setToast(`Added ${MENU_BY_ID[id].name}`);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  }, []);

  const value = useMemo<CartState>(() => {
    const entries = Object.entries(cart);
    return {
      cart,
      count: entries.reduce((a, [, q]) => a + q, 0),
      total: entries.reduce((a, [id, q]) => a + MENU_BY_ID[id].price * q, 0),
      add,
      setQty,
      clear: () => setCart({}),
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      toast,
      bumpKey,
    };
  }, [cart, add, setQty, drawerOpen, toast, bumpKey]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
