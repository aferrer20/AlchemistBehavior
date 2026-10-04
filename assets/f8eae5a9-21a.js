/* primitives.jsx — shared small components */
const { useState, useEffect, useRef } = React;

function Tape({ children, color = "yellow", rotate = -3 }) {
  const bg = {
    yellow: "var(--neon-yellow)",
    pink: "var(--neon-magenta)",
    lime: "var(--neon-lime)",
    cyan: "var(--neon-cyan)",
    coral: "var(--neon-coral)",
    grape: "#9C7BE6",
  }[color];
  const fg = (color === "pink" || color === "coral") ? "#fff" : "#1A1213";
  return (
    <span className="tape" style={{ background: bg, color: fg, transform: `rotate(${rotate}deg)` }}>
      {children}
    </span>
  );
}

function GlowScript({ children, color = "yellow", size = 32 }) {
  const glow = {
    yellow: "0 0 14px rgba(247,232,75,0.85), 0 0 28px rgba(247,232,75,0.45)",
    pink:   "0 0 12px rgba(255,79,182,0.85), 0 0 24px rgba(255,79,182,0.45)",
    cyan:   "0 0 10px rgba(123,224,232,0.9), 0 0 22px rgba(123,224,232,0.5)",
  }[color];
  return (
    <span style={{
      fontFamily: 'var(--font-script)',
      fontSize: size,
      color: '#FFEDD0',
      textShadow: glow,
      display: 'inline-block',
      lineHeight: 1.1,
    }}>{children}</span>
  );
}

function Sparkle({ size = 24, color = "var(--neon-yellow)", className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M12 0 L14 9 L23 12 L14 15 L12 24 L10 15 L1 12 L10 9 Z" fill={color} stroke="#1A1213" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

function Bolt({ size = 28, color = "var(--neon-yellow)", className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M14 1 L3 14 L11 14 L9 23 L21 9 L13 9 L15 1 Z" fill={color} stroke="#1A1213" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function Moon({ size = 26, color = "var(--neon-yellow)", className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M20 14.5 A9 9 0 1 1 9.5 4 A7 7 0 0 0 20 14.5 Z" fill={color} stroke="#1A1213" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function NumberCircle({ n, color = "var(--neon-magenta)" }) {
  return (
    <div style={{
      width: 56, height: 56, borderRadius: 999,
      background: color, color: '#fff',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-display)', fontSize: 30, lineHeight: 1,
      border: '3px solid #fff',
      boxShadow: `0 0 0 3px ${color}, 4px 4px 0 #1A1213`,
    }}>{n}</div>
  );
}

Object.assign(window, { Tape, GlowScript, Sparkle, Bolt, Moon, NumberCircle });
