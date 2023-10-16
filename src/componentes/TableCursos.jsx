"use client";
import axios from 'axios';
import { useState, useEffect } from 'react';

const TableCursos = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        axios.get('https://practicas-java-production.up.railway.app/curso/traer')
            .then((response) => {
                setCursos(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    console.log(cursos);

    return (
        <div className="container border m-2 rounded p-3">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Modalidad</th>
                        <th scope="col">Fecha Finalización</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos.map((curso) => (
                        <tr key={curso.id_curso}>
                            <th scope="row">{curso.id_curso}</th>
                            <td>{curso.nombre}</td>
                            <td>{curso.modalidad}</td>
                            <td>{new Date(curso.fecha_finalizacion).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableCursos;
