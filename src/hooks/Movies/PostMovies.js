import axios from "axios";

export default async function PostMovies(props) {
    const formData = new FormData();
    formData.append("photo", props.photoMovie);
    formData.append("desc", props.titleMovie);
    formData.append("desc", props.descMovie);
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

        props.setIsLoading(false);
        props.notify(true, "Filme enviado com sucesso!");
        props.setRefresh(!props.refresh);
    } catch (error) {
        console.error("Error:", error);
        props.notify(false, "Erro: ação somente para admins");
        props.setIsLoading(false);

    }
}
