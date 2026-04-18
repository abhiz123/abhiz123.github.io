"use client";

import { createContext, useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

const LoadingContext = createContext(true);

export function useLoadingState() {
  return useContext(LoadingContext);
}

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={isLoading}>
      {children}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}
