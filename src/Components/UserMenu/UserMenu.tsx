import React, { useState } from "react";
import { Container } from "./style";

import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import Alert from "../Alert/Alert";

const UserMenu: React.FC<{
  userMenuState: () => void;
  logoutAlertState: (state: boolean) => void;
}> = ({ userMenuState, logoutAlertState }) => {
  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();
  const emptyUser = {
    id: "",
    firstName: "",
    email: "",
    lastName: "",
    isAdmin: false,
    cart: [],
  };
  const logout = () => {
    userMenuState!();
    fetch("/api/logout", {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          dispatch(authActions.logout());
          dispatch(authActions.setUser(emptyUser));
          logoutAlertState(true);
          setTimeout(() => {
            logoutAlertState(false);
          }, 3000);
        }
      });
  };

  return (
    <Container>
      {showAlert && <Alert text="You have successfully logged out. " />}
      <ul>
        <li>Profile</li>
        <li>Settings</li>
        <li onClick={logout}>Logout</li>
      </ul>
    </Container>
  );
};

export default UserMenu;
