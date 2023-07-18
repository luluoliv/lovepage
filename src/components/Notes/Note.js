import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Note.css";

export default function Note(props) {
    const navigate = useNavigate();
    function handleClick(item) {
        localStorage.setItem("note_id", item.id);
        localStorage.setItem("note_title", item.title);
        localStorage.setItem("note_userid", item.user);
        navigate("/notechat");
    }

    const [notes, setNotes] = useState(null);
    const [intervalId, setIntervalId] = useState(null);

    //useEffect(() => {
    //    const fetchData = async () => {
    //        axios
    //            .get("https://love-pageapi.onrender.com/notes/")
    //            .then((responseData) => {
    //                setNotes(responseData.data);
    //            })
    //            .catch((err) => {
    //                console.log(err);
    //        });
    //    }
    //
    //    fetchData()
    //    const id = setInterval(fetchData, 5000)
    //    return () => clearInterval(id)
    //}, []);

    const handleStatusColor = (state) => {
        if (state === "0") {
            return "status-red";
        } else {
            return "status-green";
        }
    };

    return (
        <>
        <div className="scroll-div">    
            <div className="grid-container">
                {notes
                    ? notes.map((item) => {
                          return (
                              <div
                                  className="grid-item"
                                  onClick={() => handleClick(item)}
                              >
                                  <div className="titulo">{item.title}</div>
                                  <div
                                      className={handleStatusColor(item.state)}
                                  >
                                    
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
        </>
    );
}
