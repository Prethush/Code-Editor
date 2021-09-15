import React from 'react'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

function Editor(props) {
  let { displayName, language, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="mb-8 w-full">
      <div className="bg-gray-500 text-white py-2 flex justify-between px-4 rounded-t-lg">
        <div className="flex items-center">
          <div className="mx-1 w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="mx-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="mx-1 w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <h4 className="font-semibold">{displayName}</h4>
      </div>
      < ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          linewrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material"
        }}
      />
    </div>
  )
}

export default Editor;