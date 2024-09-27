import Navbar from "../componets/Navbar"
import PageContent from "../componets/PageContent";
import { useState } from "react";



const NavPage = () => {
     const [activePage, setActivePage] = useState('home');
  return (
   

   
      <div>
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <PageContent activePage={activePage} />
      </div>
    );
  };


export default NavPage