import axios from "axios"

export default async function PostNote(props){
    const data = {
        title: props.title,
        state: "0",
        user: localStorage.getItem("user_id"),
    };

    try {
        await axios.post(
            "https://love-pageapi.onrender.com/notes/",
            JSON.stringify(data),
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Token " + localStorage.getItem("token"),
                },
                withCredentials: true,
            }
        );
        props.setRefresh(true)
        props.notify(true)
    } catch (error) {
        console.error("Error:", error);
        props.notify(false, error)
    }
};