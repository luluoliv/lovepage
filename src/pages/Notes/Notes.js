import React, {useRef, useState} from 'react';
import NavBar from '../../components/NavBar/NavBar'
import { divStyle } from '../../components/BackgroundDiv/BackgroundDiv';
import Note from '../../components/Notes/Note'
import Hints from '../../components/Notes/Hints'
import './Notes.css'
import TitlePage from '../../components/TitlePage/TitlePage';



export default function Notes() {
    const [refresh, setRefresh] = useState(false)

    return (
        <div style={divStyle}>
            <NavBar />
            <TitlePage 
                name="Reclamações"
                setRefresh={setRefresh}
                refresh={refresh}
            />
            <table className='table'>
                <tbody>
                    <tr>
                        <td className='notes-column'>
                            <Note 
                                setRefresh={setRefresh}
                                refresh={refresh}
                            />
                        </td>
                        <td className='hints'>
                            <Hints />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}