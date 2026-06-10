const steps = [
  { num: '01', title: 'Enquiry & Review', desc: 'Technical review of drawings, tolerances, materials, and production volumes.' },
  { num: '02', title: 'DFM & Quotation', desc: 'Design-for-manufacture analysis, risk identification, and competitive quote.' },
  { num: '03', title: 'Design & CAD', desc: '3D modelling, FEA simulation, and toolpath generation before cutting steel.' },
  { num: '04', title: 'Manufacture & QC', desc: 'Machining, fabrication, heat treatment, coating, and in-process CMM inspection.' },
  { num: '05', title: 'Trial & Handover', desc: 'First-article inspection, trial run, PPAP documentation, and delivery.' },
];

export default function Process() {
  return (
    <section id="process">
      <div className="section-tag">How We Work</div>
      <h2 className="section-title">Our Engineering<br />Process</h2>
      <p className="section-sub" style={{ marginBottom: '70px', color: 'var(--text-muted)' }}>A structured, five-stage workflow that ensures quality, on-time delivery, and zero surprises from enquiry to handover.</p>
      <div className="process-steps">
        {steps.map((s) => (
          <div key={s.num} className="step">
            <div className="step-num">{s.num}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
