import axios from "axios";

export default async function GetPhotos(props){

    await axios
        .get("https://love-pageapi.onrender.com/features/type/mural")
        .then((responseData) => {
            props.setLoading(false)
            props.setPhotos(responseData.data);
        })
        .catch((err) => {
            console.log(err);
    });
}