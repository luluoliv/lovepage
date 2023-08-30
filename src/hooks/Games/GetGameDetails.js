import axios from "axios";

export default async function GetGameDetails(props){

        await axios
        .get("https://love-pageapi.onrender.com/gameapis/detail/"+props.game_id)
        .then((responseData) => {
            props.setSearchedGameDetail(responseData.data)
        })
        .catch((err) => {
          console.log(err);
        });
}