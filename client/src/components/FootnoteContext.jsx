// FootnoteContext.jsx
import { createContext, useContext, useRef } from 'react';

const FootnoteCounterContext = createContext();

export function FootnoteProvider({ children }) {
  const counterRef = useRef(1); // useRef instead of useState

  const getNextFootnoteNumber = () => {
    const current = counterRef.current;
    counterRef.current += 1;
    return current;
  };

  return (
    <FootnoteCounterContext.Provider value={{ getNextFootnoteNumber }}>
      {children}
    </FootnoteCounterContext.Provider>
  );
}

export function useFootnoteCounter() {
  return useContext(FootnoteCounterContext);
}