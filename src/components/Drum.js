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
            <Button />
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