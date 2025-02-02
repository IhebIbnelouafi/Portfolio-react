
import { useEffect, useState } from 'react';
import './header.css' ; 

const Header = () => {
const [showModal, setshowModal] = useState(false) ; 
const [theme, settheme] = useState(localStorage.getItem("currentMode") ?? "dark") ;

useEffect(() => {
     if (theme === "light") {
          document.body.classList.remove("dark") ; 
          document.body.classList.add("light") ;
     } else {
          document.body.classList.remove("light") ; 
          document.body.classList.add("dark") ;
     }

}, [theme]);

return (
<header className=" flex">
<button  onClick={() => {setshowModal(true)}} className='menu icon-menu flex'></button>
<div></div>

     <nav> 
<ul className='flex'>
<li> <a href=" ">About</a></li>
<li> <a href=" ">Articles</a></li>
<li> <a href=" ">Projects</a></li>

</ul>

     </nav>
     <button onClick={() => {

          // send value to Local storage
      localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark" )

      // get value from Local storage 
      settheme(localStorage.getItem("currentMode"))

     }} className='mode flex'>
          <span className='icon-moon-o'></span>
     </button>
     

{ showModal && (
     <div className="fixed" >
<ul className='modal'> 
<li className='border'>
     <button className='icon-close' onClick={() => {setshowModal(false)}} /> 



</li>
<li> <a href=" ">About</a></li>
<li> <a href=" ">Articles</a></li>
<li> <a href=" ">Projects</a></li>

</ul>
     </div>
)}
</header>
    
) ;
}


export default Header ;
