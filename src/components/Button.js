import React from 'react';

const Button = ({ name, title, src, setTitle, power }) => {

    const play = (e) => {
        const audio = document.getElementById(name)
        if (power) {
            audio.play();
            setTitle(title)
        }
    }


    return (
        <div className="btn drum-pad" id={title} onClick={play}>
            <span>{name}</span>
            <audio src={src} className='clip' name={title} id={name}>{name}</audio>
        </div>
    )
}

export default Button;