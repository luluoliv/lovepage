import axios from "axios";

export default async function GetFeatureByType(props){

    await axios
        .get("https://love-pageapi.onrender.com/features/type/"+props.type)
        .then((responseData) => {
            props.setLoading(false)
            props.setFeature(responseData.data);
        })
        .catch((err) => {
            console.log(err);
    });
}