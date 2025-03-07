import React from "react";
import Footer from "../Component/Footer"

function Layout({ children }) {
  retrun(
    <>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
