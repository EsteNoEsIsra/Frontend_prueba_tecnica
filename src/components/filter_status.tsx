import type { Status_survey } from "../../encuesta";

interface Props {
  estado: Status_survey | "todas";
  onChange: (status_n: Status_survey | "todas") => void;
}

export default function Status_survey_fun({ estado, onChange }: Props) {
  return (
    <select
      value={estado}
      onChange={(e) => onChange(e.target.value as Status_survey | "todas")}
      className="mt-4 p-2 border rounded"
    >
      <option value="todas">Todas</option>
      <option value="borrador">Borrador</option>
      <option value="publicada">Publicada</option>
      <option value="cerrada">Cerrada</option>
    </select>
  );
}

