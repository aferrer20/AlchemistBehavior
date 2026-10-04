/* Testimonials.jsx — three pull-quote cards (anonymous) */
function Testimonials() {
  const quotes = [
    { q: "Working with Amanda was the moment my old life ended. I'm not the same person — and I'm never going back.", c: '#E04F8E' },
    { q: "I went from \"someday\" to \"it's already done\" in 90 days. Tripled my income, moved cities, started the brand I'd been sitting on for four years.", c: '#2E8C8C' },
    { q: "Amanda is the friend who tells you the truth and the coach who knows the formula. The combination is unreal. I am unrecognizable to my past self.", c: '#7E5BAF' },
  ];
  return (
    <section id="testimonials" className="section" style={{ background: '#FFF4E3' }}>
      <div className="section__inner">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow" style={{ color: '#E04F8E', marginBottom: 12 }}>Real timelines</div>
          <h2 className="s-h1" style={{ color: '#1A1213' }}>
            They <Tape color="pink" rotate={-2}>did</Tape> the work.<br/>
            <span className="s-italic" style={{ textTransform: 'none' }}>and the universe</span> showed up.
          </h2>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {quotes.map((q, i) => (
            <div key={i} className="card-pop" style={{ background: '#fff', padding: '32px 26px 28px', borderRadius: 20, position: 'relative' }}>
              <div style={{ position: 'absolute', top: -22, left: 18, background: q.c, color: '#fff', fontFamily: 'var(--font-display)', fontSize: 36, lineHeight: 1, padding: '4px 14px 8px', borderRadius: 12, border: '2.5px solid #1A1213', boxShadow: '3px 3px 0 #1A1213' }}>"</div>
              <p style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.5, color: '#1A1213', margin: 0 }}>{q.q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Testimonials });
