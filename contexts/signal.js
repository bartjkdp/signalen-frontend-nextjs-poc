import { createContext, useState } from 'react';

const SignalContext = createContext([], () => {});

export const SignalProvider = ({ children }) => {
  const [signal, setSignal] = useState({});

  return (
    <SignalContext.Provider value={[signal, setSignal]}>
      {children}
    </SignalContext.Provider>
  );
};

export default SignalContext;
