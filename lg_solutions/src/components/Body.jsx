import Carousel from "./Carousel";

const Body = () => {
  return (
  < >
    <section id="inicio">
       <Carousel></Carousel>
    </section>
    <section id="servicios">
    <h1 className="body-titles" >Servicios</h1>
      <p className="body-paragraph">Desarrollamos proyectos sólidos y de alta calidad, acorde con las necesidades
        y requerimientos de nuestros clientes.{'\n'} Desarrollo de aplicaiones web y 
        mobiles a la medida y migración de aplicaciones.</p>
    </section>
    {/* <section id="">
      <h1 className="body-titles" >Productos</h1>
    </section> */}
    <section id="">
      <h1 className="body-titles" >Stack</h1>
      <div>
        <img className="stack-images" src="/iOS.png" alt="stack" />
        <img className="stack-images" src="/android.jpeg" alt="stack" />
        <img className="stack-images" src="/nodejs.jpeg" alt="stack" />
        <img className="stack-images" src="/react.jpeg" alt="stack" />
        <img className="stack-images" src="/mongodb.jpeg" alt="stack" />
      </div>
    </section>
    <section id="contacto">
    <h1 className="body-titles">Contacto</h1>
      <p className="body-paragraph">No dude en contactarnos estamos para servirles.</p>
      <p className="body-paragraph">Correo Eléctronico: luis1gutierrez1diaz1@gmail.com</p>
      <p className="body-paragraph">Teléfono: +506 8772 6385</p>
    </section>
  </>
  );
};

export default Body;
