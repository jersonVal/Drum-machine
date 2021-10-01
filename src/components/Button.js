import React from 'react';

const Button = ({name, title, src, setTitle})=>{

    const play = ()=>{
        const audio = document.querySelector(`#${name}`);
        audio.play();
        setTitle(title)
    }

    return(
        <div className="btn" onClick={play}>
            <span>{name}</span>
            <audio src={src} id={name}></audio>
        </div>
    )
}

export default Button;