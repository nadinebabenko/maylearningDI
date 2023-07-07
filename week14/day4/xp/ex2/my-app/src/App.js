import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary.component';
import { BrowserRouter } from "react-router-dom"; 
import { Postlist } from './components/PostList.component';

import { Routes, Route, NavLink } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";

const routes = (
  <Routes>
        <Route path="/" element= {<Postlist />}></Route>
        <Route path="/shop" element= {<ShopScreen />}></Route>
        <Route path="/profile" element= {<ProfileScreen />}></Route> 
        </Routes>
);

  export class App extends React.Component{
    render(){
      return (
      <ErrorBoundary>
        <BrowserRouter>
        <Navbar />
        <Postlist />
        <ErrorBoundary>  {routes} </ErrorBoundary>
        </BrowserRouter>
        </ErrorBoundary> 
        )
    }
  }

  function Navbar() {
    return(
      <>
      <h1>welcome to React Router</h1>
      <p>
        <NavLink to="/"> Posts </NavLink>
      </p>
      <p>
        <NavLink to="/profile"> Profile </NavLink>
      </p>
      <p>
        <NavLink to="/shop"> Shop </NavLink> 
      </p>
    
      </>
    )
  } 
 
function ShopScreen() {
  return <h1>Shop</h1>
}
function ProfileScreen() {
  throw new Error("no!")
  return <h1>Profile</h1>
}