function ProgramSection({ onCTAClick }) {
  const includes = [
    { t: "12 weekly 1:1 calls", d: "Real talk, every week. We unblock, plan, and align.", c: "#E04F8E" },
    { t: "Voxer between sessions", d: "Daily voice memos with Amanda when you need a pep talk or a reframe.", c: "#2E8C8C" },
    { t: "Custom manifestation plan", d: "A 90-day roadmap built around YOUR timeline \u2014 career, money, love, all of it.", c: "#7E5BAF" },
    { t: "Business / career consulting", d: "If you're building something \u2014 brand, biz, side hustle \u2014 we work on it together.", c: "#6B6BD9" },
    { t: "Workbooks & journal prompts", d: "Every week, new prompts to rewire the beliefs that have been running the show.", c: "#E15549" },
    { t: "Lifetime community access", d: "You're part of the Alchemist Behavior Movement \u2014 for good.", c: "#E5B53C" }
  ];
  const modules = [
    { n: 1, t: "Identity Reset", d: "Month 1 \u2014 we tear down the old story and rebuild who you believe you are.", c: "#E04F8E" },
    { n: 2, t: "Magnetic Living", d: "Month 2 \u2014 daily rituals, mirror work, scripting, and energy hygiene that compound.", c: "#2E8C8C" },
    { n: 3, t: "Aligned Action", d: "Month 3 \u2014 bold moves, real results. By week 12, you're already in the new timeline.", c: "#7E5BAF" }
  ];
  return /* @__PURE__ */ React.createElement("section", { id: "program", className: "section", style: {
    background: "linear-gradient(180deg,#FFB37A 0%,#FF7FA8 100%)",
    borderTop: "3px solid #1A1213"
  } }, /* @__PURE__ */ React.createElement("div", { className: "section__inner", style: { color: "#1A1213" } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: 56 } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { color: "#1A1213", marginBottom: 14 } }, "The flagship"), /* @__PURE__ */ React.createElement("div", { className: "program-plate", style: {
    display: "inline-block",
    background: "#1A1213",
    padding: "22px 36px 26px",
    borderRadius: 22,
    border: "3px solid #1A1213",
    boxShadow: "8px 8px 0 #FFF4E3",
    transform: "rotate(-1deg)"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(28px, 3.4vw, 44px)",
    lineHeight: 1,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#FFF4E3",
    marginBottom: 10
  } }, "The 3-Month"), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(48px, 6vw, 84px)",
    lineHeight: 1,
    letterSpacing: "-0.005em",
    textTransform: "uppercase",
    color: "var(--neon-yellow)",
    whiteSpace: "nowrap"
  } }, "Quantum Shift"), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(28px, 3.4vw, 44px)",
    lineHeight: 1,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#FFF4E3",
    marginTop: 10
  } }, "Program")), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "var(--font-italic)", fontStyle: "italic", fontSize: 24, color: "#1A1213", marginTop: 22, maxWidth: 720, marginLeft: "auto", marginRight: "auto" } }, "12 weeks. One new timeline. No going back.")), /* @__PURE__ */ React.createElement("div", { className: "grid-3", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 56 } }, includes.map((it) => /* @__PURE__ */ React.createElement("div", { key: it.t, className: "card-pop", style: { background: it.c, color: "#fff", padding: 22, borderRadius: 18, textShadow: "0 1px 0 rgba(0,0,0,0.18)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "0.01em" } }, it.t), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-body)", fontSize: 15, marginTop: 8, lineHeight: 1.5 } }, it.d)))), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { color: "#1A1213", textAlign: "center", marginBottom: 18 } }, "Three months \xB7 three shifts"), /* @__PURE__ */ React.createElement("div", { className: "grid-3", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 } }, modules.map((m) => /* @__PURE__ */ React.createElement("div", { key: m.n, className: "card-pop", style: { background: "#FFF4E3", padding: 26, borderRadius: 20 } }, /* @__PURE__ */ React.createElement(NumberCircle, { n: m.n, color: m.c }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1, textTransform: "uppercase", marginTop: 14, color: "#1A1213" } }, m.t), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-body)", fontSize: 16, marginTop: 10, lineHeight: 1.55, color: "#1A1213" } }, m.d)))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginTop: 56 } }, /* @__PURE__ */ React.createElement("button", { className: "btn-pop", onClick: onCTAClick, style: { fontSize: 22, padding: "18px 28px" } }, "Book your Quantum Shift call \u2192"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A1213", marginTop: 16 } }, "Free \xB7 30 min \xB7 No pressure"))));
}
Object.assign(window, { ProgramSection });
