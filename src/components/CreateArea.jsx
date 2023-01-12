import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
    const [isExpanded, setExpand] = useState(false);
    const [inputData, setData] = useState({
        title: "",
        content: ""
    })
    function handleChange(event) {
        const { name, value } = event.target;
        setData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    function submitData(event) {
        props.onAdd(inputData);
        event.preventDefault();
        setData({
            title: "",
            content: ""
        })
    }
    function expand() {
        setExpand(true);
    }
    return (
        <div>
            <form className="create-note">
                {isExpanded && (<input onChange={handleChange} name="title" placeholder="Title" value={inputData.title} />)}
                <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={inputData.content} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitData}>
                        <AddIcon />
                    </Fab>
                </Zoom>

            </form>
        </div>
    );
}

export default CreateArea;