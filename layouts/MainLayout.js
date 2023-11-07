import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useRouter } from "next/router";

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
