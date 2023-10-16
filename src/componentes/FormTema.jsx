"use client"

import React, { useState } from 'react';
import axios from 'axios';

const CursoForm = () => {
    // Estado local para el formulario
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
    });

    const handleReset = (event) => {
        setFormData({
            nombre: '',
            descripcion: '',
        })
    }


    // Manejar cambios en los campos de entrada
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Realizar una solicitud POST para enviar los datos al servidor
            const response = await axios.post('https://practicas-java-production.up.railway.app/tema/crear', formData);
            console.log('Respuesta del servidor:', response.data);

            // Limpiar los campos después de enviar
            setFormData({ nombre: '', descripcion: '' });
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
        handleReset();
    };

    return (
        <div className="container border m-2  rounded p-3">
            <h4>Formulario de Temas</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="nombre">Nombre del Curso:</label>
                    <input
                        className="form-control"
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="form-label" htmlFor="descripcion">Descripción del Curso:</label>
                    <textarea
                        className="form-control"
                        id="descripcion"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='d-flex gap-3 mt-3'>
                        
                <button className="btn btn-success" type="submit">Guardar</button>
                <button className="btn btn-danger" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default CursoForm;
