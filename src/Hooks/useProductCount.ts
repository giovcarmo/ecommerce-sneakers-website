import { useState } from "react";

export function useProductCount(initialValue = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

  return { count, increment, decrement };
}