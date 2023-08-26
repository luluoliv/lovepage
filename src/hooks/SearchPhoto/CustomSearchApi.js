import axios from "axios";
import { example } from "./json";

export default async function CustomSearchApi(props){

    await axios
        .get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCyn3AF4Q8aoMqq-JODV-qSjuSOP5p7bfo&cx=c095f3ac8b85d412f&q="+ props.title + "&searchType=image")
        .then((responseData) => {
            const links = responseData.data.items.map(item => item.link);
            props.setSearchedPhotos(links)

        })
        .catch((err) => {
          console.log(err);
    });

}