import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import React from "react";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
