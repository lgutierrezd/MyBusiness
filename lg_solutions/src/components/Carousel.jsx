const Carousel = () => {
  return (
    // <div id="customCarousel" className="carousel slide" data-ride="carousel" style={{ height: '400px' }}>
    <div id="carouselExampleIndicators" className="carousel slide" style={{ height: '350px' }} data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-item-content d-flex justify-content-evenly" style={{ backgroundColor: '#60FC3F'}} >
            <p className="carusel-titles">Desarrollo Personalizado</p>
            <img src="IMG_0195.png" alt="Imagen 1" style={{ width: '330px', height: '330px' }} />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item-content d-flex justify-content-evenly" style={{ backgroundColor: '#2F064A'}}>
            <p className="carusel-titles text-light">Desarrollo Android <br/> iOS</p>
            <img src="IMG_0193.png" alt="Imagen 2" style={{ width: '330px', height: '330px' }} />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-item-content d-flex justify-content-evenly" style={{ backgroundColor: '#a3cbe6'}}>
            <p className="carusel-titles">Desarrollo Web <br/> node.js <br/> MongoDB</p>
            <img src="IMG_0194.png" alt="Imagen 3" style={{ width: '330px', height: '330px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
