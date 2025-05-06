import { Ihtml, Icss, Ijavascript, ImaterialUi, ItypeScript, Ireact, Inext, Iredux, Inode, Iangular, Ibootstrap, Ifigma, Itailwind, Ilinux, IlandingIcon, IaboutIcon, IprojectsIcon } from "./icons.utils";



export const stackData = [
    { id: 1, icon: Ihtml, name: 'Html' },
    { id: 2, icon: Icss, name: "Css" },
    { id: 3, icon: Ijavascript, name: 'Javascript' },
    { id: 4, icon: ImaterialUi, name: 'Material UI' },
    { id: 5, icon: ItypeScript, name: 'Typescript' },
    { id: 6, icon: Ireact, name: 'React Js' },
    { id: 7, icon: Inext, name: 'Next Js' },
    { id: 8, icon: Iredux, name: 'Redux' },
    { id: 9, icon: Inode, name: 'Node Js' },
    { id: 10, icon: Iangular, name: 'Angular' },
    { id: 11, icon: Ibootstrap, name: 'Bootstrap' },
    { id: 12, icon: Ifigma, name: 'Figma' },
    { id: 13, icon: Itailwind, name: 'Tailwind CSS' },
    { id: 14, icon: Ilinux, name: 'Linux' }
];

export const icons: Record<string, string> = {
  home: IlandingIcon,
  about: IaboutIcon,
  projects: IprojectsIcon,
};


export const codeEditorData = [
  {
    name: "index.js",
    content: `// Hello, I'm David
A software developer that builds scalable products & systems


//Currently available for remote roles - 
let interestedIn = Contract or Full Time


//Things i do for fun 
const Hobbies = 'Music' | 'Football' | 'Gym' | 'Traveling' | 'Reading' | 'Coding'


Reach out for any questions or just to say hi!`,
    type: "js",
  },
  {
    name: "style.css",
    content: `body { 
  background-color: #282c34; 
  color: white; 
  font-family: Arial, sans-serif;
}`,
    type: "css",
  },
  {
    name: "README.md",
    content: `# Welcome to my VS Code Clone

This is a simple code editor built with React and Tailwind CSS.`,
    type: "md",
  },
];
