import React, { useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setNote((prevValues) => {
      if (inputName === "title") {
        return {
          title: inputValue,
          content: prevValues.content
        };
      } else if (inputName === "content") {
        return {
          title: prevValues.title,
          content: inputValue
        };
      }
    });
  }
  function handleClick(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
