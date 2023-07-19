import axios from "axios";

export default async function PutNoteChat(props){

    const data = {
        user: localStorage.getItem('note_userid'),
        title: localStorage.getItem('note_title'),
        state: '1'
    }

    await axios
        .put(
            "https://love-pageapi.onrender.com/notes/"+
            localStorage.getItem("note_id")+'/',
            data,
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
            props.notify(true, 'Reclamação resolvida, parabéns!')
        })
        .then(() =>{
            return(true)
        })
        .catch((err) => {
            console.log(err);
            props.notify(true, 'Erro: ação somente para admins')
            return(false)
    });

}