import axios from "axios";

export default async function DeleteFeature(props){
    const { featureId } = props;

    try {
        await axios.delete(
            `https://love-pageapi.onrender.com/features/detail/${featureId}/`,
            {
                headers: {
                    Authorization: "Token " + localStorage.getItem("token"),
                },
                withCredentials: true,
            }
        );
        props.closeModal();
        props.notify(true, "Foto deletada com sucesso");
        props.setRefresh(!props.refresh);
    } catch (err) {
        console.log(err);
        props.closeModal();

        if (err.response && (err.response === 404 || err.response === 410)) {
            props.notify(false, "Erro: a foto já foi deletada.");
        } else {
            props.notify(false, "Erro: ação somente para admins");
        }

    }
    
}