import React, { useState } from "react";

function CreateArea(props) {
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
    return (
        <div>
            <form className="create-note">
                <input onChange={handleChange} name="title" placeholder="Title" value={inputData.title} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputData.content} />
                <button onClick={submitData}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;