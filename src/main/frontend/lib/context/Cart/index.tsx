import { createContext, Dispatch, SetStateAction } from "react";

interface ICartContext {
  items: unknown;
  setItems: Dispatch<SetStateAction<{}>>;
}

const CartContext = createContext<ICartContext>({
  items: {},
  setItems: () => {},
});

export default CartContext;
