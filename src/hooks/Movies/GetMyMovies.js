import axios from "axios";

export default async function GetMyMovies(props){

    await axios
        .get("https://love-pageapi.onrender.com/features/type/filme")
        .then((responseData) => {
            props.setLoading(false)
            props.setMovies(responseData.data);
        })
        .catch((err) => {
            console.log(err);
    });
}