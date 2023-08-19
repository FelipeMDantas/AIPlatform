import { useEffect, useState } from "react";

interface FreeCounterProps {
  apiLimitCount: number;
}

export const FreeCounter = ({ apiLimitCount = 0 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <div>FreeCounter</div>;
};
