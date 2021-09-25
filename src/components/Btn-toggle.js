import React from 'react';

const BtnToggle = ({title, setter})=>{

    const toggle = (e) => {
        
        if(e.target.style.marginLeft !== ''){
            setter(true)
            e.target.style.marginLeft = '';
        }else{
            setter(false)
            e.target.style.marginLeft = 'auto'
        }
    }

    return(
        <div className="btn-toggle-container">
            <p>{title}</p>
            <div className="btnToggle">
                <button type="button" onClick={toggle}></button>
            </div>
        </div>
    )
}

export default BtnToggle;