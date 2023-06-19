// React
import { FC } from "react";

// Interfaces
import { IButton } from "../interfaces";

// Styles
import { SButton } from "./styles/button.styles";

const Button: FC<IButton> = ({ children, contained, onClick, submit }) => {
  return (
    <SButton
      contained={contained || false}
      onClick={onClick}
      type={submit ? "submit" : undefined}
    >
      {children}
    </SButton>
  );
};
export default Button;
