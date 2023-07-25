import axios from "axios";

export default async function PutPhotos(props) {
    const { photoId } = props;

    const formData = new FormData();
    formData.append("desc", props.desc);
    try {
        await axios.put(
            `https://love-pageapi.onrender.com/features/detail/${photoId}/`,
            formData,
            {
                headers: {
                    Authorization: "Token " + localStorage.getItem("token"),
                },
                withCredentials: true,
            }
        );
        props.closeModal();
        props.notify(true, "Descrição atualizada");
        props.setIsLoading(false);
    } catch (err) {
        console.error("Error:", err);
        props.closeModal();
        props.notify(false, "Erro ao atualizar descrição");
        props.setIsLoading(false);
    }
}
