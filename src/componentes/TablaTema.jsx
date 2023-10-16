"use client"
import  { useState, useEffect } from 'react';
import axios from 'axios';

const TablaTema = ({ actualizar }) => {
    const [temas, setTemas] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        axios.get('https://practicas-java-production.up.railway.app/tema/traer')
            .then((response) => {
                setTemas(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [actualizar]);

    const handleSort = (column) => {
        if (column === sortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    const sortedTemas = [...temas].sort((a, b) => {
        if (sortBy === 'nombre') {
            return sortOrder === 'asc' ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre);
        } else if (sortBy === 'descripcion') {
            return sortOrder === 'asc' ? a.descripcion.localeCompare(b.descripcion) : b.descripcion.localeCompare(a.descripcion);
        }
        return 0;
    });

    return (
        <div className="container border m-2  rounded p-3">
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
                            <button className="btn btn-outline-secondary" onClick={() => handleSort('descripcion')}>
                                Descripción
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTemas.map((tema, index) => (
                        <tr key={tema.id_tema}>
                            <th scope="row">{index + 1}</th>
                            <td>{tema.nombre}</td>
                            <td>{tema.descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaTema;
