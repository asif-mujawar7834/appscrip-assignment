"use client";

import { Provider } from "react-redux";
import store from "./Store";
import { FC } from "react";
import { reduxProviderProps } from "@/type";

export const ReduxProvider: FC<reduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
