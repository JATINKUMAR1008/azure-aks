import React from 'react'
import Image from "../assets/1.svg"
import "./heropage.css";
const Heropage = () => {
  return (
    <div className='Hero-container'>
        <section className='section-1'>
            <h1 className='heading'>
                Hello, I'm <br/>
                Jatin Kumar.
                <br/>
                <span className='sub-heading'>
                I am a DevOps Engineer.
                </span>
            </h1>
            <br/>
            
                
            
        </section>  
        <section className='section-2'>
           
            <img src={Image} alt="img?" className="svg-Image"/>
        </section>

    </div>
  )
}

export default Heropage