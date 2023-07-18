import axios from "axios";
import { useState } from 'react';

export default async function GetNotes(props){

    const { refresh, setRefresh } = props

    return await axios
        .get("https://love-pageapi.onrender.com/notes/")
        .then((responseData) => {
          props.setNotes(responseData.data);
          setRefresh(false)
        })
        .catch((err) => {
          console.log(err);
    });
}