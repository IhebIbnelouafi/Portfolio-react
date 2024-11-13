import React, { useState } from 'react' ;
import './Main.css' ; 

const myProjects=[
  {projectTitle: "CI/CD Pipeline for SpringBoot App", subTitle:"Automated deployment pipeline for a Spring Boot application using Jenkins, SonarQube, and Nexus.", category:"cloud",githubLink:"https://github.com/IhebIbnelouafi/JavaCICD"  ,imgPath: '/cicd.png'},
  {projectTitle: "BankerBot" , subTitle:"A cloud-based chatbot for banking tasks, providing users with real-time support and banking information", category:"cloud" ,githubLink:"" , imgPath: '/3.png'},
  {projectTitle: "Hosting Web App " , subTitle:"Deploy and manage a web application on a cloud platform with scalable infrastructure", category:"cloud",githubLink:"" , imgPath: '/1.webp'},
  {projectTitle: "Ai-Images Generator", subTitle:"Generate unique AI-created images based on user input, leveraging a machine learning API in React",githubLink:"https://github.com/IhebIbnelouafi/AI-Images-Generator" , category:"javascript", imgPath: "/2.webp"},
  {projectTitle: "To-do-list", subTitle:"A simple to-do list application built in React for task management with dynamic state handling", category:"react",githubLink:"https://github.com/IhebIbnelouafi/To-Do-liste-React-Js-" , imgPath: "/todo.png"},
  {projectTitle: "Calculator-Js", subTitle:"A JavaScript-powered calculator with basic arithmetic operations and a user-friendly interface", category: "javascript",githubLink:"https://github.com/IhebIbnelouafi/Calculator-Js" , imgPath: '/4.jpg'},
  {projectTitle: "Random-Password Generator" , subTitle:"A tool to create secure, randomized passwords with customizable length and complexity", category: "javascript",githubLink:"https://github.com/IhebIbnelouafi/Random-Password-Generator" , imgPath: '/5.jpg'},
  {projectTitle: "Digital-Clock", subTitle:"A real-time digital clock made in JavaScript, displaying hours, minutes, and seconds", category: "javascript",githubLink:"https://github.com/IhebIbnelouafi/Digital-Clock" , imgPath: 'clock.jpg'},
  {projectTitle: "Change background Color", subTitle:"A JavaScript app that lets users change the background color of the page with a single click.", category: "css",githubLink:"https://github.com/IhebIbnelouafi/Change-BackGround-Color" , imgPath: '/back.png'}, 
  {projectTitle: "Tik-tac-toe", subTitle:"A classic tic-tac-toe game built with React, featuring a responsive interface and game logic", category:"react",githubLink:"https://github.com/IhebIbnelouafi/Tic-Tac-Toe-React-Js" , imgPath: 'tiktactoe.png'},
]

const Main = () => {

  const[currentActive, setcurrentActive] = useState("all")
  const[arr, setArr]= useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory) ;
        
    const newArr = myProjects.filter((item) => {
      return item.category === buttonCategory ;
    })

    setArr(newArr) ;
  }
  return (
    <main className='flex'>
       <section className='flex left-section'> 
       <button onClick={() => {
        setcurrentActive("all")
        setArr(myProjects)
       }}
       className={currentActive === "all" ? "active" : null}>All Projects</button>

<button onClick={() => {
       handleClick("react") ;
       }} 
       className={currentActive === "react" ? "active" : null}>React</button>
      
       <button onClick={() => {
        handleClick("css")
       }} 
       className={currentActive === "css" ? "active" : null}>Html & CSS</button>


<button onClick={() => {
       handleClick("javascript") ;
       }} 
       className={currentActive === "javascript" ? "active" : null}>JavaScript</button>


<button onClick={() => {
       handleClick("cloud") ;
       }} 
       className={currentActive === "cloud" ? "active" : null}>Cloud and DevOps Projects</button>
       
       </section>




       <section className=' flex right-section'>

        {arr.map((item) => {

        return(

          <article key={item.imgPath}  className='card'> 
            <img width={266} src={item.imgPath} alt=''></img>
            <div style={{width:"266px"}} className='box'>
              <h1 className='title'>{item.projectTitle}</h1>
              <p className='subtitle'>{item.subTitle}</p>
              <div className='flex icons'> 

                <div style={{gap:"11px"}} className='flex'>
                
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                    <div className='icon-github'></div>
                  </a>
          

                </div> 

                <a className='link' href=''> 
                more
                    <span style={{alignSelf:"end"}} className='icon-arrow-right2'></span>
                </a>
              </div>
            </div>
          </article>
        )
        })}
        
     
        

       </section>



    </main>
) ;
}


export default Main;