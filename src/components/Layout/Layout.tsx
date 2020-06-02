import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
