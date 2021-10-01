import React, {useState} from 'react';
import Button from './Button';
import BtnToggle from './Btn-toggle';

const Drum = ()=>{

    const [power,setPower] = useState(true);
    const [mode,setMode] = useState(true);
    const [audio,setAudio] = useState('I love Rock´n´roll');

    return(
        <div className="drum">
            <div className="drum-btns-container">
            <Button name='Q' />
            <Button name='W' />
            <Button name='E' />
            <Button name='A' />
            <Button name='S' />
            <Button name='D' />
            <Button name='Z' />
            <Button name='X' />
            <Button name='C' />
            </div>
            <div className="info-container">
                <BtnToggle title='Power' setter={setPower} />
                <div className="title-container">
                    <p>{audio}</p>
                </div>
                <BtnToggle title='Bank' setter={setMode} />
            </div>
            
        </div>
    )
}

export default Drum;