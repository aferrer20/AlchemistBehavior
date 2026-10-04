/* BookSection.jsx — book pitch + order form */
function BookSection() {
  const chapters = [
    'Understanding Manifestation',
    'The Power of Self-Concept',
    'Releasing Limiting Beliefs',
    'Gratitude as Your Magnet',
    'Visualization & Vision Boards',
    'Manifesting Money, Love & Career',
    'Staying in High Vibration',
    'Taking Aligned Action',
    'Your 30-Day Manifestation Plan',
  ];
  const [orderOpen, setOrderOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  return (
    <section id="book" className="section" style={{ background: '#FFEFC8' }}>
      <div className="section__inner book-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{ transform: 'rotate(-4deg)' }}>
            <img src={window.__resources?.bookCover || "assets/book-cover.png"} alt="Book cover" style={{ width: 300, borderRadius: 8, border: '3px solid #1A1213', boxShadow: '8px 8px 0 #1A1213, 14px 14px 0 #7BE0E8' }} />
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ color: '#E04F8E', marginBottom: 12 }}>The book</div>
          <h2 className="s-h1" style={{ color: '#1A1213' }}>
            Read the<br/><Tape color="yellow" rotate={-2}>guide</Tape> first.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55, color: '#1A1213', maxWidth: 540, marginTop: 18 }}>
            <em>Alchemist Behavior: A Guide to Becoming a Master Manifestor</em> is the playbook. 9 chapters, 55 pages, and one 30-day plan that flips the script on what you thought was possible for your life.
          </p>
          <div className="chapters-grid" style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }}>
            {chapters.map((c, i) => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 28, height: 28, borderRadius: 999,
                  background: ['#FF6FA8','#7BE0E8','#D8FF3C','#FF8B5C','#9E85C8'][i % 5],
                  border: '2px solid #1A1213',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: 14, color: '#1A1213', flexShrink: 0,
                }}>{i + 1}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: '#1A1213' }}>{c}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 26, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <button className="btn-pop" onClick={() => { setOrderOpen(true); setSubmitted(false); }}>Get the book — $22</button>
          </div>
        </div>
      </div>

      {orderOpen && (
        <div className="modal-backdrop" onClick={() => setOrderOpen(false)}>
          <div className="modal celebrate" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOrderOpen(false)} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14, background: '#FF6FA8', border: '2.5px solid #1A1213', borderRadius: 999, width: 32, height: 32, fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 1, cursor: 'pointer', boxShadow: '2px 2px 0 #1A1213' }}>×</button>
            {!submitted ? (
              <>
                <div className="eyebrow" style={{ color: '#E04F8E', marginBottom: 8 }}>Order the book</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1, textTransform: 'uppercase', color: '#1A1213', margin: 0 }}>Alchemist Behavior — $22</h3>
                <p style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontSize: 15, color: '#1A1213', marginTop: 8, marginBottom: 18 }}>Signed copies. Ships within 5 business days.</p>
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const f = e.currentTarget;
                  setSubmitting(true);
                  setError('');
                  try {
                    const res = await fetch('https://formspree.io/f/xwvydndk', {
                      method: 'POST',
                      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        _subject: 'New book order — Alchemist Behavior',
                        Name: f.Name.value,
                        Email: f.Email.value,
                        Address: f.Address.value,
                        Quantity: f.Quantity.value,
                        Inscription: f.Inscription.value || '(none)',
                      }),
                    });
                    if (res.ok) { setSubmitted(true); }
                    else { setError('Something went wrong. Try again or email Amanda directly.'); }
                  } catch (err) {
                    setError('Connection issue. Try again or email Amanda directly.');
                  } finally { setSubmitting(false); }
                }} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <label>
                    <div className="eyebrow" style={{ marginBottom: 5 }}>Full name</div>
                    <input required name="Name" type="text" style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 16, padding: '10px 14px', border: '2.5px solid #1A1213', borderRadius: 12, background: '#fff', boxShadow: '4px 4px 0 #1A1213', outline: 'none' }} />
                  </label>
                  <label>
                    <div className="eyebrow" style={{ marginBottom: 5 }}>Email</div>
                    <input required name="Email" type="email" style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 16, padding: '10px 14px', border: '2.5px solid #1A1213', borderRadius: 12, background: '#fff', boxShadow: '4px 4px 0 #1A1213', outline: 'none' }} />
                  </label>
                  <label>
                    <div className="eyebrow" style={{ marginBottom: 5 }}>Shipping address</div>
                    <textarea required name="Address" rows="3" placeholder="Street, City, State, ZIP, Country" style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 16, padding: '10px 14px', border: '2.5px solid #1A1213', borderRadius: 12, background: '#fff', boxShadow: '4px 4px 0 #1A1213', outline: 'none', resize: 'none' }}></textarea>
                  </label>
                  <div className="order-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <label>
                      <div className="eyebrow" style={{ marginBottom: 5 }}>Quantity</div>
                      <input required name="Quantity" type="number" min="1" defaultValue="1" style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 16, padding: '10px 14px', border: '2.5px solid #1A1213', borderRadius: 12, background: '#fff', boxShadow: '4px 4px 0 #1A1213', outline: 'none' }} />
                    </label>
                    <label>
                      <div className="eyebrow" style={{ marginBottom: 5 }}>Personalize to</div>
                      <input name="Inscription" type="text" placeholder="(optional)" style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 16, padding: '10px 14px', border: '2.5px solid #1A1213', borderRadius: 12, background: '#fff', boxShadow: '4px 4px 0 #1A1213', outline: 'none' }} />
                    </label>
                  </div>
                  <button type="submit" disabled={submitting} className="btn-pop" style={{ marginTop: 8, justifyContent: 'center', opacity: submitting ? 0.6 : 1 }}>{submitting ? 'Sending…' : 'Place order'}</button>
                  {error && <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#E15549', textAlign: 'center' }}>{error}</div>}
                  <div style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontSize: 13, color: 'rgba(26,18,19,0.7)', textAlign: 'center', marginTop: 4 }}>
                    Amanda will email you a payment link within 24 hours.
                  </div>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '12px 8px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1, textTransform: 'uppercase', color: '#1A1213', margin: '4px 0 8px' }}>Order received.</h3>
                <p style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontSize: 17, color: '#1A1213' }}>Amanda will email you a payment link within 24 hours.</p>
                <button onClick={() => setOrderOpen(false)} className="btn-pop btn-pop--cyan" style={{ marginTop: 16 }}>Back to the page</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
Object.assign(window, { BookSection });
