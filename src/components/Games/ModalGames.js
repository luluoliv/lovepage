import { ToastContainer } from "react-toastify";
import { Form, Button, Modal } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import { Notify } from "../../utils/Notify";
import EmblaCarousel from "./EmblaCarrousel";
import GetJogosDestaque from "../../hooks/Games/GetJogosDestaque";
import SearchGame from "../../hooks/Games/SearchGame";
import GetGameDetails from "../../hooks/Games/GetGameDetails";
import PostFeature from "../../hooks/Features/PostFeature";
import ChooseAFile from "./ChooseAFile";

import './ModalGames.css'

export default function ModalGames(props){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [photoFile, setPhotoFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null)

    const [title, setTitle] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [toggleAPIGames, settoggleAPIGames] = useState(true)

    const [jogosDestaque, setJogosDestaque] = useState([]);

    const [search, setSearch] = useState('')
    const [searchedGames, setSearchedGames] = useState(null)
    const [searchedGameDetail, setSearchedGameDetail] = useState(null)
    const [isSearching, setIsSearching] = useState(false)

    const [selectedgame, setSelectedGame] = useState(null)
    const { refresh, setRefresh } = props;

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    useEffect(() => {
        GetJogosDestaque({
            setJogosDestaque: setJogosDestaque,
        });
    }, []);

    const searchGame = async () =>{
        if(search !== '' ){
            setIsSearching(!isSearching)
            await SearchGame({
                search: search,
                setSearchedGames: setSearchedGames
            })
            setIsSearching(false)
        }
    }

    const getGameDetails = async (game_id) => {
        await GetGameDetails({
            game_id: game_id,
            setSearchedGameDetail: setSearchedGameDetail
        })
    }

    const postGame = async () =>{
        if(selectedgame && selectedgame.slug === undefined){
            
            await getGameDetails(selectedgame.game)

            if(searchedGameDetail && searchedGameDetail.artwork_data){
                setIsLoading(true)
                await PostFeature({
                    isPhotoUrl: true,
                    name: selectedgame.name,
                    photo_url: searchedGameDetail.artwork_data[0].url,
                    type: 'jogo',
                    notify: Notify,
                    setIsLoading: setIsLoading,
                    setRefresh: setRefresh,
                    refresh: refresh
                })
                props.onHide()

            }else if(photoUrl !== null && photoFile == null){
                setIsLoading(true)
                await PostFeature({
                    isPhotoUrl: true,
                    name: selectedgame.name,
                    photo_url: photoUrl,
                    type: 'jogo',
                    notify: Notify,
                    setIsLoading: setIsLoading,
                    setRefresh: setRefresh,
                    refresh: refresh
                })
                props.onHide()
            }else if(photoFile != null && photoUrl == null){
                setIsLoading(true)
                await PostFeature({
                    isPhotoUrl: false,
                    name: selectedgame.name,
                    photo_file: photoFile,
                    type: 'jogo',
                    notify: Notify,
                    setIsLoading: setIsLoading,
                    setRefresh: setRefresh,
                    refresh: refresh
                })
                props.onHide()
            }
            else{
                openModal()
                Notify(false, "Adicione uma imagem")
            }
            setPhotoUrl(null)
            setPhotoFile(null)

        }else{
            setIsLoading(true)
            await PostFeature({
                isPhotoUrl: true,
                name: selectedgame.name,
                photo_url: selectedgame.background_image,
                type: 'jogo',
                notify: Notify,
                setIsLoading: setIsLoading,
                setRefresh: setRefresh,
                refresh: refresh
            })
            props.onHide()
        }
    }
    
    const postDefaultGame = async () =>{
        if(title && photoFile){
            setIsLoading(true)
            await PostFeature({
                isPhotoUrl: false,
                name: title,
                photo_file: photoFile,
                type: 'jogo',
                notify: Notify,
                setIsLoading: setIsLoading,
                setRefresh: setRefresh,
                refresh: refresh
            })
            setTitle(null)
            setPhotoFile(null)
            props.onHide()
        }else{
            Notify(false, 'Adicione dados!')
        }
    }

    return (
        <>
            <ToastContainer />
            <ChooseAFile
                visibilityHandler={{
                    show: modalIsOpen,
                    onHide: closeModal
                }}
                setPhotoFile={setPhotoFile}
                setPhotoUrl={setPhotoUrl}
                PhotoUrl={photoUrl}
            />
            <Modal 
                className="modal-gallery"
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="md"
            >
                <Modal.Header
                    className="modal-gallery-head"
                    closeButton
                    closeVariant="white"
                >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Adicionar Jogo
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        {
                            toggleAPIGames ? (
                                <>
                                    <p onClick={()=> settoggleAPIGames(!toggleAPIGames)} className="toggle-p">
                                        Escolher com meus dados
                                    </p>
                                    <div className="game-div">
                                        {
                                            jogosDestaque && jogosDestaque !== '' ? (
                                                <>
                                                    <p>
                                                        Jogos destaque
                                                    </p>
                                                    <EmblaCarousel
                                                        slides={SLIDES}
                                                        options={OPTIONS}
                                                        data={jogosDestaque.results}
                                                        setSelectedGame={setSelectedGame}
                                                        selectedgame={selectedgame}
                                                    />
                                                </>
                                            ) : (
                                                null
                                            )
                                        }
                                        <div className="search-div">
                                            <Form.Label>Nome</Form.Label>
                                            <div className="inp-but-div">
                                                <Form.Control
                                                    className="search-game"
                                                    rows={3}
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                                <Button
                                                    className="search-button"
                                                    variant="outline-dark"
                                                    disabled={isSearching}
                                                    onClick={() => searchGame()}
                                                >
                                                    { isSearching ? "Carregando..." : "Buscar jogo"}
                                                    <i className="fa-solid fa-magnifying-glass img-icon"></i>
                                                </Button>
                                            </div>
                                            {
                                                searchedGames && searchedGames.length > 0 && (
                                                    <section className="search-result">
                                                        {
                                                            searchedGames.map((item) => (
                                                                <div
                                                                    className= {selectedgame == item ? "search-row selected-game" : "search-row"}
                                                                    key={item.id}
                                                                    onClick={()=> setSelectedGame(item)}
                                                                    >
                                                                    <p>
                                                                        {item.name}
                                                                    </p>
                                                                </div>
                                                            ))
                                                        }
                                                    </section>
                                                )
                                            }
                                        </div>
                                        {selectedgame && (
                                            <Button
                                                className="modal-gallery-btn"
                                                variant="outline-dark"
                                                disabled={isLoading}
                                                onClick={() => postGame()}
                                            >
                                                {isLoading ? "Enviando..." : "Enviar"}
                                            </Button>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <> 
                                <p onClick={()=> settoggleAPIGames(!toggleAPIGames)} className="toggle-p">
                                    Pesquisar jogo
                                </p>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        className="modal-gallery-textarea"
                                        rows={3}
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Label>Imagem</Form.Label>
                                <Form.Control
                                    className="modal-gallery-file mb-3"
                                    type="file"
                                    onChange={(e) => setPhotoFile(e.target.files[0])}
                                />

                                <Button
                                    className="modal-gallery-btn"
                                    variant="outline-dark"
                                    disabled={isLoading}
                                    onClick={()=>postDefaultGame()}
                                >
                                    {isLoading ? "Enviando..." : "Enviar"}
                                </Button>
                                </>
                            )
                        }
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}