export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
     
      <div className="absolute inset-0 bg-black" />

      <div className="streak streak-1" />
      <div className="streak streak-2" />
      <div className="streak streak-3" />


      <div className="grain" />


      <div className="absolute inset-0 vignette" />

      <style>{`
        .streak {
          position: absolute;
          left: -45%;
          width: 190%;
          height: 55vh;
          top: 10%;
          transform: rotate(-14deg);
          filter: blur(5px); /* less blur = more "streak" */
          opacity: 0.55;
          will-change: transform;
          background:
            /* long diagonal band */
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(170,170,170,0.14) 35%,
              rgba(170,170,170,0.22) 50%,
              rgba(170,170,170,0.14) 65%,
              transparent 100%
            ),
            /* softer secondary haze */
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(120,120,120,0.08) 40%,
              rgba(120,120,120,0.10) 55%,
              transparent 100%
            ),
            /* elliptical smoke “clouds” to break uniformity */
            radial-gradient(60% 80% at 30% 40%, rgba(255,255,255,0.10), transparent 70%),
            radial-gradient(55% 75% at 70% 60%, rgba(200,200,200,0.08), transparent 72%);
        }

        .streak-1 {
          top: -5%;
          opacity: 0.45;
          animation: drift1 18s ease-in-out infinite;
        }

        .streak-2 {
          top: 28%;
          opacity: 0.40;
          filter: blur(30px);
          transform: rotate(-14deg) scale(1.06);
          animation: drift2 26s ease-in-out infinite;
        }

        .streak-3 {
          top: 55%;
          opacity: 0.30;
          filter: blur(34px);
          transform: rotate(-14deg) scale(1.12);
          animation: drift3 32s ease-in-out infinite;
        }

        @keyframes drift1 {
          0%, 100% { transform: rotate(-14deg) translate3d(0, 0, 0); }
          50% { transform: rotate(-14deg) translate3d(160px, -60px, 0); }
        }

        @keyframes drift2 {
          0%, 100% { transform: rotate(-14deg) translate3d(0, 0, 0) scale(1.06); }
          50% { transform: rotate(-14deg) translate3d(-180px, 80px, 0) scale(1.08); }
        }

        @keyframes drift3 {
          0%, 100% { transform: rotate(-14deg) translate3d(0, 0, 0) scale(1.12); }
          50% { transform: rotate(-14deg) translate3d(140px, 120px, 0) scale(1.14); }
        }

        .grain {
          position: absolute;
          inset: 0;
          opacity: 0.10; /* visible grain like reference */
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .vignette {
          background: radial-gradient(
            ellipse at center,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.55) 60%,
            rgba(0,0,0,0.92) 100%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .streak-1, .streak-2, .streak-3 { animation: none; }
        }
      `}</style>
    </div>
  );
}
