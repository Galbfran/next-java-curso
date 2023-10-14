"use client";

import  { useState } from 'react';

function CursoForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        modalidad: 'virtual',
        fecha_finalizacion: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos al servidor o realizar otras acciones
        // utilizando formData para obtener los valores ingresados.
        console.log(formData)
    };

    return (
        <div>
            <h2>Ingresar Datos del Curso</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre del Curso:
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                    />
                </label><br /><br />

                <label>
                    Modalidad:
                    <select
                        name="modalidad"
                        value={formData.modalidad}
                        onChange={handleInputChange}
                    >
                        <option value="virtual">Virtual</option>
                        <option value="presencial">Presencial</option>
                        <option value="semipresencial">Semipresencial</option>
                    </select>
                </label><br /><br />

                <label>
                    Fecha de Finalización:
                    <input
                        type="date"
                        name="fecha_finalizacion"
                        value={formData.fecha_finalizacion}
                        onChange={handleInputChange}
                        required
                    />
                </label><br /><br />

                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}

export default CursoForm;
