import { useEffect, useState } from "react";
import type { Survey, Status_survey } from "../encuesta";
import SurveyTable_fun from "./components/survey_table";
import Status_survey_fun from "./components/filter_status";
import { Sun, Moon } from "lucide-react";

export default function App() {
  const [encuestas, setEncuestas] = useState<Survey[]>([]);
  const [estado, setEstado] = useState<Status_survey | "todas">("todas");
  const [darkMode, setDarkMode] = useState(false);

  // carga el json
  useEffect(() => {
    fetch("/encuestas.json")
      .then((res) => res.json())
      .then(setEncuestas);
      //.then((data) => {console.log('Encuestas cargadas', data); setEncuestas(data);})
  }, []);

 useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);


  const filtradas =  estado === "todas" ? encuestas : encuestas.filter((e) => e.estado === estado);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-4 max-w-3xl mx-auto ">
        <h1 className="text-2xl font-bold mb-4 text-center">Encuestas</h1>
        <Status_survey_fun estado={estado} onChange={setEstado} />
        <SurveyTable_fun encuestas={filtradas} />
        <div className="absolute top-4 right-4 flex items-center text-black dark:text-black p-4 rounded z-10">
          <button onClick={() => setDarkMode(!darkMode)} 
            className="mb-4 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600  transition flex items-center gap-2">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}
