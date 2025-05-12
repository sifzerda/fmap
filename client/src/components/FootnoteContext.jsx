// FootnoteContext.jsx
import { createContext, useContext, useRef } from 'react';

const FootnoteCounterContext = createContext();

export function FootnoteProvider({ children }) {
  const counterRef = useRef(1);

  const getNextFootnoteNumber = () => {
    const current = counterRef.current;
    counterRef.current += 1;
    return current;
  };

  const resetCounter = () => {
    counterRef.current = 1;
  };

  return (
    <FootnoteCounterContext.Provider value={{ getNextFootnoteNumber, resetCounter }}>
      {children}
    </FootnoteCounterContext.Provider>
  );
}


export function useFootnoteCounter() {
  return useContext(FootnoteCounterContext);
}