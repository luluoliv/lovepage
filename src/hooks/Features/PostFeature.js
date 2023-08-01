import axios from "axios";

export default async function PostFeature(props){
    const formData = new FormData();
    props.name && formData.append("name", props.name)
    props.isPhotoUrl ? formData.append("photo_url", props.photo_url) : formData.append("photo_file", props.photo_file)
    formData.append("desc", props.desc);
    formData.append("type", props.type);

    try {
        await axios.post(
            "https://love-pageapi.onrender.com/features/",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: "Token " + localStorage.getItem("token"),
                },
                withCredentials: true,
            }
        );
        props.notify(true, "Feature enviada com sucesso!");
        props.setIsLoading(false); 
        props.setRefresh(!props.refresh)
    } catch (error) {
        console.error("Error:", error);
        props.notify(false, "Erro: ação somente para admins");
        props.setIsLoading(false);
    }
}