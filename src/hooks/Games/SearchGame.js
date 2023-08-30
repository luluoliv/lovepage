import axios from "axios";

export default async function SearchGame(props){

        await axios
        .get("https://love-pageapi.onrender.com/gameapis/search/"+props.search)
        .then((responseData) => {
            props.setSearchedGames(responseData.data)
        })
        .catch((err) => {
          console.log(err);
        });
}