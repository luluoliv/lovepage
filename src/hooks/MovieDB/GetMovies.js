import axios from "axios";

export default async function GetMovies(props) {
    const { search } = props;
    await axios
        .get(`https://love-pageapi.onrender.com/moviedb/${search}`)
        .then((response) => {
            props.setIsLoading(false);
            props.setMovies(response.data.results);
            props.setSuggestionsVisible(true);
        })
        .catch((err) => {
            console.log("Erro ao buscar filmes:", err);
        });
}
