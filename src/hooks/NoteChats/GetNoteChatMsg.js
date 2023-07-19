import axios from "axios";

export default async function GetNoteChatMsg(props){

    await axios
        .get(
            "https://love-pageapi.onrender.com/notes/chats/note/" + props.note_id
        )
        .then((responseData) => {
            props.setChatMessages(responseData.data);
        })
        .catch((err) => {
            console.log(err);
        });
}