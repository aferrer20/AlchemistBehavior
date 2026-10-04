/* FAQ.jsx — accordion */
function FAQ() {
  const items = [
    { q: 'Who is the Quantum Shift Program for?', a: "Anyone ready to stop \"trying\" and start being. If you've read every manifestation book, journaled until your hand cramped, and you're still stuck waiting for permission — this is for you. You don't need to have it all figured out. You just need to be done playing small." },
    { q: 'How much does it cost?', a: "Pricing is shared on the discovery call so I can recommend the right path for you. The investment is meaningful — because the shift is meaningful. Payment plans available." },
    { q: "I've never had a coach. Is this weird?", a: "Nope. It's a conversation with someone who has done the work and now helps other people do it. We talk like friends. We laugh. We get real. We make a plan. That's it." },
    { q: 'What if I don\'t see results?', a: "You will — but only if you do the work. This isn't magic. It's identity work + nervous system regulation + aligned action. Show up for 90 days like the version of you who already has it, and the universe matches." },
    { q: 'Do I have to be \"spiritual\"?', a: "No. Bring your skepticism. This works whether you call it \"manifestation\" or \"compounding habits\" — the mechanics are the same. Show up, decide, take aligned action, repeat." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="section" style={{ background: '#9E85C8', borderTop: '3px solid #1A1213' }}>
      <div className="section__inner" style={{ maxWidth: 820 }}>
        <div className="eyebrow" style={{ color: '#F7E84B', marginBottom: 12 }}>The honest part</div>
        <h2 className="s-h1" style={{ color: '#fff', textShadow: '3px 3px 0 rgba(0,0,0,0.25)', marginBottom: 36 }}>
          Frequently asked,<br/><span className="s-italic" style={{ textTransform: 'none' }}>honestly answered.</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} style={{ background: '#FFF4E3', border: '2.5px solid #1A1213', borderRadius: 16, boxShadow: '5px 5px 0 #1A1213', overflow: 'hidden' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', textAlign: 'left',
                  background: isOpen ? '#F7E84B' : 'transparent',
                  border: 'none', padding: '16px 20px',
                  fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: '0.02em', textTransform: 'uppercase',
                  color: '#1A1213', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                }}>
                  <span>{it.q}</span>
                  <span style={{ fontSize: 26, lineHeight: 1, transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 200ms' }}>+</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '4px 20px 20px', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.55, color: '#1A1213' }}>{it.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { FAQ });
