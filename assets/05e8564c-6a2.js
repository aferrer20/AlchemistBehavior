/* App.jsx — assembles the landing page + booking modal + Tweaks */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "marqueeBg": "#1A1213",
  "marqueeSpeed": 48,
  "heroGradientStart": "#FF8B5C",
  "heroGradientEnd": "#9F4FB8",
  "accentTape": "yellow",
  "showSparkles": true,
  "ctaLabel": "Book your Quantum Shift call"
}/*EDITMODE-END*/;

function BookingModal({ onClose }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal celebrate" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14, background: '#FF6FA8', border: '2.5px solid #1A1213', borderRadius: 999, width: 32, height: 32, fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 1, cursor: 'pointer', boxShadow: '2px 2px 0 #1A1213' }}>×</button>
        {!submitted ? (
          <>
            <div className="eyebrow" style={{ color: '#E04F8E', marginBottom: 8 }}>Quantum Shift call</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 36, lineHeight: 1, textTransform: 'uppercase', color: '#1A1213', margin: 0 }}>Let's talk timelines.</h3>
            <p style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontSize: 17, color: '#1A1213', marginTop: 8, marginBottom: 18 }}>Free · 30 min · zero pressure.</p>
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
                    _subject: 'New Quantum Shift call request',
                    Name: f.Name.value,
                    Email: f.Email.value,
                    Manifesting: f.Manifesting.value,
                  }),
                });
                if (res.ok) { setSubmitted(true); }
                else { setError('Something went wrong. Try again or email Amanda directly.'); }
              } catch (err) {
                setError('Connection issue. Try again or email Amanda directly.');
              } finally { setSubmitting(false); }
            }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <label style={{ display: 'block' }}>
                <div className="eyebrow" style={{ marginBottom: 5 }}>Your name</div>
                <input required name="Name" type="text" placeholder="Amanda" style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 17, padding: '11px 14px', border: '2.5px solid #1A1213', borderRadius: 12, background: '#fff', boxShadow: '4px 4px 0 #1A1213', outline: 'none' }} />
              </label>
              <label style={{ display: 'block' }}>
                <div className="eyebrow" style={{ marginBottom: 5 }}>Email</div>
                <input required name="Email" type="email" placeholder="hello@you.com" style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 17, padding: '11px 14px', border: '2.5px solid #1A1213', borderRadius: 12, background: '#fff', boxShadow: '4px 4px 0 #1A1213', outline: 'none' }} />
              </label>
              <label style={{ display: 'block' }}>
                <div className="eyebrow" style={{ marginBottom: 5 }}>What are you manifesting?</div>
                <textarea name="Manifesting" rows="2" placeholder="A new timeline." style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 17, padding: '11px 14px', border: '2.5px solid #1A1213', borderRadius: 12, background: '#fff', boxShadow: '4px 4px 0 #1A1213', outline: 'none', resize: 'none' }}></textarea>
              </label>
              <button type="submit" disabled={submitting} className="btn-pop" style={{ marginTop: 8, justifyContent: 'center', opacity: submitting ? 0.6 : 1 }}>{submitting ? 'Sending…' : 'Send it'}</button>
              {error && <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#E15549', textAlign: 'center' }}>{error}</div>}
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '12px 8px' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 36, lineHeight: 1, textTransform: 'uppercase', color: '#1A1213', margin: '4px 0 8px' }}>It's done.</h3>
            <p style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontSize: 18, color: '#1A1213' }}>You'll hear from Amanda within 24 hours. The shift already started.</p>
            <button onClick={onClose} className="btn-pop btn-pop--cyan" style={{ marginTop: 16 }}>Back to the page</button>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [booking, setBooking] = React.useState(false);
  const open = () => setBooking(true);

  // Expose live tweaks to subcomponents that read window.__TWEAKS
  React.useEffect(() => { window.__TWEAKS = t; }, [t]);

  // Apply CSS-var driven tweaks
  const dynamicStyle = `
    :root {
      --marquee-bg: ${t.marqueeBg};
      --marquee-speed: ${t.marqueeSpeed}s;
      --hero-grad-start: ${t.heroGradientStart};
      --hero-grad-end: ${t.heroGradientEnd};
    }
  `;

  return (
    <>
      <style>{dynamicStyle}</style>
      <Nav onCTAClick={open} ctaLabel={t.ctaLabel} />
      <Hero onCTAClick={open} ctaLabel={t.ctaLabel} accentTape={t.accentTape} showSparkles={t.showSparkles} />
      <Marquee />
      <ProgramSection onCTAClick={open} ctaLabel={t.ctaLabel} />
      <BookSection />
      <Testimonials />
      <FAQ />
      <SignupCTA onCTAClick={open} ctaLabel={t.ctaLabel} />
      <Footer />
      {booking && <BookingModal onClose={() => setBooking(false)} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero gradient" />
        <TweakColor label="Top color" value={t.heroGradientStart} onChange={(v) => setTweak('heroGradientStart', v)} />
        <TweakColor label="Bottom color" value={t.heroGradientEnd} onChange={(v) => setTweak('heroGradientEnd', v)} />
        <TweakRadio label="Accent tape" value={t.accentTape}
          options={['yellow', 'pink', 'cyan', 'lime']}
          onChange={(v) => setTweak('accentTape', v)} />
        <TweakToggle label="Floating sparkles" value={t.showSparkles}
          onChange={(v) => setTweak('showSparkles', v)} />

        <TweakSection label="Affirmation marquee" />
        <TweakColor label="Background" value={t.marqueeBg} onChange={(v) => setTweak('marqueeBg', v)} />
        <TweakSlider label="Scroll duration" value={t.marqueeSpeed} min={20} max={120} step={2} unit="s"
          onChange={(v) => setTweak('marqueeSpeed', v)} />

        <TweakSection label="Copy" />
        <TweakText label="CTA label" value={t.ctaLabel}
          onChange={(v) => setTweak('ctaLabel', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
