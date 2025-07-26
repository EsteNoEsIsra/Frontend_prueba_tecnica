export type Status_survey = "borrador" | "publicada" | "cerrada";

export interface Survey {
  id: number;
  titulo: string;
  fecha: string;
  estado: Status_survey;
}

