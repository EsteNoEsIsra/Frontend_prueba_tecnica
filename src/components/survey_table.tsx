import type { Survey } from "../../encuesta";
import {  Table,  TableHeader,  TableBody,  TableFooter,  TableHead,  TableRow,  TableCell,  TableCaption} from "@/components/ui/table"





interface Props {
 encuestas: Survey[];
}

export default function SurveyTable_fun({ encuestas }: Props) {
  return (

    //componente de ui shadcn 

    <Table>
      
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Titulo</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead className="text-right">Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
       {encuestas.map((e) => (
        <TableRow key={e.id}>
          <TableCell >{e.id}</TableCell>
          <TableCell >{e.titulo}</TableCell>
          <TableCell >{e.fecha}</TableCell>
          <TableCell >{e.estado}</TableCell>
        </TableRow>  
        ))}
        
      
        
      </TableBody>
    </Table>
  );
}

