export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <img src="/SDM_Logo2.jpeg" alt="SDM System Dies and Mould" />
      </div>
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#capabilities">Capabilities</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#facilities">Facilities</a></li>
        <li><a href="#contact" className="nav-cta">Get Quote</a></li>
      </ul>
    </nav>
  );
}

