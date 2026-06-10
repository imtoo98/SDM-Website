import { useState, useEffect } from 'react';

const slides = [
  // Air Spoiler
  { src: '/ourprojects/Air Spoiler DIFF MODELS/AirSpoiler1.png',      caption: 'Air Spoiler Model 1',      category: 'Air Spoiler' },
  { src: '/ourprojects/Air Spoiler DIFF MODELS/AirSpoiler-1.png',     caption: 'Air Spoiler Variant 1',    category: 'Air Spoiler' },
  { src: '/ourprojects/Air Spoiler DIFF MODELS/AirSpoiler-2.png',     caption: 'Air Spoiler Variant 2',    category: 'Air Spoiler' },
  { src: '/ourprojects/Air Spoiler DIFF MODELS/AirSpoiler-7.png',     caption: 'Air Spoiler Variant 7',    category: 'Air Spoiler' },
  { src: '/ourprojects/Air Spoiler DIFF MODELS/Airspoiler2.jpg',      caption: 'Air Spoiler Model 2',      category: 'Air Spoiler' },
  { src: '/ourprojects/Air Spoiler DIFF MODELS/Airspoiler3.jpg',      caption: 'Air Spoiler Model 3',      category: 'Air Spoiler' },
  { src: '/ourprojects/Air Spoiler DIFF MODELS/Airspoiler4.png',      caption: 'Air Spoiler Model 4',      category: 'Air Spoiler' },
  { src: '/ourprojects/Air Spoiler DIFF MODELS/Airspoiler5.png',      caption: 'Air Spoiler Model 5',      category: 'Air Spoiler' },
  { src: '/ourprojects/Air Spoiler DIFF MODELS/Airspoiler6.png',      caption: 'Air Spoiler Model 6',      category: 'Air Spoiler' },
  { src: '/ourprojects/Air Spoiler DIFF MODELS/Airspoiler-8.jpg',     caption: 'Air Spoiler Model 8',      category: 'Air Spoiler' },
  { src: '/ourprojects/Air Spoiler DIFF MODELS/Airspoiler-9.jpg',     caption: 'Air Spoiler Model 9',      category: 'Air Spoiler' },
  // Ambulance Parts
  { src: '/ourprojects/Ambulance Parts/Ambulance-Parts.png',                    caption: 'Ambulance Parts Overview',          category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/AC Condencor Cover.JPG',                 caption: 'AC Condenser Cover',                category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Bracket for Oxy.JPG',                    caption: 'Bracket for Oxygen',                category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Cooler Bkt.JPG',                         caption: 'Cooler Bracket',                    category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/First Aid Box.JPG',                      caption: 'First Aid Box',                     category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Fuel Neck Inner.jpg',                    caption: 'Fuel Neck Inner',                   category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Fuel Neck Outer.jpg',                    caption: 'Fuel Neck Outer',                   category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Infil Panel.jpg',                        caption: 'Infil Panel',                       category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Interior Corner.JPG',                    caption: 'Interior Corner Panel',             category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Interior Roof Panel.JPG',                caption: 'Interior Roof Panel',               category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Over Cap Canopy.JPG',                    caption: 'Over Cap Canopy',                   category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Rear Stap Lock.JPG',                     caption: 'Rear Strap Lock',                   category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Roof Locker.JPG',                        caption: 'Roof Locker',                       category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Spare Wheel Carrier.jpg',                caption: 'Spare Wheel Carrier',               category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/Stowage Bkt with cup Handle.JPG',        caption: 'Stowage Bracket with Cup Handle',   category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/wheel Box.jpg',                          caption: 'Wheel Box',                         category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/08-04-07_1824.jpg',                      caption: 'Ambulance Part Detail 1',           category: 'Ambulance Parts' },
  { src: '/ourprojects/Ambulance Parts/08-04-07_1829.jpg',                      caption: 'Ambulance Part Detail 2',           category: 'Ambulance Parts' },
];

export default function OurProjects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((active - 1 + slides.length) % slides.length);
  const next = () => setActive((active + 1) % slides.length);

  return (
    <section id="our-projects" className="ourproj-section">
      <div className="ourproj-layout">

        {/* Left — text */}
        <div className="ourproj-text">
          <div className="section-tag">Our Projects</div>
          <h2 className="section-title">Innovative Engineering<br />Solutions</h2>
          <div className="ourproj-desc">
            <p>Our products portfolio reflects our commitment to precision engineering, innovation, and quality manufacturing. We specialize in delivering customized industrial solutions across multiple sectors, including plastics, composites, and precision machining.</p>
            <p>Our projects are designed to meet the highest standards of performance, durability, and efficiency. From concept development to final production, we ensure every product is crafted with advanced technology and expert workmanship.</p>
            <p>Our expertise includes injection and blow moulds, FRP/GRP fabrication, CNC precision machining, and specialized industrial components. Each project is executed with a focus on reliability, cost-effectiveness, and customer satisfaction.</p>
            <p>We combine modern manufacturing techniques with strict quality control to deliver consistent results. Our solutions serve industries such as automotive, pharmaceuticals, packaging, construction, and engineering.</p>
            <p>We work closely with clients to understand their unique requirements and provide tailored solutions. Timely delivery, technical excellence, and long-term partnerships are at the core of our approach.</p>
            <p>With a skilled team and state-of-the-art facilities, we are equipped to handle projects of varying complexity and scale.</p>
          </div>
        </div>

        {/* Right — image slider */}
        <div className="ourproj-slider">
          <div className="ourproj-slide-wrap">
            {slides.map((s, i) => (
              <div key={i} className={`ourproj-slide${i === active ? ' active' : ''}`}>
                <img src={s.src} alt={s.caption} />
                <div className="ourproj-caption">
                  <span className="ourproj-cat">{s.category}</span>
                  {s.caption}
                </div>
              </div>
            ))}
            <button className="ourproj-arrow ourproj-prev" onClick={prev}>&#8249;</button>
            <button className="ourproj-arrow ourproj-next" onClick={next}>&#8250;</button>
            <div className="ourproj-counter">{active + 1} / {slides.length}</div>
          </div>

          <div className="ourproj-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`ourproj-dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
