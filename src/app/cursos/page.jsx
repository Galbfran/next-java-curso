"use client"
import { useState } from 'react';
import FormCurso from "@/componentes/FormCurso";
import TableCursos from "@/componentes/TableCursos";

const cursosPage = ()=>{
    const [actualizar , setActualizar] = useState(false);



    return (
        <section className="container border m-auto my-3  shadow-lg rounded p-3">
            <h2>Cursos</h2>
            <FormCurso setActualizar={setActualizar} actualizar ={actualizar}/>
            <TableCursos actualizar={actualizar}/>
        </section>
    )
}

export default cursosPage;