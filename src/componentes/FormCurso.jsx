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

    const handleReset = (event) => {
        setFormData({
            nombre: '',
            modalidad: 'virtual',
            fecha_finalizacion: ''
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes enviar los datos al servidor o realizar otras acciones
        // utilizando formData para obtener los valores ingresados.
        console.log(formData)
    };

    return (
        <div className="container border m-2  rounded p-3">
            <h4>Ingresar Datos del Curso:</h4>
            <form onSubmit={handleSubmit} className='d-flex space-around justify-content-center gap-3'>
                <label className="form-label">
                    Nombre del Curso:
                    <input
                        className="form-control"
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                    />
                </label>

                <label className="form-label">
                    Modalidad:
                    <select
                        className="form-select"
                        name="modalidad"
                        value={formData.modalidad}
                        onChange={handleInputChange}
                    >
                        <option value="virtual">Virtual</option>
                        <option value="presencial">Presencial</option>
                        <option value="semipresencial">Semipresencial</option>
                    </select>
                </label>

                <label className="form-label">
                    Fecha de Finalización:
                    <input
                        className="form-control"
                        type="date"
                        name="fecha_finalizacion"
                        value={formData.fecha_finalizacion}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                
                <button className="btn btn-success" type="submit">Guardar</button>
                <button className="btn btn-danger" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
}

export default CursoForm;
