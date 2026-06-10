export default function About() {
  return (
    <section id="about">
      <div className="about-visual">
        <div className="about-box about-box-1">⚙️</div>
        <div className="about-box about-box-2">
          <div className="big">ISO</div>
          <div className="label">9001:2015 Certified</div>
        </div>
      </div>
      <div className="about-text">
        <div className="section-tag">About Us</div>
        <h2 className="section-title">
          Engineering<br />Excellence Since<br />
          <em style={{ color: 'var(--navy)', fontStyle: 'normal' }}>2000</em>
        </h2>
        <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', lineHeight: '1.8' }}>
          System Dies and Mould (SDM) has grown from a small tool-room into a full-service mechanical
          engineering firm serving automotive OEMs, industrial equipment manufacturers, and
          infrastructure developers across Pakistan.
        </p>
        <ul className="about-list">
          <li>12,000 sq.ft. state-of-the-art manufacturing facility with climate-controlled tool room</li>
          <li>EDM, VMC, CNC turning centres, wire cut, surface grinders, and coordinate measuring machines</li>
          <li>In-house FRP / composite fabrication shop with AutoCAD capability</li>
          <li>Dedicated design team using SolidWorks, Creo, NX, and Mastercam</li>
          <li>Certified by ISO 9001:2015 with documented quality management system</li>
        </ul>
      </div>
    </section>
  );
}
