import React from "react";
import { Tilt } from "react-tilt";
import face from './facereco.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0" style={{paddingLeft: '5%'}}>
            <Tilt className='Tilt br2 shadow-2' options={{max: '55'}} style={{ height: '150px', width: '150px' , backgroundColor: 'darkgreen'}}>
                <div className="Tilt-inner">
                    <img src={face} alt="logo" style={{paddingTop: '16%'}}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;