import axios from "axios";

export default async function GetNotes(props){

    const { setRefresh } = props

    return await axios
        .get("https://love-pageapi.onrender.com/notes/")
        .then((responseData) => {
          props.setNotes(responseData.data);
          setRefresh(false)
        })
        .catch((err) => {
          console.log(err);
    });
}