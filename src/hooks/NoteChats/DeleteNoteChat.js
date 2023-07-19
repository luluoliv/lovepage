import axios from "axios";

export default async function DeleteNoteChat(props){
    await axios
        .delete(
            "https://love-pageapi.onrender.com/notes/"+
            localStorage.getItem("note_id"),
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Token " + localStorage.getItem("token"),
                },
                withCredentials: true,
            }
        )
        .then((responseData) => {
            props.setNote(responseData.data);
        })
        .then(()=>{
            props.notify(true, 'Deletado com sucesso')
        })
        .catch((err) => {
            console.log(err);
            props.notify(false, 'Erro: ação permitida somente à admins')
        });
}