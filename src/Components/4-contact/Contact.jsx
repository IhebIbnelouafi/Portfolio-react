import React from 'react' ;
import './Contact.css' ; 
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import successfullyAnimation from '../../../public/Animation/Succesfully.json'
import mailAnimation from '../../../public/Animation/Mail.json'




const Contact = () => {
    const [state, handleSubmit] = useForm("xleqbepp");
       
return (
    <section className='contact-us'>
     <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact us
     </h1>
     <p className='sub-title'>Contact us for more information and get notifed when I publish somthing new </p>

<div style={{justifyContent:'space-between'}} className='flex'> 
<form onSubmit={handleSubmit} className=''>
  
    <div className='flex'>
    <label htmlFor='email'>Email Address: </label>
    <input autoComplete='off' required type='email' name='email' id='email'></input>
   
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

    </div>

    <div className='flex' style={{marginTop:'24px'}}>
    <label htmlFor='message'>Your message:</label>
    <textarea required name='message' className='message' id='message'></textarea>
    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>
   
    <button type="submit" disabled={state.submitting} className='submit'>
        {state.submitting ? "Submitting ..." : "Submit"}
        </button>
   {state.succeeded && (<p className='flex' style={{fontSize:"18px", marginTop:"1.7rem" }}>
   <Lottie loop={false} style={{height:37}} animationData={successfullyAnimation} />
    Your message has been successfully 👌</p>)}
   
</form>



<div className=' animation'>
<Lottie 

className='contact-animation'
 style={{height:300 }}

animationData={mailAnimation} />

</div>



</div>
    </section>
) ;
}


export default Contact ;