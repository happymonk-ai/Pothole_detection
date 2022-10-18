import React, { FC, ReactNode } from "react";
import styles from "./index.module.scss";

type TLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<TLayoutProps> = ({ children }) => {
  return <div className={styles.app_layout}>{children}</div>;
};

export default AppLayout;
