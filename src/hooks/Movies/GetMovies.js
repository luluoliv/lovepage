import axios from "axios";

export default async function GetMovies(props) {
    try {
        const apiKey = "8519802d48f0e65d3a4df9e7a3cc3518";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${props.searchTerm}`;

        const response = await axios.get(url);
        
        props.setIsLoading(false)
        props.setMovies(response.data.results);
        props.setSuggestionsVisible(true);
    } catch (error) {
        console.log("Erro ao buscar filmes:", error);
    }
}
