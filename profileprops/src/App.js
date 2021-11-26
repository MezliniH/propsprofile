import React from 'react';
import Profile from './components/profile/Profile';
import Pics from './components/profile/Image';
import Pic from '/home/diemezlini/Documents/react/profileprops/src/components/profile/images/mez.png';
import './components/profile/mystyle.css';

function App() {
  const HandelName =myname => {alert (myname) };


  return (
  <>
    <div className="adiv" >
    <Profile 
    myname= "Hamza Mezlini" 
    bio="i think i start to fell in love with react js  "
    profession="a totally beginner front end web developer"
    handelName= {HandelName}
    />
   <Pics scr={Pic}>
       {Pic} 
   </Pics>
  </div>
  </>
  );
  }
 
export default App ;




 