// Icons
import { ExitToApp } from "@material-ui/icons";
// React
import { FC } from "react";

// Interfaces
import { ILogoutButton } from "../interfaces";

// Styles
import { SLogout } from "./styles/logout.styles";

const LogoutButton: FC<ILogoutButton> = ({ onClick }) => {
  return (
    <SLogout onClick={onClick}>
      <ExitToApp /> Logout
    </SLogout>
  );
};
export default LogoutButton;
