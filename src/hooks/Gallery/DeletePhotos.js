import axios from "axios";

export default async function DeletePhoto(props) {
    try {
        await axios.delete(
            `https://love-pageapi.onrender.com/notes/${localStorage.getItem(
                "photo_id"
            )}/`,
            {
                headers: {
                    Authorization: "Token " + localStorage.getItem("token"),
                },
                withCredentials: true,
            }
        );
        props.setPhoto(null); // define a foto como null para removê-la da exibição
        props.closeModal();
        props.notify(true, "Foto deletada com sucesso");
    } catch (err) {
        console.log(err);
        props.closeModal();
        props.notify(false, "Erro: ação somente para admins");
    }
}
