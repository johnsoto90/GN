import React, { ReactNode } from "react";
import Header from "../organisms/header";
import Footer from "../organisms/footer";

type Props = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  return (
    <div className={`${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  className: "",
};

export default Layout;
