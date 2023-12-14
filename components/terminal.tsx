"use client";
import { useState } from "react";

const Terminal = () => {
  const [input, setInput] = useState("user$: ");
  const [output, setOutput] = useState("");

  return (
    <div className="bg-[#4D565E] md:h-[26rem] h-[20rem] overflow-auto border-2 border-blue-300 rounded-sm resize">
      <div className="px-2">
        <p className="pt-4 text-5xl font-silkscreen text-blue-400">About me</p>
        <p className="border-b text-sm font-mono text-blue-300">
          Type 'help' to see all available command in Terminal
        </p>
        <pre className="text-sm font-semibold">{output}</pre>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            let newOutput = "";
            newOutput = output + "\n" + input + "\n";

            switch (input) {
              case "user$: clear":
              case "user$:clear":
                newOutput = "";
                break;

              case "user$: help":
              case "user$:help":
                newOutput +=
                  "clear -> for cleaning terminal. \ncontact -> For contact info. \nbio -> For about me \nskill -> For getting skills. \nexperience -> For getting experiences. \nproject -> For getting projects.";
                break;

              case "user$: contact":
              case "user$:contact":
                newOutput += `Linkedin: https://www.linkedin.com/in/uzair-masood-9053b7276/ \nGmail: uzairmasood50@gmail.com \nGithub: https://github.com/Uzair-Mas00d`;
                break;

              case "user$: skill":
              case "user$:skill":
                newOutput +=
                  "Web development skill   Machine/Deep learning skill     Extras  \nNextjs\t\t\t\t\tSckit-learn\t\t\t\t\t\tPython \nDjango\t\t\t\t\tTensorflow\t\t\t\t\t\tC/C++  \nThree.js\t\t\t\tPandas\t\t\t\t\t\t\tBlender  \nMongodb\t\t\t\t\tMatplolib \nFirebase\t\t\t\tNumpy \nMySql \nReact \nTyprscript \nTailwind \nBootstrap \nHTML \nCss \nJavaScript";
                break;

              case "user$: experience":
              case "user$:experience":
                newOutput += "Progress in development ";
                break;

              case "user$: project":
              case "user$:project":
                newOutput += "Progress in development ";
                break;

              case "user$: bio":
              case "user$:bio":
                newOutput +=
                  "Greetings, Uzair Masood! I am a proficient full-stack web developer residing \nin Pakistan. Engaged as a dedicated freelancer, I possess a passion for crafting \nsophisticated websites. Concurrently, I am pursuing a degree in Data Science at \nthe University of Haripur, with an anticipated graduation date in June 2025.";
                break;

              default:
                newOutput += "Unknown Command";
            }

            setOutput(newOutput);
            setInput("user$: ");
          }
        }}
        className={`border-0 outline-none m-0 p-0 bg-transparent w-full px-2 ${
          output === "" ? "pt-4" : "pt-0"
        }`}
      />
    </div>
  );
};

export default Terminal;
