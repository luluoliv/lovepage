import React from 'react';

export default function HomeTitle() {

    return(
        <div className="content">
            <h2 className="title">Seja bem vindo(a) {localStorage.getItem('username')}!</h2>
        </div>
    )
}