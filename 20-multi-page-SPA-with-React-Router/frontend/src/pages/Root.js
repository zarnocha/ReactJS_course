import { Outlet } from "react-router-dom";
// import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import React from "react";

const RootLayout = () => {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading ...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
