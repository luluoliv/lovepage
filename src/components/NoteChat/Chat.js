import './Chat.css'
import { useState } from 'react'; 

export default function Chat(){

    const [textareaheight, setTextareaheight] = useState(1); 

    const handleClick = () =>{
        console.log('Clicado')
    }

    return(
        <div className='scroll-div'>
            <div className="received-content mt-5">
                <i className="fa-solid fa-circle-user fa-4x icon"></i>
                <div className='chat'>
                    <span>
                        aaa
                    </span>
                </div>
            </div>
            <div className="sent-content mt-5 end">
                <i className="fa-solid fa-circle-user fa-4x"></i>
                <div className='chat'>
                    <span>
                        aaa
                    </span>
                </div>
            </div>
            <div className="received-content mt-5">
                <i className="fa-solid fa-circle-user fa-4x"></i>
                <div className='chat'>
                    <span>
                        aaa
                    </span>
                </div>
            </div>
            <div className="sent-content mt-5 end">
                <i className="fa-solid fa-circle-user fa-4x"></i>
                <div className='chat'>
                    <span>
                        aaa
                    </span>
                </div>
            </div>
            <div className="received-content mt-5">
                <i className="fa-solid fa-circle-user fa-4x"></i>
                <div className='chat'>
                    <span>
                        aaa
                    </span>
                </div>
            </div>
            <div className="sent-content mt-5 end">
                <i className="fa-solid fa-circle-user fa-4x"></i>
                <div className='chat'>
                    <span>
                        aaa
                    </span>
                </div>
            </div>
            <div className="received-content mt-5">
                <i className="fa-solid fa-circle-user fa-4x"></i>
                <div className='chat'>
                    <span>
                        aaa
                    </span>
                </div>
            </div>
            <div className='text-div mt-4'>
                <textarea className='response-inp' placeholder="Responda">
                </textarea>
                <i class="fa-solid fa-arrow-right mx-2 fa-xl arrow" onClick={handleClick}></i>
            </div>
        </div>
    )
}