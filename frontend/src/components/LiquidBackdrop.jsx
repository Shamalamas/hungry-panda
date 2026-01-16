export default function LiquidBackdrop() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 20% 20%, #1e1b4b, #020617 70%)",
      }}
    >
      <div style={blob("#6366f1", "-40%", "-30%", "28s")} />
      <div style={blob("#9333ea", "auto", "auto", "34s", true)} />
      <div style={blob("#3b82f6", "20%", "40%", "40s")} />
    </div>
  );
}

function blob(color, top, left, duration, bottomRight = false) {
  return {
    position: "absolute",
    width: "140%",
    height: "140%",
    background: `radial-gradient(circle, ${color}, transparent 65%)`,
    filter: "blur(160px)",
    opacity: 0.45,
    animation: `liquidFloat ${duration} ease-in-out infinite alternate`,
    top: bottomRight ? "auto" : top,
    left: bottomRight ? "auto" : left,
    bottom: bottomRight ? "-45%" : "auto",
    right: bottomRight ? "-35%" : "auto",
  };
}
