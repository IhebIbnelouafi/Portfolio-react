import React from 'react' ;
import './Hero.css' ; 
import Lottie from 'lottie-react';
import devAnimation from '../../../public/Animation/Dev.json'

const Hero = () => {
return (
    <section className='hero flex'>
       <div className='left-section'>
<div className='parent-avatar flex'>
<img src='./me circle.png' className='avatar' alt=''/>
<div className='icon-verified'></div>   


</div> 
<h1 className='title'>Hi all 👋  I'm Iheb</h1>
<p className='subtitle'>A dedicated Software Developer 🚀 and DevOps enthusiast. <br></br>
I’m skilled in building dynamic web applications and creating efficient CI/CD pipelines <br></br>
to streamline development processes. Bringing innovative ideas to life through scalable solutions is my passion.</p>
<div className='all-icons flex'>
    <a href='https://www.facebook.com/houba15/' target='_blank' className='iconlink'>
    <div className='icon icon-facebook2'></div>
    </a>
    <a href='https://www.instagram.com/belwefi_iheb/' target='_blank' className='iconlink'>
    <div className='icon icon-instagram'></div>
    </a>
    <a href='https://github.com/IhebIbnelouafi' target='_blank' className='iconlink'>
    <div className='icon icon-github'></div>
    </a>
    <a href='https://www.linkedin.com/in/iheb-ibnelouafi-80b649230/' target='_blank' className='iconlink'>
    <div className='icon icon-linkedin'></div>
     </a>
</div>
</div>

       <div className='right-section animation '>
       <Lottie 
className=''
 
animationData={devAnimation} />

       </div>
    </section>
) ;
}


export default Hero ;
