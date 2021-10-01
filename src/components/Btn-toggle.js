import React from 'react';

const BtnToggle = ({title, setter, setTitle})=>{

    const toggle = (e) => {
        
        if(e.target.style.marginLeft !== ''){
            setter(true)

            if(title === 'Bank'){
                setTitle('Heater Kit')
            }

            e.target.style.marginLeft = '';
        }else{
            setter(false)

            if(title === 'Bank'){
                setTitle('Smooth Piano Kit')
            }
            
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