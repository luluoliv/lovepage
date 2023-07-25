import axios from "axios";

export default async function DeletePhotos(props) {
    const { photoId } = props;

    try {
        await axios.delete(
            `https://love-pageapi.onrender.com/features/detail/${photoId}/`,
            {
                headers: {
                    Authorization: "Token " + localStorage.getItem("token"),
                },
                withCredentials: true,
            }
        );
        props.closeModal();
        props.notify(true, "Foto deletada com sucesso");
    } catch (err) {
        console.log(err);
        props.closeModal();
        props.notify(false, "Erro: ação somente para admins");
    }
}
