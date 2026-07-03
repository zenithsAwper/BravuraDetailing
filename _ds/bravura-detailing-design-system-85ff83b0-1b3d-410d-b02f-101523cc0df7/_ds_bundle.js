/* @ds-bundle: {"format":3,"namespace":"BravuraDetailingDesignSystem_85ff83","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"HexPlayButton","sourcePath":"components/media/HexPlayButton.jsx"},{"name":"ProgressBar","sourcePath":"components/media/ProgressBar.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"aa21e0946ad6","components/display/Badge.jsx":"26990db7f732","components/display/Card.jsx":"a9afae9d34fa","components/forms/Input.jsx":"3c31019e388c","components/forms/Switch.jsx":"3bc4f97e86ae","components/media/HexPlayButton.jsx":"7e598b098a7a","components/media/ProgressBar.jsx":"3ec664dfb900","components/navigation/Navbar.jsx":"5eaeba747b65","ui_kits/website/BookingCTA.jsx":"4ba528e3bbe1","ui_kits/website/Footer.jsx":"7b8deacd97ff","ui_kits/website/Hero.jsx":"6f8fb790cb76","ui_kits/website/Services.jsx":"14412fc5a1dc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BravuraDetailingDesignSystem_85ff83 = window.BravuraDetailingDesignSystem_85ff83 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bravura primary action button. Sharp-cut rectangle, zero radius.
 * Variants echo the brand's monochrome-plus-gold system.
 */
function Button({
  variant = 'accent',
  size = 'large',
  children,
  disabled = false,
  fullWidth = false,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: "var(--font-display)",
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-0)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur) var(--ease), opacity var(--dur) var(--ease), color var(--dur) var(--ease)',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.4 : 1,
    lineHeight: 1,
    letterSpacing: 'var(--ls-button)'
  };
  const sizes = {
    large: {
      padding: '20px 32px',
      fontSize: 'var(--fs-button)',
      fontWeight: 'var(--fw-regular)'
    },
    medium: {
      padding: '16px 24px',
      fontSize: 'var(--fs-button-sm)',
      fontWeight: 'var(--fw-semibold)'
    },
    small: {
      padding: '11px 18px',
      fontSize: 'var(--fs-button-xs)',
      fontWeight: 'var(--fw-medium)'
    }
  };
  const variants = {
    accent: {
      background: 'var(--gold)',
      color: 'var(--text-on-gold)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--white)',
      border: '1px solid var(--border-ghost)',
      opacity: disabled ? 0.4 : 0.75
    },
    white: {
      background: 'var(--white)',
      color: 'var(--charcoal)'
    },
    dark: {
      background: 'var(--abyss)',
      color: 'var(--white)',
      border: '1px solid var(--border-hairline)'
    },
    gray: {
      background: 'var(--steel)',
      color: 'var(--charcoal)'
    }
  };
  const hoverVariants = {
    accent: {
      background: 'var(--gold-dark)'
    },
    ghost: {
      background: 'var(--teal-action)',
      color: 'var(--white)',
      opacity: 1
    },
    white: {
      background: 'var(--mist)'
    },
    dark: {
      background: 'var(--charcoal)'
    },
    gray: {
      background: 'var(--chrome-3)'
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: e => {
      setHover(true);
      rest.onMouseEnter && rest.onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHover(false);
      rest.onMouseLeave && rest.onMouseLeave(e);
    },
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hoverVariants[variant] : {}),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tiny metallic pill/tag. Near-zero radius. */
function Badge({
  children,
  variant = 'gray',
  style = {},
  ...rest
}) {
  const variants = {
    gray: {
      background: 'var(--steel)',
      color: 'var(--white)'
    },
    gold: {
      background: 'var(--gold)',
      color: 'var(--abyss)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--white)',
      border: '1px solid var(--border-ghost)'
    },
    dark: {
      background: 'var(--charcoal)',
      color: 'var(--smoke)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 8px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-medium)',
      borderRadius: 'var(--radius-2)',
      lineHeight: 1,
      ...variants[variant],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Elevated dark container on the black canvas. Sharp corners, no shadow —
 * elevation is the surface shifting lighter than its surroundings.
 * Optional full-bleed media header with overlaid content.
 */
function Card({
  image,
  eyebrow,
  title,
  children,
  footer,
  elevation = 'charcoal',
  style = {},
  ...rest
}) {
  const bg = elevation === 'iron' ? 'var(--iron)' : elevation === 'abyss' ? 'var(--abyss)' : 'var(--charcoal)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: bg,
      borderRadius: 'var(--radius-0)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16 / 9',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0) 55%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--gold-text)',
      fontWeight: 'var(--fw-medium)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 'var(--fs-feature)',
      lineHeight: 'var(--lh-feature)',
      fontWeight: 'var(--fw-regular)',
      color: 'var(--white)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ash)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '8px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dark-canvas text input. Sharp corners, hairline steel border, gold focus. */
function Input({
  label,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--ash)',
      fontWeight: 'var(--fw-medium)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-body)',
      color: 'var(--white)',
      background: 'var(--abyss)',
      border: `1px solid ${focus ? 'var(--gold)' : 'var(--ash)'}`,
      borderRadius: 'var(--radius-0)',
      padding: '12px 15px',
      outline: 'none',
      transition: 'border-color var(--dur) var(--ease)',
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** The sole rounded element in the system — 20px radius toggle. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {}
}) {
  const track = {
    width: '44px',
    height: '24px',
    borderRadius: 'var(--radius-switch)',
    border: '1px solid #DDDDDD',
    background: checked ? 'var(--gold)' : 'transparent',
    position: 'relative',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background var(--dur) var(--ease)',
    flexShrink: 0,
    opacity: disabled ? 0.4 : 1
  };
  const knob = {
    position: 'absolute',
    top: '2px',
    left: checked ? '22px' : '2px',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: checked ? 'var(--abyss)' : 'var(--white)',
    transition: 'left var(--dur) var(--ease), background var(--dur) var(--ease)'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: track
  }, /*#__PURE__*/React.createElement("span", {
    style: knob
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-body)',
      color: 'var(--smoke)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/media/HexPlayButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hexagonal play/pause control — echoes Bravura's geometric DNA.
 * Thin outline stroke that floats over full-bleed media.
 */
function HexPlayButton({
  playing = false,
  size = 48,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const stroke = hover ? 'var(--gold)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": playing ? 'Pause' : 'Play',
    style: {
      width: size,
      height: size,
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform var(--dur) var(--ease)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "50,4 91,27 91,73 50,96 9,73 9,27",
    fill: "none",
    stroke: stroke,
    strokeWidth: "3",
    style: {
      transition: 'stroke var(--dur) var(--ease)'
    }
  }), playing ? /*#__PURE__*/React.createElement("g", {
    fill: stroke,
    style: {
      transition: 'fill var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "38",
    y: "36",
    width: "7",
    height: "28"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "55",
    y: "36",
    width: "7",
    height: "28"
  })) : /*#__PURE__*/React.createElement("polygon", {
    points: "42,35 68,50 42,65",
    fill: stroke,
    style: {
      transition: 'fill var(--dur) var(--ease)'
    }
  })));
}
Object.assign(__ds_scope, { HexPlayButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/HexPlayButton.jsx", error: String((e && e.message) || e) }); }

// components/media/ProgressBar.jsx
try { (() => {
/** Thin progress line for hero sections — a horizon at the bottom of media. */
function ProgressBar({
  value = 0.4,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '2px',
      background: 'var(--border-white-15)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.max(0, Math.min(1, value)) * 100}%`,
      height: '100%',
      background: 'var(--white)',
      transition: 'width var(--dur-slow) var(--ease)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
/**
 * Bravura top nav — floats in darkness, no background or borders.
 * MENU + hamburger on the left, centered logo, actions on the right.
 */
function Navbar({
  logoSrc,
  links = ['Services', 'Fleet', 'Gallery', 'Contact'],
  onMenu,
  style = {}
}) {
  const icon = path => /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, path);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
      background: 'transparent',
      color: 'var(--white)',
      position: 'relative',
      zIndex: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      background: 'none',
      border: 'none',
      color: 'var(--white)',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-button)',
      fontWeight: 'var(--fw-regular)'
    }
  }, icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }))), "Menu"), logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Bravura Detailing",
    style: {
      height: '40px',
      width: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--fs-card-title)',
      letterSpacing: '2px',
      color: 'var(--white)'
    }
  }, "Bravura"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Search",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--white)',
      cursor: 'pointer',
      padding: 0
    }
  }, icon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Saved",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--white)',
      cursor: 'pointer',
      padding: 0
    }
  }, icon(/*#__PURE__*/React.createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  })))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingCTA.jsx
try { (() => {
const {
  Button,
  Input,
  Switch,
  Badge
} = window.BravuraDetailingDesignSystem_85ff83;

/** Stats strip + booking CTA panel on charcoal. */
function BookingCTA() {
  const [ceramic, setCeramic] = React.useState(true);
  const [pickup, setPickup] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#000',
      padding: '0 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '1px',
      background: 'var(--border-hairline)',
      border: '1px solid var(--border-hairline)',
      marginBottom: '64px'
    }
  }, [['12+', 'Years'], ['9H', 'Ceramic'], ['4,800', 'Cars Detailed'], ['5.0★', 'Rated']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: '#000',
      padding: '32px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '48px',
      lineHeight: 1,
      color: 'var(--gold)',
      fontWeight: 400
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: '12px',
      letterSpacing: '1.5px',
      color: 'var(--ash)',
      marginTop: '10px'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--charcoal)',
      padding: '48px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '48px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Instant Quote"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontWeight: 400,
      fontSize: '40px',
      lineHeight: 1.1,
      color: '#fff'
    }
  }, "Reserve Your Slot"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '16px',
      lineHeight: 1.5,
      color: 'var(--ash)',
      marginTop: '12px'
    }
  }, "Tell us about your vehicle and we'll build a package. Mobile service available across the metro.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Vehicle",
    placeholder: "2023 Porsche 911"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@domain.com"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: ceramic,
    onChange: setCeramic,
    label: "Add ceramic coating"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: pickup,
    onChange: setPickup,
    label: "Pickup & delivery"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "large",
    fullWidth: true
  }, "Get My Quote")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  const cols = [['Services', ['Ceramic Coating', 'Paint Correction', 'Interior Detail', 'Fleet Programs']], ['Company', ['About', 'Gallery', 'Reviews', 'Careers']], ['Visit', ['Book Online', 'Mobile Service', 'Contact', 'Hours']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--iron)',
      padding: '64px 40px 40px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/bravura-logo.png",
    alt: "Bravura Detailing",
    style: {
      height: '64px',
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--ash)',
      marginTop: '20px',
      maxWidth: '280px'
    }
  }, "Precision auto detailing. Flawless by obsession.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: '12px',
      letterSpacing: '1.5px',
      color: '#fff',
      fontWeight: 600
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '14px',
      color: 'var(--ash)',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '48px auto 0',
      paddingTop: '24px',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '12px',
      color: 'var(--slate)'
    }
  }, "\xA9 2026 Bravura Detailing. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: '10px',
      letterSpacing: '1px',
      color: 'var(--slate)'
    }
  }, "Privacy \xB7 Terms")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Navbar,
  HexPlayButton,
  ProgressBar,
  Button
} = window.BravuraDetailingDesignSystem_85ff83;

/** Full-viewport cinematic hero — model-name-style headline over darkness. */
function Hero({
  onMenu
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#000',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 80% at 50% 30%, #2a2a2a 0%, #0d0d0d 45%, #000 80%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    logoSrc: "../../assets/bravura-logo.png",
    onMenu: onMenu
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 40px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: '12px',
      letterSpacing: '3px',
      color: 'var(--gold-text)',
      marginBottom: '20px'
    }
  }, "Precision Auto Detailing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontWeight: 400,
      fontSize: 'clamp(56px, 11vw, 120px)',
      lineHeight: 0.92,
      color: '#fff',
      letterSpacing: '-1px'
    }
  }, "Flawless", /*#__PURE__*/React.createElement("br", null), "By Obsession"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: '18px',
      lineHeight: 1.56,
      color: 'var(--ash)',
      maxWidth: '520px',
      marginTop: '24px'
    }
  }, "Concours-level correction, ceramic protection, and interior restoration for people who refuse ordinary."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      marginTop: '36px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "large"
  }, "Book a Detail"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "large"
  }, "View Packages"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      padding: '0 40px 24px'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 0.35,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(HexPlayButton, {
    playing: true,
    size: 48
  })));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const {
  Card,
  Button,
  Badge
} = window.BravuraDetailingDesignSystem_85ff83;
const SERVICES = [{
  eyebrow: 'Signature',
  title: 'Ceramic Coating',
  body: 'Nine-year graphene-infused protection with a mirror-deep, self-cleaning gloss.',
  tag: 'Popular'
}, {
  eyebrow: 'Restore',
  title: 'Paint Correction',
  body: 'Multi-stage machine polish that erases swirls, holograms, and etching.',
  tag: null
}, {
  eyebrow: 'Interior',
  title: 'Full Detail',
  body: 'Steam extraction, leather conditioning, and complete odor elimination.',
  tag: null
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#000',
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '48px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontSize: '12px',
      letterSpacing: '2px',
      color: 'var(--gold-text)'
    }
  }, "What We Do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      fontWeight: 400,
      fontSize: 'clamp(40px, 6vw, 54px)',
      lineHeight: 1.1,
      color: '#fff'
    }
  }, "The Full Treatment")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    eyebrow: s.eyebrow,
    title: s.title,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "small"
    }, "Learn More"), s.tag && /*#__PURE__*/React.createElement(Badge, {
      variant: "gold"
    }, s.tag))
  }, s.body)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.HexPlayButton = __ds_scope.HexPlayButton;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
