import React from 'react';
import './Hints.css'

export default function Hints(){

    return(
        <>
            <h3 className='legenda'> 
                Legenda
            </h3>
            <table className='hint-table'>
                
                <tbody>
                    <tr className='hint-td-tr'>
                        <td className='hint-td-tr'>
                            <h4 className='hint-title'>
                                Resolvido
                            </h4>
                        </td>
                        <td className='hint-td-tr'>
                            <div className='resolvido'></div>
                        </td>
                    </tr>
                    <tr className='hint-td-tr'>
                        <td className='hint-td-tr'>
                            <h4 className='hint-title'>
                                Não Resolvido
                            </h4>
                        </td>
                        <td className='hint-td-tr'>
                            <div className='nao-resolvido'></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}