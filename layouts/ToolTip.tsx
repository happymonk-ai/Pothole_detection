import "./styles.css";
import ReactTooltip from "react-tooltip";
import { FC, ReactNode } from "react";

interface IToolTipProps {
  children: ReactNode;
  id: string;
  settings: any;
}

const ToolTip: FC<IToolTipProps> = ({ children, id, settings }) => {
  return (
    <ReactTooltip id={id} {...settings}>
      {children}
    </ReactTooltip>
  );
};

export default ToolTip;
