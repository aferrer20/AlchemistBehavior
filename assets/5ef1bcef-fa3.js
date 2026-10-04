/* Footer.jsx — small print + socials */
function Footer() {
  return (
    <footer className="footer-root" style={{ background: '#1A1213', color: '#fff', padding: '48px 32px', borderTop: '3px solid #1A1213' }}>
      <div className="footer-grid" style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 32, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1, textTransform: 'uppercase' }}>Alchemist Behavior</div>
          <div style={{ fontFamily: 'var(--font-italic)', fontStyle: 'italic', fontSize: 16, color: '#FF6FA8', marginTop: 4 }}>your hype woman, every step of the way.</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16, maxWidth: 440, lineHeight: 1.55 }}>
            Life coaching, manifestation work, and the 3-Month Quantum Shift Program with Amanda Ferrer.
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ color: '#F7E84B', marginBottom: 10 }}>Find me</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', fontSize: 15 }}>
            <a href="https://www.instagram.com/alchemistbehavior" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Instagram <span style={{ color: 'rgba(255,255,255,0.55)' }}>@alchemistbehavior</span> →</a>
            <a href="https://www.tiktok.com/@alchemistbehavior" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>TikTok <span style={{ color: 'rgba(255,255,255,0.55)' }}>@alchemistbehavior</span> →</a>
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ color: '#F7E84B', marginBottom: 10 }}>Work with me</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', fontSize: 15 }}>
            <a href="#program" style={{ color: '#fff', textDecoration: 'none' }}>Quantum Shift Program</a>
            <a href="#book" style={{ color: '#fff', textDecoration: 'none' }}>Read the book</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Free affirmations</a>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Newsletter</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: 36, paddingTop: 20, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'rgba(255,255,255,0.5)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span>© 2025 Amanda Ferrer · Alchemist Behavior</span>
        <span>Made in a new timeline.</span>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
