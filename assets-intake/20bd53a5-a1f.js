/* @ds-bundle: {"format":4,"namespace":"AlchemistBehaviorDesignSystem_2028e4","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Marquee","sourcePath":"components/brand/Marquee.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"7d907788149c","components/brand/Marquee.jsx":"189f1722c8e7","components/core/Badge.jsx":"a34dd8b5df76","components/core/Button.jsx":"084f4b7c798a","components/core/Card.jsx":"235bea05ca54","components/core/Icon.jsx":"2aa358190f84","components/core/IconButton.jsx":"916e4dddbde7","components/core/Tag.jsx":"64c783c48885","components/feedback/Dialog.jsx":"b6f61eea4089","components/feedback/Toast.jsx":"6bf21c78ac31","components/feedback/Tooltip.jsx":"156721ab5c48","components/forms/Checkbox.jsx":"2d0c74c6c6fe","components/forms/Input.jsx":"0d0315e52fd6","components/forms/Radio.jsx":"8255f5b710b7","components/forms/Select.jsx":"17d245badca2","components/forms/Switch.jsx":"56773bc5e7e0","components/navigation/Accordion.jsx":"07d75a47a896","components/navigation/Tabs.jsx":"e17674001ac1","ui_kits/landing/BookSection.jsx":"a01cbf6d1471","ui_kits/landing/BookingDialog.jsx":"2617e278af41","ui_kits/landing/FAQ.jsx":"801153b98cb1","ui_kits/landing/Footer.jsx":"11169f76fbc1","ui_kits/landing/Hero.jsx":"7dc45f64f8a1","ui_kits/landing/Nav.jsx":"e95d21adf300","ui_kits/landing/ProgramSection.jsx":"10a0211a78c2","ui_kits/landing/SignupCTA.jsx":"7e9515c107ad","ui_kits/landing/Testimonials.jsx":"986737be4803"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AlchemistBehaviorDesignSystem_2028e4 = window.AlchemistBehaviorDesignSystem_2028e4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  color = 'var(--purple-500)',
  glyph = '✦',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      font: '700 13px var(--font-mono)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, glyph && /*#__PURE__*/React.createElement("span", null, glyph), children, glyph && /*#__PURE__*/React.createElement("span", null, glyph));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Marquee.jsx
try { (() => {
const COLORS = ['var(--pink-300)', 'var(--sun-300)', 'var(--lime-300)', 'var(--cyan-300)', 'var(--purple-300)'];
function Marquee({
  items = [],
  speed = 30,
  background = 'var(--ink-900)',
  reverse = false,
  tilt = -2,
  style
}) {
  const id = React.useMemo(() => 'ab-mq-' + Math.random().toString(36).slice(2, 7), []);
  const row = items.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 22,
      paddingRight: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '6px 16px',
      borderRadius: 999,
      border: '2px solid var(--ink-900)',
      background: COLORS[i % COLORS.length],
      color: 'var(--ink-900)',
      font: '800 18px var(--font-sans)',
      whiteSpace: 'nowrap'
    }
  }, w), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sun-500)',
      fontSize: 22
    }
  }, "\u2726")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      background,
      borderBlock: 'var(--border)',
      padding: '14px 0',
      transform: 'rotate(' + tilt + 'deg)',
      margin: tilt ? '0 -20px' : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes ' + id + '{from{transform:translateX(0)}to{transform:translateX(-50%)}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      animation: id + ' ' + speed + 's linear infinite' + (reverse ? ' reverse' : '')
    }
  }, row, row));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const C = {
  pink: 'var(--pink-500)',
  purple: 'var(--purple-500)',
  sun: 'var(--sun-500)',
  lime: 'var(--lime-500)',
  cyan: 'var(--cyan-500)',
  ink: 'var(--ink-900)'
};
const DARK = {
  pink: 1,
  purple: 1,
  ink: 1
};
function Badge({
  color = 'sun',
  sticker = false,
  tilt,
  children,
  style
}) {
  const t = tilt ?? (sticker ? -6 : 0);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: sticker ? '10px 16px' : '4px 10px',
      background: C[color] || color,
      color: DARK[color] ? 'var(--white)' : 'var(--ink-900)',
      border: 'var(--border)',
      borderRadius: sticker ? 'var(--radius-pill)' : 'var(--radius-sm)',
      boxShadow: sticker ? 'var(--shadow-pop-sm)' : 'none',
      font: '700 ' + (sticker ? 14 : 11) + 'px var(--font-mono)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      transform: 'rotate(' + t + 'deg)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const V = {
  primary: {
    bg: 'var(--pink-500)',
    fg: 'var(--white)'
  },
  secondary: {
    bg: 'var(--sun-500)',
    fg: 'var(--ink-900)'
  },
  magic: {
    bg: 'var(--grad-cover)',
    fg: 'var(--white)'
  },
  outline: {
    bg: 'var(--white)',
    fg: 'var(--ink-900)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--ink-900)'
  }
};
const S = {
  sm: {
    p: '8px 16px',
    fs: 14,
    sh: 3
  },
  md: {
    p: '12px 24px',
    fs: 16,
    sh: 5
  },
  lg: {
    p: '18px 34px',
    fs: 19,
    sh: 6
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  iconLeft,
  iconRight,
  fullWidth,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const v = V[variant] || V.primary,
    s = S[size] || S.md;
  const ghost = variant === 'ghost';
  const sh = ghost || disabled ? 0 : down ? 0 : s.sh;
  const off = down && !ghost && !disabled ? s.sh : 0;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      padding: s.p,
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: s.fs,
      letterSpacing: '-0.01em',
      lineHeight: 1.1,
      color: v.fg,
      background: v.bg,
      border: ghost ? '2.5px solid transparent' : 'var(--border)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: sh ? sh + 'px ' + sh + 'px 0 var(--ink-900)' : 'none',
      transform: 'translate(' + off + 'px,' + off + 'px)' + (hover && !down && !disabled && !ghost ? ' translateY(-2px) rotate(-1deg)' : ''),
      textDecoration: ghost && hover ? 'underline wavy var(--pink-500)' : 'none',
      textUnderlineOffset: 5,
      transition: 'transform var(--dur-base) var(--ease-pop), box-shadow var(--dur-fast) linear',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  tone = 'white',
  shadow = 'ink',
  tilt = 0,
  hoverTilt = true,
  padding = 28,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  const bg = {
    white: 'var(--white)',
    pink: 'var(--pink-100)',
    purple: 'var(--purple-100)',
    cyan: 'var(--cyan-100)',
    lime: 'var(--lime-100)',
    sun: 'var(--sun-100)',
    holo: 'var(--grad-holo)',
    ink: 'var(--ink-900)'
  }[tone] || tone;
  const sh = {
    ink: 'var(--shadow-pop)',
    pink: 'var(--shadow-pop-pink)',
    purple: 'var(--shadow-pop-purple)',
    none: 'none'
  }[shadow];
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: bg,
      color: tone === 'ink' ? 'var(--text-inverse)' : 'var(--text-body)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: sh,
      padding,
      transform: 'rotate(' + (h && hoverTilt ? 1 : tilt) + 'deg)',
      transition: 'transform var(--dur-base) var(--ease-pop)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Icon({
  name,
  size = 20,
  color,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    className: 'icon-' + name,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      lineHeight: 1,
      color,
      display: 'inline-flex',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  size = 44,
  color = 'var(--white)',
  onClick,
  style
}) {
  const [down, setDown] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    onMouseLeave: () => setDown(false),
    style: {
      width: size,
      height: size,
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: '50%',
      background: color,
      color: 'var(--ink-900)',
      border: 'var(--border)',
      boxShadow: down ? 'none' : 'var(--shadow-pop-sm)',
      transform: down ? 'translate(3px,3px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-pop)',
      cursor: 'pointer',
      padding: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  color = 'var(--pink-100)',
  selected,
  onClick,
  children,
  style
}) {
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    role: interactive ? 'button' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--ink-900)' : color,
      color: selected ? 'var(--sun-500)' : 'var(--ink-900)',
      border: 'var(--border-w-thin) solid var(--ink-900)',
      font: '600 14px var(--font-sans)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'all var(--dur-fast)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  width = 520
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      padding: 20,
      background: 'rgba(26,11,46,.55)',
      backdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--cream-50)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-pop-lg)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      width: 38,
      height: 38,
      borderRadius: '50%',
      border: 'var(--border)',
      background: 'var(--sun-500)',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--shadow-pop-sm)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon-x",
    style: {
      fontSize: 18
    }
  })), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 48px 18px 0',
      font: '400 34px/1.08 var(--font-display)',
      color: 'var(--ink-900)'
    }
  }, title), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  success: ['var(--lime-500)', 'sparkles'],
  info: ['var(--cyan-300)', 'info'],
  warning: ['var(--sun-500)', 'alert-triangle'],
  error: ['var(--tang-500)', 'x-circle']
};
function Toast({
  tone = 'success',
  title,
  children,
  onClose,
  style
}) {
  const [bg, icon] = T[tone] || T.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      maxWidth: 420,
      padding: '14px 16px',
      background: 'var(--white)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-pop)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 34,
      height: 34,
      display: 'grid',
      placeItems: 'center',
      background: bg,
      border: 'var(--border)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: 'icon-' + icon,
    style: {
      fontSize: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: 16
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink-700)',
      marginTop: 2
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon-x",
    style: {
      fontSize: 16
    }
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  text,
  children,
  placement = 'top'
}) {
  const [s, setS] = React.useState(false);
  const top = placement === 'top';
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setS(true),
    onMouseLeave: () => setS(false),
    onFocus: () => setS(true),
    onBlur: () => setS(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, s && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      [top ? 'bottom' : 'top']: 'calc(100% + 10px)',
      transform: 'translateX(-50%) rotate(-2deg)',
      whiteSpace: 'nowrap',
      padding: '7px 12px',
      background: 'var(--ink-900)',
      color: 'var(--sun-500)',
      borderRadius: 10,
      font: '700 12px var(--font-mono)',
      letterSpacing: '0.06em',
      boxShadow: '3px 3px 0 var(--pink-500)',
      zIndex: 50,
      pointerEvents: 'none'
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  color = 'var(--pink-500)'
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      font: '500 16px var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      border: 'var(--border)',
      borderRadius: 7,
      background: checked ? color : 'var(--white)',
      boxShadow: checked ? 'none' : 'var(--shadow-pop-sm)',
      transform: checked ? 'translate(2px,2px)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-pop)',
      color: 'var(--white)'
    }
  }, checked && /*#__PURE__*/React.createElement("i", {
    className: "icon-check",
    style: {
      fontSize: 16,
      fontWeight: 900
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = 'text',
  multiline,
  rows = 4,
  style
}) {
  const [f, setF] = React.useState(false);
  const El = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-mono)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement(El, {
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      font: '500 16px var(--font-sans)',
      padding: '13px 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--white)',
      color: 'var(--ink-900)',
      border: '2.5px solid ' + (error ? 'var(--tang-500)' : 'var(--ink-900)'),
      outline: 'none',
      resize: 'vertical',
      boxShadow: f ? '4px 4px 0 var(--purple-500)' : 'var(--shadow-pop-sm)',
      transition: 'box-shadow var(--dur-fast)'
    }
  }), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? 'var(--tang-500)' : 'var(--text-muted)',
      fontWeight: error ? 700 : 400
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  disabled,
  color = 'var(--pink-500)'
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      font: '500 16px var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: 'none',
      display: 'grid',
      placeItems: 'center',
      border: 'var(--border)',
      borderRadius: '50%',
      background: checked ? color : 'var(--white)',
      boxShadow: checked ? 'none' : 'var(--shadow-pop-sm)',
      transform: checked ? 'translate(2px,2px)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-pop)',
      color: 'var(--white)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--white)',
      border: '2px solid var(--ink-900)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-mono)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      width: '100%',
      appearance: 'none',
      font: '500 16px var(--font-sans)',
      padding: '13px 44px 13px 16px',
      borderRadius: 'var(--radius-md)',
      border: 'var(--border)',
      background: 'var(--white)',
      color: 'var(--ink-900)',
      boxShadow: 'var(--shadow-pop-sm)',
      cursor: 'pointer'
    }
  }, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("i", {
    className: "icon-chevron-down",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      fontSize: 18
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      font: '500 16px var(--font-sans)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: 54,
      height: 30,
      padding: 0,
      borderRadius: 999,
      border: 'var(--border)',
      cursor: 'inherit',
      background: checked ? 'var(--lime-500)' : 'var(--ink-300)',
      boxShadow: 'var(--shadow-pop-sm)',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 26 : 2,
      width: 21,
      height: 21,
      borderRadius: '50%',
      background: 'var(--white)',
      border: '2px solid var(--ink-900)',
      transition: 'left var(--dur-base) var(--ease-pop)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = -1,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        border: 'var(--border)',
        borderRadius: 'var(--radius-lg)',
        background: on ? 'var(--sun-100)' : 'var(--white)',
        boxShadow: on ? 'var(--shadow-pop-pink)' : 'var(--shadow-pop-sm)',
        transition: 'all var(--dur-base)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? -1 : i),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '18px 22px',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        font: '700 18px/1.3 var(--font-sans)',
        color: 'var(--ink-900)'
      }
    }, it.q, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 'none',
        width: 32,
        height: 32,
        display: 'grid',
        placeItems: 'center',
        borderRadius: '50%',
        border: 'var(--border)',
        background: on ? 'var(--pink-500)' : 'var(--cyan-300)',
        color: on ? 'var(--white)' : 'var(--ink-900)',
        transform: on ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-pop)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "icon-plus",
      style: {
        fontSize: 18
      }
    }))), on && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 22px 20px',
        font: '400 16px/1.6 var(--font-sans)',
        color: 'var(--ink-700)'
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 5,
      background: 'var(--white)',
      border: 'var(--border)',
      borderRadius: 999,
      boxShadow: 'var(--shadow-pop-sm)',
      ...style
    }
  }, tabs.map(t => {
    const id = t.value ?? t;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        padding: '9px 18px',
        borderRadius: 999,
        border: 0,
        cursor: 'pointer',
        font: '700 15px var(--font-sans)',
        background: on ? 'var(--ink-900)' : 'transparent',
        color: on ? 'var(--sun-500)' : 'var(--ink-900)',
        transition: 'all var(--dur-base) var(--ease-pop)'
      }
    }, t.label ?? t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/BookSection.jsx
try { (() => {
function BookSection() {
  const {
    Eyebrow,
    Card,
    Button,
    Icon
  } = window.AlchemistBehaviorDesignSystem_2028e4;
  const chapters = ['The pull you keep ignoring', 'Unbecoming who you were told to be', 'Magnetic AF: energy before strategy', 'Your soul-yes (and every no it costs)', 'Living like it already happened'];
  return /*#__PURE__*/React.createElement("section", {
    id: "book",
    style: {
      padding: 'var(--section-pad-y) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)',
      gap: 64,
      alignItems: 'center'
    },
    className: "ab-two"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '2/3',
      maxWidth: 340,
      width: '100%',
      justifySelf: 'center',
      borderRadius: '6px 18px 18px 6px',
      border: 'var(--border)',
      boxShadow: 'var(--shadow-pop-purple)',
      background: 'var(--grad-holo)',
      transform: 'rotate(-3deg)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, "Book cover placeholder")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "The book"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 18px',
      font: '400 var(--fs-h1)/1.08 var(--font-display)',
      letterSpacing: '-.01em',
      textWrap: 'balance'
    }
  }, "A field guide for the woman who's done playing small."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 var(--fs-body-lg)/1.6 var(--font-sans)',
      color: 'var(--ink-700)',
      maxWidth: 560
    }
  }, "Part memoir, part spellbook. Amanda walks you through the exact shifts that took her from burnt-out and second-guessing to living her highest & best \u2014 on purpose."), /*#__PURE__*/React.createElement(Card, {
    tone: "sun",
    padding: 22,
    hoverTilt: false,
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, chapters.map((c, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'baseline',
      font: '600 17px var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 13px var(--font-mono)',
      color: 'var(--pink-500)'
    }
  }, String(i + 1).padStart(2, '0')), c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "book-open",
      size: 18
    })
  }, "Order the book")))));
}
window.BookSection = BookSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/BookSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/BookingDialog.jsx
try { (() => {
function BookingDialog({
  open,
  onClose
}) {
  const {
    Dialog,
    Input,
    Select,
    Checkbox,
    Button,
    Icon
  } = window.AlchemistBehaviorDesignSystem_2028e4;
  const [done, setDone] = React.useState(false);
  const [f, setF] = React.useState({
    name: '',
    goal: '',
    email: '',
    time: 'Morning',
    ok: false
  });
  const set = k => e => setF({
    ...f,
    [k]: e && e.target ? e.target.value : e
  });
  const close = () => {
    onClose();
    setTimeout(() => setDone(false), 300);
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: close,
    title: done ? 'You\'re in, babe ✨' : 'Book your Quantum Shift Call'
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      lineHeight: 1
    }
  }, "\u2728"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 18px/1.55 var(--font-sans)',
      margin: '16px 0 24px'
    }
  }, "Check your inbox", f.name ? ', ' + f.name : '', ". Your call link is on its way \u2014 and so is your shift."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: close
  }, "Back to the page")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setDone(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "First name is fine",
    value: f.name,
    onChange: set('name')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Your manifesting goal",
    placeholder: "By the end of three months I\u2026",
    multiline: true,
    rows: 3,
    value: f.goal,
    onChange: set('goal')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@email.com",
    value: f.email,
    onChange: set('email')
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Best time to talk",
    options: ['Morning', 'Afternoon', 'Evening'],
    value: f.time,
    onChange: set('time')
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'm ready to say yes to me",
    checked: f.ok,
    onChange: v => setF({
      ...f,
      ok: v
    })
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    disabled: !f.ok,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles"
    })
  }, "Request my call")));
}
window.BookingDialog = BookingDialog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/BookingDialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/FAQ.jsx
try { (() => {
function FAQ() {
  const {
    Eyebrow,
    Accordion
  } = window.AlchemistBehaviorDesignSystem_2028e4;
  const items = [{
    q: 'Is this program for me?',
    a: "If you've been feeling the pull toward something bigger and you're tired of just thinking about it — yes, babe. That pull is the program starting."
  }, {
    q: 'How much time does it take each week?',
    a: 'One 60-minute call, plus tiny daily practices that fit inside the life you already have. Small, consistent, magic.'
  }, {
    q: 'What happens on the Quantum Shift Call?',
    a: "We get honest about where you are, where you want to be, and whether we're a soul-yes for each other. No pressure, ever."
  }, {
    q: 'What if I fall off halfway through?',
    a: "You will, at least once. That's not failure, that's data. We plan for it and we come back."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      padding: '0 var(--container-pad) var(--section-pad-y)',
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "FAQ"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      font: '400 var(--fs-h1)/1.08 var(--font-display)',
      letterSpacing: '-.01em'
    }
  }, "Questions? Good.")), /*#__PURE__*/React.createElement(Accordion, {
    items: items,
    defaultOpen: 0
  }));
}
window.FAQ = FAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/FAQ.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Footer.jsx
try { (() => {
function Footer() {
  const {
    IconButton
  } = window.AlchemistBehaviorDesignSystem_2028e4;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: 'var(--border)',
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '36px var(--container-pad)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 22px var(--font-display)',
      color: 'var(--pink-500)'
    }
  }, "Alchemist Behavior"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-mono)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "\xA9 2026 Alchemist Behavior \xB7 Privacy \xB7 Terms")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "instagram",
    label: "Instagram",
    color: "var(--pink-300)"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "youtube",
    label: "YouTube",
    color: "var(--sun-300)"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "mail",
    label: "Email",
    color: "var(--cyan-300)"
  }))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
function Hero({
  onBook
}) {
  const {
    Button,
    Icon,
    Badge,
    Eyebrow
  } = window.AlchemistBehaviorDesignSystem_2028e4;
  return /*#__PURE__*/React.createElement("header", {
    id: "top",
    style: {
      background: 'var(--grad-cover)',
      borderBottom: 'var(--border)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, ['12%,8%', '82%,14%', '6%,78%', '90%,72%', '48%,6%'].map((p, i) => {
    const [l, t] = p.split(',');
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'absolute',
        left: l,
        top: t,
        fontSize: [34, 22, 28, 40, 18][i],
        color: ['var(--sun-500)', 'var(--white)', 'var(--lime-300)', 'var(--cyan-300)', 'var(--white)'][i]
      }
    }, "\u2726");
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '88px var(--container-pad) 104px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)',
      gap: 56,
      alignItems: 'center'
    },
    className: "ab-hero"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--sun-500)"
  }, "The 3-Month Quantum Shift"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 0',
      font: '400 var(--fs-hero)/0.95 var(--font-display)',
      letterSpacing: '-.015em',
      textShadow: '5px 5px 0 var(--ink-900)',
      textWrap: 'balance'
    }
  }, "Alchemist ", /*#__PURE__*/React.createElement("i", {
    style: {
      fontFamily: 'var(--font-accent)',
      color: 'var(--sun-500)'
    }
  }, "Behavior")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      font: '700 26px/1.3 var(--font-sans)',
      maxWidth: 520,
      textWrap: 'pretty'
    }
  }, "The journey to your highest & best."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      font: '400 19px/1.55 var(--font-sans)',
      maxWidth: 500,
      opacity: .95
    }
  }, "Three months to stop waiting for permission and start living like the version of you who already made it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: onBook,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Book Your Quantum Shift Call"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    onClick: () => window.scrollTo({
      top: document.getElementById('book').offsetTop - 70,
      behavior: 'smooth'
    })
  }, "Get the book"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      justifySelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      aspectRatio: '2/3',
      borderRadius: '6px 18px 18px 6px',
      border: 'var(--border)',
      boxShadow: 'var(--shadow-pop-lg)',
      background: 'var(--grad-sunset)',
      transform: 'rotate(6deg)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: 24,
      boxSizing: 'border-box'
    },
    className: "ab-float"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px var(--font-mono)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, "Book cover", /*#__PURE__*/React.createElement("br", null), "placeholder")), /*#__PURE__*/React.createElement(Badge, {
    sticker: true,
    color: "lime",
    tilt: -10,
    style: {
      position: 'absolute',
      top: -14,
      left: -34
    }
  }, "\u2726 The book"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Nav.jsx
try { (() => {
function Nav({
  active,
  onBook
}) {
  const {
    Button
  } = window.AlchemistBehaviorDesignSystem_2028e4;
  const links = [['program', 'Program'], ['book', 'Book'], ['love', 'Love notes'], ['faq', 'FAQ']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'var(--cream-50)',
      borderBottom: 'var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '12px var(--container-pad)',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      font: '400 24px var(--font-display)',
      color: 'var(--ink-900)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, "Alchemist Behavior"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ab-navlinks",
    style: {
      display: 'flex',
      gap: 6
    }
  }, links.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    style: {
      padding: '8px 14px',
      borderRadius: 999,
      font: '700 15px var(--font-sans)',
      textDecoration: 'none',
      color: active === id ? 'var(--sun-500)' : 'var(--ink-900)',
      background: active === id ? 'var(--ink-900)' : 'transparent'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onBook
  }, "Book a call")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/ProgramSection.jsx
try { (() => {
function ProgramSection({
  onBook
}) {
  const {
    Eyebrow,
    Card,
    Button,
    Icon,
    Badge,
    Tabs
  } = window.AlchemistBehaviorDesignSystem_2028e4;
  const [m, setM] = React.useState('01');
  const modules = {
    '01': ['Unbecoming', 'Month 1', 'Clear the old stories, the borrowed goals and the "shoulds." We make space before we build.', 'pink'],
    '02': ['Rewiring', 'Month 2', 'New beliefs, new habits, new nervous-system baseline. This is where behavior actually changes.', 'cyan'],
    '03': ['Embodying', 'Month 3', 'Act, decide and show up as her — daily. The shift stops being an idea and becomes your life.', 'lime']
  };
  const included = [['video', '12 weekly 1:1 calls'], ['message-circle', 'Voice-note support between calls'], ['notebook-pen', 'Custom daily practice'], ['sparkles', 'Quantum Shift workbook']];
  const forWho = ['You can feel there is more for you', 'You are tired of knowing and not doing', 'You are ready to be held accountable — lovingly'];
  const mod = modules[m];
  return /*#__PURE__*/React.createElement("section", {
    id: "program",
    style: {
      background: 'var(--purple-100)',
      borderBlock: 'var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--section-pad-y) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The program"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 14px',
      font: '400 var(--fs-display)/1.02 var(--font-display)',
      color: 'var(--ink-900)'
    }
  }, "The Quantum ", /*#__PURE__*/React.createElement("i", {
    style: {
      fontFamily: 'var(--font-accent)',
      color: 'var(--purple-500)'
    }
  }, "Shift")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 var(--fs-body-lg)/1.6 var(--font-sans)',
      color: 'var(--ink-700)'
    }
  }, "Three months of 1:1 coaching to close the gap between who you are and who you know you're meant to be.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 28,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    tilt: -1
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      font: '800 22px var(--font-sans)'
    }
  }, "What's included"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, included.map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      font: '500 17px var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      display: 'grid',
      placeItems: 'center',
      border: 'var(--border)',
      borderRadius: 10,
      background: 'var(--sun-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18
  })), t)))), /*#__PURE__*/React.createElement(Card, {
    tone: "ink",
    shadow: "pink",
    tilt: 1
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      font: '800 22px var(--font-sans)',
      color: 'var(--sun-500)'
    }
  }, "This is for you if\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, forWho.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      font: '500 17px/1.4 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pink-300)'
    }
  }, "\u2726"), t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: '01',
      label: '01 Unbecoming'
    }, {
      value: '02',
      label: '02 Rewiring'
    }, {
      value: '03',
      label: '03 Embodying'
    }],
    value: m,
    onChange: setM
  }), /*#__PURE__*/React.createElement(Card, {
    tone: mod[3],
    shadow: "purple",
    hoverTilt: false,
    style: {
      width: '100%',
      maxWidth: 760,
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0,1fr)',
      gap: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'italic 400 110px/0.9 var(--font-accent)',
      color: 'var(--ink-900)'
    }
  }, m), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    color: "ink"
  }, mod[1]), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '10px 0 8px',
      font: '800 30px var(--font-sans)'
    }
  }, mod[0]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 17px/1.6 var(--font-sans)',
      color: 'var(--ink-700)'
    }
  }, mod[2]))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "magic",
    onClick: onBook,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles"
    })
  }, "Book Your Quantum Shift Call"))));
}
window.ProgramSection = ProgramSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/ProgramSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/SignupCTA.jsx
try { (() => {
function SignupCTA({
  onBook
}) {
  const {
    Button,
    Icon,
    Badge
  } = window.AlchemistBehaviorDesignSystem_2028e4;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 var(--container-pad) var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      background: 'var(--ink-900)',
      color: 'var(--cream-50)',
      border: 'var(--border)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-pop-lg)',
      padding: '72px 32px',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    sticker: true,
    color: "sun",
    tilt: 8,
    style: {
      position: 'absolute',
      top: -20,
      right: 40
    }
  }, "\u2726 Limited spots"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '400 var(--fs-display)/1.02 var(--font-display)',
      color: 'var(--pink-500)',
      color: 'var(--cream-50)',
      textWrap: 'balance'
    }
  }, "Your highest ", /*#__PURE__*/React.createElement("i", {
    style: {
      fontFamily: 'var(--font-accent)',
      color: 'var(--pink-500)'
    }
  }, "& best"), " is waiting."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px auto 34px',
      maxWidth: 520,
      font: '400 19px/1.6 var(--font-sans)',
      color: 'var(--ink-300)'
    }
  }, "Book a free 30-minute call. We'll see if the Quantum Shift is your soul-yes."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: onBook,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Book Your Quantum Shift Call")));
}
window.SignupCTA = SignupCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/SignupCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Testimonials.jsx
try { (() => {
function Testimonials() {
  const {
    Eyebrow,
    Card
  } = window.AlchemistBehaviorDesignSystem_2028e4;
  const q = [['I came in wanting a plan. I left with a whole new nervous system. Magnetic AF is real.', 'Client name', 'pink', 'purple', -2], ['Three months ago I was asking permission. Now I just… decide. My husband noticed first.', 'Client name', 'cyan', 'ink', 1], ['Amanda calls you on your stuff with so much love you actually listen.', 'Client name', 'lime', 'pink', -1]];
  return /*#__PURE__*/React.createElement("section", {
    id: "love",
    style: {
      padding: 'var(--section-pad-y) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Love notes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      font: '400 var(--fs-h1)/1.08 var(--font-display)',
      letterSpacing: '-.01em'
    }
  }, "Shifts that already happened.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 32,
      marginTop: 56
    }
  }, q.map(([t, n, tone, sh, tilt], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    tone: tone,
    shadow: sh,
    tilt: tilt
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 60px/0.6 var(--font-display)',
      color: 'var(--pink-500)',
      textShadow: '3px 3px 0 var(--ink-900)',
      height: 34
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 22px',
      font: '600 19px/1.5 var(--font-sans)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: 'var(--border)',
      background: 'var(--grad-cover)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 13px var(--font-mono)',
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, n))))));
}
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Testimonials.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
