"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c3772e16-e550-4c95-b4fa-d0ee19d4f1c9");
  }, []);

  return null;
};
