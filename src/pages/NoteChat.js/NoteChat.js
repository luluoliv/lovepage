import { divStyle } from '../../components/BackgroundDiv/BackgroundDiv';
import NavBar from '../../components/NavBar/NavBar'
import './NoteChat.css'
import Chat from '../../components/NoteChat/Chat';

export default function NoteChat(){

    return(
            <div style={divStyle}>
                <NavBar />
                <div className='chat-container'>
                    <h2>
                        Título da Reclamação
                    </h2>
                    <button className='button'>
                        Marcar como Resolvido
                    </button>
                    <Chat />
                </div>
            </div>
    )
}