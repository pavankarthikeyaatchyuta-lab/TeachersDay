import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type CursorType = 
  | 'default'
  | 'pointer'
  | 'book'
  | 'apple'
  | 'lightbulb'
  | 'heart'
  | 'sarada'
  | 'kranti'
  | 'sarada-modal'
  | 'kranti-modal'
  | 'celebration'
  | 'sidebar-home'
  | 'sidebar-appreciation'
  | 'sidebar-teachers'
  | 'sidebar-message'
  | 'sidebar-thanks';

interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  cursorText: string | null;
  setCursorText: (text: string | null) => void;
  isCelebrationActive: boolean;
  setIsCelebrationActive: (active: boolean) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorType: 'default',
  setCursorType: () => {},
  cursorText: null,
  setCursorText: () => {},
  isCelebrationActive: false,
  setIsCelebrationActive: () => {},
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isCelebrationActive, setIsCelebrationActive] = useState(false);

  return (
    <CursorContext.Provider 
      value={{ 
        cursorType, 
        setCursorType, 
        cursorText, 
        setCursorText,
        isCelebrationActive,
        setIsCelebrationActive
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
