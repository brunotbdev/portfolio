import { createRoot } from "react-dom/client";
import "./assets/styles/.main.css";
import App from "./App.tsx";

import ptbr from "./assets/translations/pt-br.json";
import enus from "./assets/translations/en-us.json";
import { Dialecto, dialectoConfig } from "dialecto";

dialectoConfig({
  languages: { ptbr, enus },
  defaultLanguage: "ptbr",
});

createRoot(document.getElementById("root")!).render(
  <Dialecto>
    <App />
  </Dialecto>
);
