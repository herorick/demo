import React, { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
