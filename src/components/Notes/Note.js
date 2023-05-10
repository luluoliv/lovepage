import React from 'react';
import './Note.css'
import {useNavigate} from 'react-router-dom';

export default function Note(){

    const navigate = useNavigate();
    const handleClick = () => navigate('/notechat');

    return(
        <>
            <div className='grid-container'>
                <div class='grid-item' onClick={handleClick}>
                    <div className='titulo'>
                        Luara traiu o Guilherme com um coreano
                    </div>
                        <div className='status'></div>
                </div>
                <div class='grid-item' onClick={handleClick}>
                    <div className='titulo'>
                        Luara disse que AMA trair
                    </div>
                        <div className='status'></div>
                </div>
            </div>
        </>
        
    )

}