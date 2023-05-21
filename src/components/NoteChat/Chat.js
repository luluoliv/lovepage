import React from 'react';
import './Chat.css'
import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function Chat(props){

    const note_id = localStorage.getItem('note_id')
    const [chatMessages, setChatMessages] = useState()
    const [message, setMessage] = useState('')

    useEffect(() => {
            axios
            .get('https://love-pageapi.onrender.com/notes/chats/note/'+note_id)
            .then(responseData => {
                setChatMessages(responseData.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    function className(user){
        if(user == localStorage.getItem('user_id')){
            return "sent-content mt-5"
        }else{
            return "received-content mt-5"
        }
    }

    const handleClick = async () =>{
    
        console.log(localStorage.getItem('note_id'))
        console.log(localStorage.getItem('user_id'))
        console.log(message)

        const data = {
            reclamacao : note_id,
            user: localStorage.getItem('user_id'),
            message: message
        }

        await axios.post('https://love-pageapi.onrender.com/notes/chats/', JSON.stringify(data), {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token '+localStorage.getItem('token'),
              },
              withCredentials: true,
            })
            .then((data)=>{
                console.log(data)
            .catch((err)=>{
                console.log(err)
                alert('Erro / Auth error')
            })
        })
    }

    return(
        <>
        {
          chatMessages ? (
            <div className='scroll-div'>
                {
                    chatMessages.map((item)=>{
                        return(
                            <div className={className(item.user)}>
                                <i className="fa-solid fa-circle-user fa-4x"></i>
                                <div className='chat'>
                                    <span>
                                        {item.message}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          ) : (
            <div className='first-message mt-4'>    
                <span>
                    Adicione a primeira mensagem.
                </span>
                <div className='text-div mt-4'>
                </div>
            </div>
          )
        }

        <div className='text-div mt-4'>
            <textarea className='response-inp sent-content' placeholder="Mensagem"
                onChange={(e)=> setMessage(e.target.value)}
                >
            </textarea>
                <i class="fa-solid fa-arrow-right mx-2 fa-xl arrow" onClick={handleClick}></i>
        </div>
        </>
    )
}