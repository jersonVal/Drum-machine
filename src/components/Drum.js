import React, {useState} from 'react';
import Button from './Button';
import BtnToggle from './Btn-toggle';

const Drum = ()=>{

    const sound = ()=>{
        if(mode){
            return {
                0: {
                    name: "Heater-1",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                },
                1: {
                    name: "Heater-2",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                },
                2: {
                    name: "Heater-3",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                },
                3: {
                    name: "Heater-4",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                },
                4: {
                    name: "Clap",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                },
                5: {
                    name: "Open-HH",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                },
                6: {
                    name: "Kick-n'-Hat",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                },
                7: {
                    name: "Kick",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                },
                8: {
                    name: "Closed-HH",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                }
            }
        }else{
            return{
                0: {
                    name: "Chord-1",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
                },
                1: {
                    name: "Chord-2",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
                },
                2: {
                    name: "Chord-3",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
                },
                3: {
                    name: "Shaker",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
                },
                4: {
                    name: "Open-HH",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
                },
                5: {
                    name: "Closed-HH",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
                },
                6: {
                    name: "Punchy-Kick",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
                },
                7: {
                    name: "Side-Stick",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
                },
                8: {
                    name: "Snare",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
                }
            }
        }
    }

    const [power,setPower] = useState(true);
    const [mode,setMode] = useState(true);
    const [audio,setAudio] = useState('Heater Kit');

    return(
        <div className="drum">
            <div className="drum-btns-container">
            <Button name='Q' title={sound()[0]['name']} src={sound()[0]['src']} setTitle={setAudio} power={power}/>
            <Button name='W' title={sound()[1]['name']} src={sound()[1]['src']} setTitle={setAudio} power={power}/>
            <Button name='E' title={sound()[2]['name']} src={sound()[2]['src']} setTitle={setAudio} power={power}/>
            <Button name='A' title={sound()[3]['name']} src={sound()[3]['src']} setTitle={setAudio} power={power}/>
            <Button name='S' title={sound()[4]['name']} src={sound()[4]['src']} setTitle={setAudio} power={power}/>
            <Button name='D' title={sound()[5]['name']} src={sound()[5]['src']} setTitle={setAudio} power={power}/>
            <Button name='Z' title={sound()[6]['name']} src={sound()[6]['src']} setTitle={setAudio} power={power}/>
            <Button name='X' title={sound()[7]['name']} src={sound()[7]['src']} setTitle={setAudio} power={power}/>
            <Button name='C' title={sound()[8]['name']} src={sound()[8]['src']} setTitle={setAudio} power={power}/>
            </div>
            <div className="info-container">
                <BtnToggle title='Power' setter={setPower} setTitle={setAudio} />
                <div className="title-container">
                    <p>{audio}</p>
                </div>
                <BtnToggle title='Bank' setter={setMode} setTitle={setAudio} />
            </div>
            
        </div>
    )
}

export default Drum;