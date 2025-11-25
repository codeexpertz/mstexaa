"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#102c57"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
