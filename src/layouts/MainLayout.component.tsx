import React, { FC } from "react";

import Header from "@/components/shared/Header.component";

import styles from "@/styles/layouts/MainLayout.module.scss";

type MainLayoutProps = {
  children: any;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className={styles.container}>
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
