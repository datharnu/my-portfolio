"use client";
import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps): JSX.Element {
  return <NextUIProvider>{children}</NextUIProvider>;
}
