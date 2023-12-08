import React from 'react'
import './SectionOne.css';
import athletic from '../assets/athletic.png';
import runner from '../assets/runner.png';
import backlogo from '../assets/backlogo.png';

export default function SectionOne() {
  return (
    <>
        <div className='sec1'>
          {/* <div className='clip'></div> */}
          <div className='sub-sec1'>
            <img src={athletic} alt='img' className='athletic'/>
            <p className='gamify'>Gamify You’re <br/>Fitness and <br/>Win Awards
            </p>
            <img src={runner} alt='img' className='runner'/>
            <p className='fitness'> We Make Fitness Fun </p>
            <img src={backlogo} alt='img' className='backlogo'/>
          </div>
        </div>
        
        {/* ======Second Section======= */}
        <div className='sec2'>
          <div className='sub-sec2'>
            <h2>Who We Are ?</h2>

            <p>AmuseAxon is an online fitness gaming app which include fitness, badges, posts, games to complete. Records your workout into a Game! Gamify fitness with badges, rewards, posts and social challenges for a fun, motivating exercise experience.
            </p>

            <br/>

            <p>The main purpose of this game app is to help people adopt new habits in the form of fun and exciting quests.
            </p>

            <button>
                <a href='/'>Learn More</a>
            </button>

            <div className='strip'></div>
          </div>
        </div>
        {/* ======Third Section====== */}
        <div className='sec3'>
            <dev className='sub-sec3'>
                <h2>
                Ready to have fun through fitness !
                </h2>
                <p>
                Connect you're smart watch or update you're health vitals in the application, where you can create an group of members and challenge them to complete the tasks like highest number of steps, high calories burn or posting on having healthy food.
                </p>

                <br/>

                <p>
                You will be awarded with exclusive fitness badges for competing and completing the tasks called Gamify challenges. 
                </p>

                <button><a href='/'>Connect</a></button>
            
                <div className='strip'></div>
            </dev>
        </div>
    </>
  )
}
