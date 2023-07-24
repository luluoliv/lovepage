import axios from "axios";

export default async function GetPhotos(props){

    const { setRefresh } = props

    await axios
        .get("https://love-pageapi.onrender.com/features/")
        .then((responseData) => {
            props.setLoading(false)
            props.setPhotos(responseData.data);
        })
        .catch((err) => {
            console.log(err);
    });
}