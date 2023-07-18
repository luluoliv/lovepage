import axios from "axios";

async function getUserId(user) {
  try {
    const response = await axios.get("https://love-pageapi.onrender.com/usuarios/list");
    const userList = response.data;

    let id = "";
    userList.forEach((item) => {
      if (item.user === user) {
        id = item.id;
      }
    });

    return id;
  } catch (error) {
    console.error(error);
  }
}

export default getUserId;
