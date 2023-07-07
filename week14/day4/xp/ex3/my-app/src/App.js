import React from 'react';

import {Routes, Route,  NavLink } from 'react-router-dom';
import { SocialMedia } from './components/SocialMedia.component';
import { SkillComponent } from './components/Skills.component';
import { Experiences } from './components/Experiences.component';

const routes = (
  <Routes>
    <Route path="/" element={<SocialMedia />}> </Route>
    <Route path="/experiences" element={<Experiences />}> </Route>
    <Route path="/skill" element={<SkillComponent />}> </Route> 
  </Routes>
)

export class App extends React.Component{
  render(){
    return (
     
      <Navbar />
      
      )
  }
}

function Navbar() {
  return(
    <>
    <h1>welcome to React  </h1>
    <p>
      <NavLink to="/"> Shopocial Media </NavLink>
    </p>
    <p>
      <NavLink to="/skill"> Skills  </NavLink>
    </p>
    <p>
      <NavLink to="/experiences"> Experiences </NavLink> 
    </p>
  
    </>
  )
} 
function HomeScreen() {
  return <h1>Home</h1>
}
function ShopScreen() {
return <h1>Shop</h1>
}
function ProfileScreen() {
throw new Error("no!")
return <h1>Profile</h1>
}