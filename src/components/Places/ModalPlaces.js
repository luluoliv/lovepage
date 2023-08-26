import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import { Notify } from "../../utils/Notify";
import { createClient } from 'pexels';
import CustomSearchApi from "../../hooks/SearchPhoto/CustomSearchApi";
import PostFeature from "../../hooks/Features/PostFeature";

import PostNote from "../../hooks/Notes/PostNotes";

import 'react-toastify/dist/ReactToastify.css';
import "./ModalPlaces.css";


function ModalPlaces(props) {
    const [title, setTitle] = useState('');

    const [searchedPhotos, setSearchedPhotos] = useState(null)
    const [loadingSearch, setLoadingSearch] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState('')

    const [photoFile, setPhotoFile] = useState(null);
    const [toggleSearch, setToggleSearch] = useState(true)

    const [loading, setLoading] = useState(false)
    const { refresh, setRefresh } = props  

    useEffect(() => {
        setPhotoFile(null)
        setSelectedPhoto(null)
    }, [toggleSearch, setToggleSearch]);

    const searchPhotos = async () =>{
        setLoadingSearch(true)
        await CustomSearchApi({
            title: title,
            setSearchedPhotos: setSearchedPhotos
        })
        setLoadingSearch(false)
    }

    const postPlace = async () => {
        if(title !== '' && photoFile !== null){
            setLoading(!loading);
            await PostFeature({
                isPhotoUrl: false,  
                photo_file: photoFile,
                desc: title,
                type: 'lugar',
                setIsLoading: setLoading,
                notify: Notify,
                refresh: refresh,
                setRefresh: setRefresh,
            });
            props.onHide();
        }else if(title !== '' && selectedPhoto !== ''){
            setLoading(!loading);
            await PostFeature({
                isPhotoUrl: true,
                photo_url: selectedPhoto,
                desc: title,
                type: 'lugar',
                setIsLoading: setLoading,
                notify: Notify,
                refresh: refresh,
                setRefresh: setRefresh,
            });
            props.onHide();
        }else{
            console.log('Preencha todas as lacunas')
        }
    };
    

    return (
        <>
            <ToastContainer />

            <Modal
                className="modal-note"
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="md"
            >
                <Modal.Header
                    className="modal-note-head"
                    closeButton
                    closeVariant="white"
                >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Adicionar Lugar
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                className="modal-note-textarea"
                                as="textarea"
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                rows={1}
                                
                            />
                            <p className="choose-own-image" onClick={()=> setToggleSearch(!toggleSearch)}>
                                { toggleSearch ? "Escolher minha propria imagem" : "Escolher imagem do Google"}
                            </p> 
                        </Form.Group>
                        {
                            toggleSearch ? (
                                <>  
                                    {
                                        searchedPhotos ? (
                                            <>
                                                <p>Imagens do Google</p>
                                                <div className="image-grid-container">
                                                    {searchedPhotos.map((link) => (
                                                        <div className="image-grid-item" key={link}>
                                                            { link == selectedPhoto ? (
                                                                <img className="grid-img selected-img" src={link} onClick={(e)=> setSelectedPhoto(e.target.src)}/>
                                                            ) : (
                                                                <img className="grid-img" src={link} onClick={(e)=> setSelectedPhoto(e.target.src)}/>
                                                            ) }
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <Button
                                                    className="google-button"
                                                    variant="outline-dark"
                                                    disabled={loadingSearch}
                                                    onClick={() => searchPhotos()}
                                                >
                                                    {loadingSearch ? 'Buscando' : 'Buscar Imagens no Google'}
                                                    <i className="fa-solid fa-magnifying-glass img-icon"></i>
                                                </Button>
                                            </>
                                        )
                                        
                                    }
                                </>
                            ):(
                                <>
                                    <Form.Control
                                        className="modal-gallery-file mb-3"
                                        type="file"
                                        onChange={(e) => setPhotoFile(e.target.files[0])}
                                    />
                                </>
                            )
                        }
                        <Button
                            className="modal-note-btn"
                            variant="outline-dark"
                            disabled={loading}
                            onClick={() => postPlace()}
                        >
                            {loading ? 'Enviando...' : 'Enviar'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalPlaces;
