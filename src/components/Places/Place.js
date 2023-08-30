import React from "react";
import { useState, useEffect } from "react";
import GetFeatureByType from "../../hooks/Features/GetFeatureByType";
import YesNoModal from "../../utils/YesNoModal";
import DeleteFeature from "../../hooks/Features/DeleteFeature";
import { Notify } from "../../utils/Notify";
import './Place.css'

export default function Place(props){
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const { refresh, setRefresh } = props;
    const [hoveredPlaceId, setHoveredPlaceId] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentPlaceId, setCurrentPlaceId] = useState(null);
    const [modalLoading, setModalLoading] = useState(false);

    useEffect(() => {
        GetFeatureByType({
            setFeature: setPlaces,
            setLoading: setLoading, 
            type: 'lugar'
        });
    }, [refresh, setRefresh]);

    const handleMouseEnter = (placeId) => {
        setHoveredPlaceId(placeId);
    };

    const handleMouseLeave = () => {
        setHoveredPlaceId(null);
    };

    const comparePlacesById = (placeA, placeB) => {
        return placeB.id - placeA.id;
    };

    const handleDeleteIcon = (e, id) => {
        e.stopPropagation();
        setCurrentPlaceId(id)
        setModalIsOpen(true)
    };

    const handleDeletePlace = async () =>{
        setModalLoading(true)
        await DeleteFeature({
            featureId: currentPlaceId,
            setPhoto: setPlaces,
            notify: Notify,
            setRefresh: setRefresh,
            closeModal: () => setModalIsOpen(false),
            refresh: refresh,
        });
        setModalLoading(false)
    }
    
    const searchPlace = (desc) =>{
        window.open('http://maps.google.com/?q='+desc, '_blank');
    }

    return(
        <>
            <YesNoModal
                show={modalIsOpen} 
                onHide={() => setModalIsOpen(!modalIsOpen)}
                msg={'Tem certeza que deseja deletar esse lugar?'} 
                isLoading={modalLoading}
                yes={() => handleDeletePlace()}
                no={() => setModalIsOpen(!modalIsOpen)}
            />
            <div className="place-gallery">
                {loading ? (
                    <i className="photo-loading fa-solid fa-spinner fa-spin-pulse"></i>
                ) : places && places.length > 0 ? (
                    places.sort(comparePlacesById).map((place) => (
                        <div
                            className="photo-item"
                            onMouseEnter={() => handleMouseEnter(place.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {hoveredPlaceId === place.id && (
                                <div className="hover-div"> 
                                    <div className="delete-icon-div">
                                        <i
                                            class="fa-solid fa-trash delete-icon"
                                            onClick={(e)=>handleDeleteIcon(e, place.id)}>        
                                        </i>
                                    </div>
                                    <div className="photo-desc-div">
                                        <p 
                                            className="photo-desc"
                                            onClick={()=> searchPlace(place.desc)}
                                            title="Pesquisar lugar"
                                        >
                                            {place.desc}
                                        </p>
                                    </div>        
                                </div>
                            )}
                            <img
                                className="photo-img"
                                src={place.photo_file !== '' && place.photo_file !== null ? place.photo_file : place.photo_url}
                                alt={place.desc}
                            />
                        </div>
                    ))
                ) : (
                    <p className="photo-alert">Nenhum lugar adicionado</p>
                )}
            </div>
        </>
    )
}