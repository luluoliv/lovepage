import axios from "axios";
import { example } from "./json";

export default async function CustomSearchApi(props){

    await axios
        .get("https://love-pageapi.onrender.com/googlecustomsearch/search/"+props.title)
        .then((responseData) => {
            const links = responseData.data.items.map(item => item.link);
            props.setSearchedPhotos(links)

        })
        .catch((err) => {
          console.log(err);
    });

}