
import FormTema from "@/componentes/FormTema";
import TablaTema from "@/componentes/TablaTema";
const cursosTemas = ()=>{
    return (
        <section className="container border m-auto my-3 rounded p-3 shadow-lg ">
            <h2>Temas:</h2>
            <FormTema />
            <TablaTema />
        </section>
    )
}

export default cursosTemas;