"use client"
import  { useEffect, useState } from 'react';
import axios from 'axios';

const CursoDetail = ({ courseId }) => {
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    // Realizar la solicitud a la API utilizando Axios cuando el componente se monte
    axios.get(`https://practicas-java-production.up.railway.app/curso/traer/${courseId}`)
      .then((response) => {
        setCurso(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [courseId]);

  if (!curso) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalle del Curso</h1>
      <p>ID del Curso: {curso.id_curso}</p>
      <p>Nombre: {curso.nombre}</p>
      <p>Modalidad: {curso.modalidad}</p>
      <p>Fecha de Finalización: {new Date(curso.fecha_finalizacion).toLocaleDateString()}</p>
      <h2>Lista de Temas:</h2>
      <ul>
        {curso.listaDeTemas.map((tema) => (
          <li key={tema.id_tema}>
            <p>ID del Tema: {tema.id_tema}</p>
            <p>Nombre del Tema: {tema.nombre}</p>
            <p>Descripción: {tema.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursoDetail;
