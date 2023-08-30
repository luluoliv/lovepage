import axios from "axios";

export default async function GetJogosDestaque(props){

    await axios
        .get("https://love-pageapi.onrender.com/gameapis/popular")
        .then((responseData) => {
            props.setJogosDestaque(responseData.data);
        })
        .catch((err) => {
          console.log(err);
        });
}