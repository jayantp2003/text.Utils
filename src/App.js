import { useState } from "react";
import "./App.css";
import Instruction from "./Components/Instruction";
import Navbar from "./Components/Navbar";
import TextIn from "./Components/TextIn";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") setMode("dark");
    else setMode("light");
  };
  return (
    <div style={{ background: mode === "light" ? "#CFD8DC" : "#455A64" }}>
      
      <Navbar title="txt.Utils" mode={mode} toggleMode={toggleMode} />
      <Instruction mode={mode}/>
      <TextIn heading1="Input: " heading2="Output: " mode={mode} />
    </div>
  );
}

export default App;
