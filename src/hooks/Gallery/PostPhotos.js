import axios from "axios";

export default async function PostPhoto(props) {
    const formData = new FormData();
    formData.append("photo", props.photo);
    formData.append("desc", props.desc);

    try {
        const response = await axios.post(
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
        props.notify(true, "Foto enviada com sucesso!");
        props.setIsLoading(false); 
        props.setRefresh(!props.refresh)
    } catch (error) {
        console.error("Error:", error);
        props.notify(false, "Erro: ação somente para admins");
        props.setIsLoading(false);
    }
}
