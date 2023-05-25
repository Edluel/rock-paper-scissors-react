import React, { useState } from 'react'
import './guide.css'
import close from '../../assets/images/icon-close.svg'
import rules from '../../assets/images/image-rules.svg'

export default function Guide() {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    };

    return (
        <div className="rules">
            <button className='rules-bt' onClick={handleToggle} >RULES</button>
            {show && (
                <div className="rules-screen">
                    <div className="rules-screen-board">
                        <div className="rules-screen-board-hearder">
                            <h3>RULES</h3>
                            <img src={close} onClick={handleToggle}/>
                        </div>
                        <div className="rules-screen-board-rules">
                            <img src={rules} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
