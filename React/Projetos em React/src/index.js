import React from "react";
import { createRoot } from 'react-dom'; // Corrigido de 'react-doom' para 'react-dom'
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
