import axios from "axios";

export default async function GetNoteDetail(props){

    await axios
    .get(
        "https://love-pageapi.onrender.com/notes/" +
            localStorage.getItem("note_id")
    )
    .then((responseData) => {
        props.setNote(responseData.data);
    })
    .catch((err) => {
        console.log(err);
    });
}