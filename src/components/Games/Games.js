import React from "react";
import { useState, useEffect } from "react";
import GetFeatureByType from "../../hooks/Features/GetFeatureByType";
import YesNoModal from "../../utils/YesNoModal";
import DeleteFeature from "../../hooks/Features/DeleteFeature";
import { Notify } from "../../utils/Notify";
import './Games.css'

export default function GameItems(props){
    const [hoveredGameId, setHoveredGameId] = useState(null);
    const [loading, setLoading] = useState(true)
    const [games, setGames] = useState(null)
    const { refresh, setRefresh } = props;
    const [modalLoading, setModalLoading] = useState(false);
    const [currentGameId, setCurrentGameId] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() => {
        GetFeatureByType({
            setFeature: setGames,
            type: 'jogo'
        });
    }, [refresh, setRefresh]);

    const handleMouseEnter = (gameId) => {
        setHoveredGameId(gameId);
    };

    const handleMouseLeave = () => {
        setHoveredGameId(null);
    };

    const compareGamesById = (gameA, gameB) => {
        return gameB.id - gameA.id;
    };

    const searchGameOnGoogle = (name)=>{
        window.open('http://google.com/search?q='+name, '_blank');
    }

    const handleDeleteIcon = (e, id) => {
        e.stopPropagation();
        setCurrentGameId(id)
        setModalIsOpen(true)
    };

    const handleDeleteGame = async () =>{
        setModalLoading(true)
        await DeleteFeature({
            featureId: currentGameId,
            setPhoto: setGames,
            notify: Notify,
            setRefresh: setRefresh,
            closeModal: () => setModalIsOpen(false),
            refresh: refresh,
        });
        setModalLoading(false)
    }

    return(
        <>
            <YesNoModal
                show={modalIsOpen} 
                onHide={() => setModalIsOpen(!modalIsOpen)}
                msg={'Tem certeza que deseja deletar esse jogo?'} 
                isLoading={modalLoading}
                yes={() => handleDeleteGame()}
                no={() => setModalIsOpen(!modalIsOpen)}
            />
            <div className="games-gallery">
                {
                    games && games.length > 0 ? (
                        games.map((item)=>{
                            return(
                                <div
                                    className="photo-item"
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {hoveredGameId === item.id && (
                                        <div className="hover-div"> 
                                            <div className="delete-icon-div">
                                                <i
                                                    class="fa-solid fa-trash delete-icon"
                                                    onClick={(e)=>handleDeleteIcon(e, item.id)}
                                                    >        
                                                </i>
                                            </div>
                                            <div className="photo-desc-div">
                                                <p 
                                                    className="photo-desc"
                                                    onClick={()=> searchGameOnGoogle(item.name)}
                                                    title="Pesquisar jogo"
                                                >
                                                    {item.name}
                                                </p>
                                            </div>        
                                        </div>
                                    )}
                                    <img
                                        className="photo-img"
                                        src={item.photo_url ? item.photo_url : item.photo_file}
                                        alt="Descrição"
                                    />
                                </div>    
                            )
                        })
                    ) : (
                        <>
                            <p className="photo-alert">Nenhum jogo adicionado</p>
                        </>
                    )
                }
            </div>
        </>
    )
}