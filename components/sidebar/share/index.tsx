import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { images } from "../../../constants/images";
import DialogLayout from "../../../layouts/DialogLayout";
import { setSidebarShareIsOpen } from "../../../redux/modules/slices/sidebarShareSlice";
import styles from "./index.module.scss";
import Share, { TShareProps } from "./Share";

const ShareSidebar = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState<TShareProps>({ name: "", icon: "" });

  const handleActive = (share: TShareProps) => {
    console.log(active);
    setActive(share);
  };

  const shares: Array<TShareProps> = [
    {
      name: "Chat",
      icon: images.chat,
    },
    {
      name: "Telegram",
      icon: images.telegram,
    },
    {
      name: "Chat",
      icon: images.chat,
    },
    {
      name: "Twitter",
      icon: images.twitter,
    },
    {
      name: "Whatsapp",
      icon: images.whatsapp,
    },
    {
      name: "E-mail",
      icon: images.email,
    },
    {
      name: "More",
      icon: images.sidebar_share,
    },
  ];

  const handleClose = () => {
    dispatch(setSidebarShareIsOpen(false));
  };
  return (
    <DialogLayout>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1 className={styles.title}>Share with</h1>
          <div className={styles.icon_container}>
            <Image
              src={images.close}
              alt=""
              className={styles.icon}
              onClick={handleClose}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          {shares.map(({ name, icon }) => (
            <div
              onClick={() => handleActive({ name, icon })}
              key={Math.random()}
            >
              <Share name={name} icon={icon} />
            </div>
          ))}
        </div>
      </div>
    </DialogLayout>
  );
};

export default ShareSidebar;
