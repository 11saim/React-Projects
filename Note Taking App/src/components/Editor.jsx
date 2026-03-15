import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

function Editor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    buttons: [
      "bold",
      "italic",
      "underline",
      "ul",
      "ol",
      "link",
      "image",
      "table",
    ],
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => setContent(newContent)}
    />
  );
}

export default Editor;
