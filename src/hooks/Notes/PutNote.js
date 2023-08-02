import axios from "axios";

export default async function PutNote(props) {
    const data = {
        title: props.title,
        state: props.state,
        user: localStorage.getItem('user_id')
    };

    await axios
        .put(
            "https://love-pageapi.onrender.com/notes/" +
                props.id +
                "/",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Token " + localStorage.getItem("token"),
                },
                withCredentials: true,
            }
        )
        .then(() => {
            props.setRefresh(!props.refresh);
        })
        .then(() => {
            props.notify(true, "Reclamação atualizada.");
        })
        .then(() => {
            return true;
        })
        .catch((err) => {
            console.log(err);
            props.notify(false, "Erro: ação somente para admins");
            return false;
        });
}
