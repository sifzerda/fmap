// FootnoteContext.jsx
import { createContext, useContext, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FootnoteCounterContext = createContext();

export function FootnoteProvider({ children }) {
  const counterRef = useRef(1);
  const location = useLocation();

  // Reset counter on location change (page navigation)
  useEffect(() => {
    counterRef.current = 1;
  }, [location]);

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
