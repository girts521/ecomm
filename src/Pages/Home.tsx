import React, {useEffect} from "react";
import Carousel from "../Components/Carousel/Carousel";
import CategoriesIcons from "../Components/CategoriesIcons/CategoriesIcons";
import Categories from "../Components/Categories/Categories";
import CategoriesBar from "../Components/CategoriesBar/CategoriesBar";
import Deal from "../Components/Deal/Deal";
import Products from "../Components/Products/Products";
import Footer from "../Components/Footer/Footer";

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";



type AuthState = {
  auth:{
  isLoggedIn: boolean;
  user: {
    user: {
      id: string;
      name: string;
      email: string;
      surname: string;
      isAdmin: boolean;
    }
  }
  }
}

const Home: React.FC = () => {

 const navigate = useNavigate();
 const dispatch = useDispatch();
 const isAuth = useSelector((state: AuthState) => state.auth.isLoggedIn);
 const user = useSelector((state: AuthState) => state.auth.user);

  useEffect(() => {
    let url = `/user`;
    fetch(url,{
      credentials: 'include',
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      if(data.isLoggedIn){
        dispatch(authActions.login());
        dispatch(authActions.setUser(data.loggedUser));
      } 
    })
    .catch(err => {
      console.log(err);
    });
  } , []);

  const check = () => {

    //logout
    let url = `/products`;
    fetch(url,{
      credentials: 'include',
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });

  }


  return (
    <>
      {/* <CategoriesBar /> */}
      <Carousel />
      <button onClick={check}>check</button>
      <CategoriesIcons />
      <Categories heading={"Lightning Deals"} />
      <Deal header={"Hot sale"} />
      <Categories heading={"New arrivals"} />
      <Deal header={"Spring sale"} />
      <Deal header={"Mothers Day"} />
      <Deal header={"Special sale"} />
      <Products />
      <Footer />

    </>
  );
};

export default Home;
