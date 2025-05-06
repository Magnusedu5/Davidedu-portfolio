import { useState } from "react";
import {
  FaFileCode,
  FaCodeBranch,
  FaFileAlt,
} from "react-icons/fa";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Ijs, Imd } from "../../utils/icons.utils";
import { codeEditorData } from "../../utils/data";

const CodeEditorApp = () => {
  const [activeFile, setActiveFile] = useState(codeEditorData[0]);
  const [editorContent, setEditorContent] = useState(activeFile.content);

  const handleFileClick = (file: {
    name: string;
    content: string;
    type: string;
  }) => {
    setActiveFile(file);
    setEditorContent(file.content);
  };

  // Function to render the appropriate icon based on file type
  const getIcon = (fileType: string) => {
    switch (fileType) {
      case "js":
        return <img src={Ijs} alt="JavaScript" />;
      case "css":
        return <FaFileAlt />;
      case "md":
        return <img src={Imd} alt="Markdown" />;
      default:
        return <FaFileCode />;
    }
  };

  return (
    <div className=" w-7/12 m-auto flex text-white my-14">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Tabs */}
        <div className=" flex items-center">
          {codeEditorData.map((file) => (
            <div
              key={file.name}
              className={`px-4 py-2 text-sm cursor-pointer text-[#D6D6D6] flex items-center space-x-2 ${
                activeFile.name === file.name
                  ? "bg-[#303030]"
                  : "text-gray-300 hover:bg-[#444]"
              }`}
              onClick={() => handleFileClick(file)}
            >
              {getIcon(file.type)} {/* Display the icon */}
              <span>{file.name}</span>
            </div>
          ))}
        </div>

        {/* Code Editor with Syntax Highlighting */}
        <div className="flex-1 bg-[#212529] ">
          <CodeMirror
            value={editorContent}
            height="100%"
            extensions={[javascript()]}
            theme="dark"
            onChange={(value) => setEditorContent(value)}
            className="custom-code-mirror"
          />
        </div>

        {/* Bottom Status Bar */}
        <div className="bg-[#2C3034] flex items-center justify-end gap-4 text-xs font-bold px-4 py-2 text-[#808385]">
          <span>LF</span>
          <span>Line 5:36</span>
          <span>UTF8</span>
          <span>2 spaces</span>
          <span>
            <FaCodeBranch className="inline-block mr-1" />
            main
          </span>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorApp;
