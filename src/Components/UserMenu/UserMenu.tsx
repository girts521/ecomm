import React, {useState} from "react";
import { Container } from "./style";

import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import Alert from "../Alert/Alert";

const UserMenu: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false)


    const dispatch = useDispatch();
    const emptyUser = {
        id: "",
       firstName: "",
       email: "",
       lastName: "",
       isAdmin: false,
       cart: [],
     }

    const logout = () => {
        fetch('/api/logout',{
            credentials: "include",
            method: "GET",
          })
            .then((res) => res.json())
            .then((data) => {
              if(data.message === 'success'){
                dispatch(authActions.logout());
                dispatch(authActions.setUser(emptyUser));
                setShowAlert(true)
                setTimeout(() => {
                  setShowAlert(false)
                }, 3000)
              }
            })
        
    }
    
    return (
        <Container>
            {showAlert && <Alert text="You have successfully logged out. " />}
            <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li onClick={logout}>Logout</li>
            </ul>

        </Container>
    )
}

export default UserMenu