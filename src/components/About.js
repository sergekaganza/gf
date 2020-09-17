import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import myface from './serge02.png';
import '../App.css';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <img className="sergeK" src={myface} alt="myface_pic"/>

            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>
            

        </div>  );
    }
}
 
export default About;