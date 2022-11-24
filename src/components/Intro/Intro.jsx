import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward} from "react-icons/io";
import { IoIosArrowBack} from "react-icons/io";
import "./Intro.css"

const Intro
 = () => {
    return (
        <div className='container'>
           <img className="faq-img" src="https://drive.google.com/uc?export=view&id=1gc7nbJFmj2vXDRqB19aJmEVPCwCOoHN3" alt="FAQ" />
            <h1>What is impsoter syndrome?</h1>
            <div className='intro-text-wrapper'>
            <p>Imposter syndrome is an internal, psychological experience in which one believes that they are not as competent as others perceive them to be, as if they are a fraud.
         </p>
         </div>
         <div>
         <Link className='next-link' to="/impostorTypes"><IoIosArrowForward/></Link>
         </div>
         <div>
            <Link className='back-link' to="/"><IoIosArrowBack /></Link>
         </div>
        </div>
    );
};

export default Intro;