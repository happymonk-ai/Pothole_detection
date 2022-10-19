import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import ShareSidebar from "../components/sidebar/share";
import { RootState } from "../redux/store";
import styles from "./index.module.scss";

type TLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<TLayoutProps> = ({ children }) => {
  const { isOpen } = useSelector((state: RootState) => state.share);

  return (
    <div className={styles.app_layout}>
      {isOpen && <ShareSidebar />}
      {children}
    </div>
  );
};

export default AppLayout;
