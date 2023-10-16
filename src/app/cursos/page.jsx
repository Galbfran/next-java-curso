import FormCurso from "@/componentes/FormCurso";
import TableCursos from "@/componentes/TableCursos";

const cursosPage = ()=>{
    return (
        <section className="container border m-2 shadow-lg rounded p-3">
            <h2>Cursos</h2>
            <FormCurso />
            <TableCursos />
        </section>
    )
}

export default cursosPage;