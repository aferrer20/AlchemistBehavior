/* SignupCTA.jsx — bottom-of-page conversion block */
function SignupCTA({ onCTAClick }) {
  return (
    <section className="section" style={{
      background: 'radial-gradient(circle at 50% 50%, #FF8B5C 0%, #FF5BA0 50%, #9F4FB8 100%)',
      borderTop: '3px solid #1A1213',
      textAlign: 'center',
      padding: '120px 32px',
    }}>
      <div className="section__inner" style={{ maxWidth: 820 }}>
        <div className="eyebrow" style={{ color: '#F7E84B', marginBottom: 14 }}>Decide right now</div>
        <h2 className="s-h1" style={{ color: '#fff', textShadow: '4px 4px 0 #1A1213' }}>
          The next 90 days<br/>
          are happening<br/>
          <span style={{ background: '#F7E84B', color: '#1A1213', padding: '0 0.18em', display: 'inline-block', transform: 'rotate(-2deg)', boxShadow: '4px 4px 0 #1A1213', textShadow: 'none' }}>either way.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontSize: 22, color: '#fff', textShadow: '0 2px 0 rgba(0,0,0,0.2)', marginTop: 20, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          You can spend them waiting — or you can spend them becoming. Book the call. Show up as the version of you who already said yes.
        </p>
        <button className="btn-pop" onClick={onCTAClick} style={{ fontSize: 22, padding: '20px 30px', marginTop: 28 }}>
          Book your Quantum Shift call →
        </button>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#F7E84B', marginTop: 18 }}>
          This is your sign
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { SignupCTA });
