import { students } from "@/data/students";
import { StudentTable } from "@/Components/StudentTable";


const Page = () => {
  return (
    
     <div className="container mx-auto">
        <h1 className="font-bold text-3xl"> Lista de estudantes</h1>
        <StudentTable students = {students}/>
     </div>
  );
}

export default Page;