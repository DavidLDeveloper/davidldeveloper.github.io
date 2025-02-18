import "./style.css";
import main from "./main.html?raw";

// Inject main content.
document.querySelector<HTMLDivElement>("#app")!.innerHTML = main;
