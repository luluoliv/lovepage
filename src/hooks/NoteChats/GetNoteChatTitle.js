import axios from "axios";

export default async function GetNoteChatTitle(props){

    await axios
        .get(
            "https://love-pageapi.onrender.com/notes/" + props.note_id
        )
        .then((responseData) => {
            props.setNote(responseData.data);
        })
        .catch((err) => {
            console.log(err);
        });
}