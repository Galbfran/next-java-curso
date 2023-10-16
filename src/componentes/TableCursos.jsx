"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const TableCursos = ({actualizar}) => {
    const [cursos, setCursos] = useState([]);
    const [sortBy, setSortBy] = useState(null); // Variable para almacenar la columna de ordenamiento
    const [sortOrder, setSortOrder] = useState('asc'); // Variable para almacenar el orden ascendente o descendente

    useEffect(() => {
        axios.get('https://practicas-java-production.up.railway.app/curso/traer')
            .then((response) => {
                setCursos(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [actualizar]);

    const handleSort = (column) => {
        if (column === sortBy) {
            // Si se hace clic en la misma columna, cambia el orden
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            // Si se hace clic en una columna diferente, establece la nueva columna y el orden ascendente
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    // Función para ordenar la tabla según la columna y el orden
    const sortedCursos = [...cursos].sort((a, b) => {
        if (sortBy === 'nombre') {
            return sortOrder === 'asc' ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre);
        } else if (sortBy === 'modalidad') {
            return sortOrder === 'asc' ? a.modalidad.localeCompare(b.modalidad) : b.modalidad.localeCompare(a.modalidad);
        } else if (sortBy === 'fecha_finalizacion') {
            const dateA = new Date(a.fecha_finalizacion);
            const dateB = new Date(b.fecha_finalizacion);
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        }
        return 0;
    });

    return (
        <div className="container border m-auto my-3 rounded p-3">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                            <button className="btn btn-outline-secondary" onClick={() => handleSort('nombre')}>
                                Nombre
                            </button>
                        </th>
                        <th scope="col">
                            <button className="btn btn-outline-secondary" onClick={() => handleSort('modalidad')}>
                                Modalidad
                            </button>
                        </th>
                        <th scope="col">
                            <button className="btn btn-outline-secondary" onClick={() => handleSort('fecha_finalizacion')}>
                                Fecha Finalización
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedCursos.map((curso, index) => (
                        <tr key={curso.id_curso}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <Link href={`/cursos/${curso.id_curso}`}>
                                    {curso.nombre}
                                </Link>
                            </td>
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
