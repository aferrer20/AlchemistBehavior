/* Marquee.jsx — auto-scrolling affirmations tape */
function Marquee() {
  const affirmations = window.__TWEAKS?.affirmations || [
    'I am a magnet for everything meant for me',
    'I trust the timing of my life',
    'I am becoming the version of me I have always known',
    'My future is already taken care of',
    'I receive abundance with ease',
    'The universe conspires in my favor',
    'I am safe to want what I want',
    'I rise to meet the woman I am becoming',
  ];
  const items = [...affirmations, ...affirmations];
  return (
    <div style={{
      backgroundColor: 'var(--marquee-bg, #1A1213)',
      borderTop: '3px solid #1A1213',
      borderBottom: '3px solid #1A1213',
      padding: '18px 0',
      overflow: 'hidden',
    }}>
      <div className="marquee-track" style={{
        display: 'flex', gap: 40,
        animation: 'marquee var(--marquee-speed, 48s) linear infinite',
        whiteSpace: 'nowrap',
        width: 'max-content',
      }}>
        {items.map((w, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: ['#F7E84B', '#7BE0E8', '#FF6FA8', '#D8FF3C'][i % 4],
            display: 'inline-flex', alignItems: 'center', gap: 24,
          }}>
            {w}
            <span aria-hidden="true" style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 999, background: 'rgba(255,255,255,0.4)' }}/>
          </span>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { Marquee });
