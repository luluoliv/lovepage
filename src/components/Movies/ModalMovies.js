import { Dropdown, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

import GetMovies from "../../hooks/Movies/GetMovies";

import "./ModalMovies.css";
import { Notify } from "../../utils/Notify";
import PostMovies from "../../hooks/Movies/PostMovies";

function ModalMovies(props) {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [suggestionsVisible, setSuggestionsVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const { refresh, setRefresh } = props;

    useEffect(() => {
        if (searchTerm.trim() !== "") {
            getMovies();
        } else {
            setMovies([]);
            setSuggestionsVisible(false);
        }
    }, [searchTerm]);

    const getMovies = async () => {
        await GetMovies({
            setIsLoading: setIsLoading,
            setMovies: setMovies,
            setSuggestionsVisible: setSuggestionsVisible,
            searchTerm: searchTerm,
        });
    };

    const handleSelectMovie = (movie) => {
        setSelectedMovie(movie);
        setSearchTerm(movie.title);
        setSuggestionsVisible(false);
    };

    const postMovie = async () => {
        setIsLoading(true);

        await PostMovies({
            photoMovie: selectedMovie.poster_path,
            titleMovie: selectedMovie.title,
            descMovie: selectedMovie.overview,
            type: "filme",
            setIsLoading: setIsLoading,
            notify: Notify,
            refresh: refresh,
            setRefresh: setRefresh,
        });

        props.onHide();
    };

    return (
        <>
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
                        Adicionar filme
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Procurar</Form.Label>
                            <Form.Control
                                className="movie-search modal-note-textarea"
                                as="textarea"
                                rows={1}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {suggestionsVisible && (
                                <Dropdown className="movie-suggestions">
                                    {movies.map((movie) => (
                                        <Dropdown.Item
                                            className="movie-suggestion"
                                            key={movie.id}
                                            onClick={() =>
                                                handleSelectMovie(movie)
                                            }
                                        >
                                            <img
                                                className="movie-img"
                                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                                alt={movie.title}
                                            />
                                            {movie.title}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown>
                            )}
                        </Form.Group>
                        <Button
                            className="modal-note-btn"
                            variant="outline-dark"
                            disabled={isLoading}
                            onClick={postMovie}
                        >
                            {isLoading ? "Enviando..." : "Enviar"}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalMovies;
