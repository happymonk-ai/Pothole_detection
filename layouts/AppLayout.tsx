import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import FullScreenVideo from "../components/players/FullScreenVideo";
import ShareSidebar from "../components/sidebar/share";
import UploaderCard from "../components/uploads/UploadCard";
import { RootState } from "../redux/store";
import styles from "./index.module.scss";

type TLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<TLayoutProps> = ({ children }) => {
  const { isOpen } = useSelector((state: RootState) => state.share);
  const { isFullScreen } = useSelector((state: RootState) => state.player);

  const { isOpen: isUploaderOpen } = useSelector(
    (state: RootState) => state.uploader
  );

  return (
    <div className={styles.app_layout}>
      {isOpen && <ShareSidebar />}
      {isUploaderOpen && <UploaderCard />}
      {isFullScreen && <FullScreenVideo />}

      {children}
    </div>
  );
};

export default AppLayout;
