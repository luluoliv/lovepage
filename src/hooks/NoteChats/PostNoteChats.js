import axios from "axios";

export default async function PostNoteChats(props){

    const data = {
        reclamacao: props.note_id,
        user: props.user,
        message: props.message,
    };

    await axios
        .post(
            "https://love-pageapi.onrender.com/notes/chats/",
            JSON.stringify(data),
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Token " + localStorage.getItem("token"),
                },
                withCredentials: true,
            }
        )
        .then((response) => {
            props.setChatMessages((prevChatMessages) => [
                ...prevChatMessages,
                data,
            ]);
        })
        .catch((err) => {
            console.log(err);
            props.notify(false, 'Somente admins podem adicionar anotações!')
        });

}