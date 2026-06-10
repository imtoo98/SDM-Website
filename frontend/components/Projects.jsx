import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-tag">Recent Work</div>
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-sub">A selection of recent tooling and fabrication projects delivered across automotive, infrastructure, and industrial sectors.</p>
      <div className="projects-grid">
        <div className="project-card featured" style={{backgroundImage:'url(/automotive-tooling.jpg)',backgroundSize:'cover',backgroundPosition:'center'}}>
          <div className="project-card-overlay"></div>
          <span className="bg-icon" style={{opacity:0}}>🔩</span>
          <div className="project-tag" style={{position:'relative',zIndex:2}}>Body Fabrication</div>
          <h3 style={{position:'relative',zIndex:2}}>Body Fabrication &amp; Interior Customization</h3>
          <p style={{position:'relative',zIndex:2}}>Custom-built vehicle body fabrication and interior solutions designed for durability, functionality, and superior craftsmanship. From structural fabrication to premium interior fit-outs, we deliver turnkey solutions tailored to your requirements.</p>
        </div>
        <div className="project-card">
          <span className="bg-icon">⚡</span>
          <div className="project-tag">EV Rickshaw</div>
          <h3>Complete Design, R&amp;D &amp; Prototype Development</h3>
          <p>Designed and manufactured a complete EV rickshaw prototype from concept to final product.</p>
        </div>
        <div className="project-card">
          <span className="bg-icon">🚗</span>
          <div className="project-tag">EV Golf Cart</div>
          <h3>Reverse Engineering for Mass Production</h3>
          <p>We specialize in reverse engineering and indigenization of EV golf cart systems for scalable manufacturing.</p>
        </div>
        <div className="project-card">
          <span className="bg-icon">🪑</span>
          <div className="project-tag">Interior Design</div>
          <h3>Customize Interior Trim &amp; Accessories</h3>
          <p>We develop and produce high-quality FRP, plastic, and sheet metal interior components with precision engineering.</p>
        </div>
        <div className="project-card">
          <span className="bg-icon">🏗️</span>
          <div className="project-tag">Roofing</div>
          <h3>FRP Roof Fabrications</h3>
          <p>32,000 sq. ft. FRP insulated roofing system with 5mm panels, engineered for high sunlight resistance and superior thermal cooling performance.</p>
        </div>
      </div>
    </section>
  );
}
