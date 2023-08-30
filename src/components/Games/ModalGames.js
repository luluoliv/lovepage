import { ToastContainer } from "react-toastify";
import { Form, Button, Modal } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import { Notify } from "../../utils/Notify";
import EmblaCarousel from "./EmblaCarrousel";
import GetJogosDestaque from "../../hooks/Games/GetJogosDestaque";
import SearchGame from "../../hooks/Games/SearchGame";
import GetGameDetails from "../../hooks/Games/GetGameDetails";

import './ModalGames.css'

export default function ModalGames(props){
    const [photoFile, setPhotoFile] = useState(null);
    const [desc, setDesc] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [toggleAPIGames, settoggleAPIGames] = useState(true)

    const [jogosDestaque, setJogosDestaque] = useState([]);

    const [search, setSearch] = useState('')
    const [searchedGames, setSearchedGames] = useState(null)
    const [searchedGameDetail, setSearchedGameDetail] = useState(null)
    const [isSearching, setIsSearching] = useState(false)

    const [selectedgame, setSelectedGame] = useState(null)
    const { refresh, setRefresh } = props;

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    useEffect(() => {
        GetJogosDestaque({
            setJogosDestaque: setJogosDestaque,
        });
    }, [refresh, setRefresh]);

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
        GetGameDetails({
            game_id: game_id,
            setSearchedGameDetail: setSearchedGameDetail
        })
    }
    
    return (
        <>
            <ToastContainer />
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
                                                type="submit"
                                                disabled={isLoading}
                                                //onClick={postPhoto}
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
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
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
                                    type="submit"
                                    disabled={isLoading}
                                    //onClick={postPhoto}
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