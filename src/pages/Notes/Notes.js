import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import { divStyle } from '../../components/BackgroundDiv/BackgroundDiv';
import Note from '../../components/Notes/Note'
import Hints from '../../components/Notes/Hints'
import './Notes.css'
import TitlePage from '../../components/TitlePage/TitlePage';



export default function Notes() {

    return (
        <div style={divStyle}>
            <NavBar />
            <TitlePage name="Reclamações"/>
            <table className='table'>
                <tbody>
                    <tr>
                        <td className='notes-column'>
                            <Note />
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