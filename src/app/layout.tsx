import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login",
};
interface Star {
  id: string;
  type: "lg" | "sm";
}

interface Dot {
  id: string;
  isBlinking: boolean;
}

interface SkyLevel {
  id: string;
  divs: number | null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lgStarsCount = 3;
  const smStarsCount = 6;
  const dotsCount = 12;
  const transition = 40;
  const skyLevelsCount = 6;

  // Create large stars
  const lgStars: Star[] = Array.from({ length: lgStarsCount }, (_, i) => ({
    id: `lgStar-${i}`,
    type: "lg",
  }));

  // Create small stars
  const smStars: Star[] = Array.from({ length: smStarsCount }, (_, i) => ({
    id: `smStar-${i}`,
    type: "sm",
  }));

  // Combine large and small stars
  const newStars = [...lgStars, ...smStars];

  // Create dots
  const newDots: Dot[] = Array.from({ length: dotsCount }, (_, i) => ({
    id: `dot-${i}`,
    isBlinking: Math.random() < 0.33,
  }));

  // Create sky levels
  const newSkyLevels: SkyLevel[] = Array.from(
    { length: skyLevelsCount },
    (_, i) => ({
      id: `skyLevel-${i}`,
      divs: i === skyLevelsCount - 1 ? null : transition,
    })
  );

  const stars = newStars;
  const dots = newDots;
  const skyLevels = newSkyLevels;
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="sky">
          {skyLevels.map((level) => (
            <div key={level.id} className="sky-level">
              {level.divs &&
                Array.from({ length: level.divs }, (_, i) => (
                  <div key={`${level.id}-div-${i}`}></div>
                ))}
            </div>
          ))}
          <div id="stars" className="sky-stars">
            {dots.map((dot) => (
              <span
                key={dot.id}
                className={`dot ${dot.isBlinking ? "dot--blinking" : ""}`}
              ></span>
            ))}
            {stars.map((star) => (
              <span key={star.id} className={`star star--${star.type}`}>
                <span className="star__part"></span>
                <span className="star__part"></span>
              </span>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}
