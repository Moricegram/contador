const Titulos = ({ subtitulo, estadoNuevo }) => {
  //aqui vamos a cargar toda la logica
  //Operador ternario
  //(condicion logica) ? si es da : si no se da.
  return (
    // aqui tambien puedo escribir un poco de logica
    <section className="text-center">
      {/* aqui va todo el maquetado  */}
      <h1 className="display-4">Proyecto contador con react</h1>
      <h2 className="display-6">
        {subtitulo}, estado{" "}
        {estadoNuevo === true ? "habilitado" : "desabilitado"}
      </h2>
      <hr />
    </section>
  );
};

export default Titulos;
