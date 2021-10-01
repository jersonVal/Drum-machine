import React, { useState } from 'react';
import Button from './Button';
import BtnToggle from './Btn-toggle';

const Drum = () => {

    const sound = () => {
        if (mode) {
            return {
                Q: {
                    name: "Heater-1",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                },
                W: {
                    name: "Heater-2",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                },
                E: {
                    name: "Heater-3",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                },
                A: {
                    name: "Heater-4",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                },
                S: {
                    name: "Clap",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                },
                D: {
                    name: "Open-HH",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                },
                Z: {
                    name: "Kick-n'-Hat",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                },
                X: {
                    name: "Kick",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                },
                C: {
                    name: "Closed-HH",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                }
            }
        } else {
            return {
                Q: {
                    name: "Chord-1",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
                },
                W: {
                    name: "Chord-2",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
                },
                E: {
                    name: "Chord-3",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
                },
                A: {
                    name: "Shaker",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
                },
                S: {
                    name: "Open-HH",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
                },
                D: {
                    name: "Closed-HH",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
                },
                Z: {
                    name: "Punchy-Kick",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
                },
                X: {
                    name: "Side-Stick",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
                },
                C: {
                    name: "Snare",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
                }
            }
        }
    }

    const [power, setPower] = useState(true);
    const [mode, setMode] = useState(true);
    const [audio, setAudio] = useState('Heater Kit');

    document.onkeyup = (e) => {
        if (power) {
            const audio = document.querySelector(`#${e.key.toUpperCase()}`)
            if (audio !== null) {
                audio.play();
            }
        }
    }

    return (
        <div className="drum" id='drum-machine'>
            <div className="drum-btns-container">
                <Button name='Q' title={sound()['Q']['name']} src={sound()['Q']['src']} setTitle={setAudio} power={power} />
                <Button name='W' title={sound()['W']['name']} src={sound()['W']['src']} setTitle={setAudio} power={power} />
                <Button name='E' title={sound()['E']['name']} src={sound()['E']['src']} setTitle={setAudio} power={power} />
                <Button name='A' title={sound()['A']['name']} src={sound()['A']['src']} setTitle={setAudio} power={power} />
                <Button name='S' title={sound()['S']['name']} src={sound()['S']['src']} setTitle={setAudio} power={power} />
                <Button name='D' title={sound()['D']['name']} src={sound()['D']['src']} setTitle={setAudio} power={power} />
                <Button name='Z' title={sound()['Z']['name']} src={sound()['Z']['src']} setTitle={setAudio} power={power} />
                <Button name='X' title={sound()['X']['name']} src={sound()['X']['src']} setTitle={setAudio} power={power} />
                <Button name='C' title={sound()['C']['name']} src={sound()['C']['src']} setTitle={setAudio} power={power} />
            </div>
            <div className="info-container">
                <BtnToggle title='Power' setter={setPower} setTitle={setAudio} />
                <div className="title-container">
                    <p id='display'>{audio}</p>
                </div>
                <BtnToggle title='Bank' setter={setMode} setTitle={setAudio} />
            </div>

        </div>
    )
}

export default Drum;