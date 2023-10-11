const Header = () => {
  const headerStyle = {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px', 
    backgroundColor: '#D2EFFD', 
  };

  const labelStyle = {
    margin: '0 10px'
  };

  const logoStyle = {
    height: '6em',
    padding: '1.5em',
    transition: 'filter 300ms'
  };
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={headerStyle}>
      <div>
        <img style={logoStyle} src="/logo.jpeg"></img>
      </div>
      <div>
        <span style={labelStyle} onClick={() => scrollToSection('inicio')}>Inicio</span>
        <span style={labelStyle} onClick={() => scrollToSection('servicios')}>Servicios</span>
        <span style={labelStyle} onClick={() => scrollToSection('contacto')}>Contacto</span>
      </div>
    </header>
  );
};

export default Header;