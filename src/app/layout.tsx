import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Fay De la Cruz Acuña | Odontólogo en Barranquilla",
  description:
    "Odontología integral y estética en Barranquilla, Colombia. Aclaramiento dental, diseño de sonrisa, blanqueamiento, prótesis y más. Agenda tu cita con el Dr. Fay De la Cruz Acuña.",
  keywords: [
    "odontólogo Barranquilla",
    "odontología estética",
    "diseño de sonrisa",
    "blanqueamiento dental",
    "Dr. Fay De la Cruz",
    "clínica dental Barranquilla",
    "aclaramiento dental",
  ],
  openGraph: {
    title: "Dr. Fay De la Cruz Acuña | Odontólogo en Barranquilla",
    description:
      "Odontología integral y estética en Barranquilla. Transforma tu sonrisa con el Dr. Fay De la Cruz Acuña.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
