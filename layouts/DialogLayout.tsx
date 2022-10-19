import { FC, ReactNode } from "react";
import styles from "./index.module.scss";

type TDialogProps = {
  children: ReactNode;
};

const DialogLayout: FC<TDialogProps> = ({ children }) => {
  return <div className={styles.dialog}>{children}</div>;
};

export default DialogLayout;