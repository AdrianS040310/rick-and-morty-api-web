import "./globals.css";
import Navbar from "../components/navbar/navbar";

export const metadata = {
  title: "Rick and Morty",
  description: "¡Prepárate para aventuras interdimensionales con Rick y Morty! Descubre la serie de animación para adultos creada por Justin Roiland y Dan Harmon.Únete a Rick Sanchez, un científico alcohólico y excéntrico, y su nieto Morty Smith en locas y peligrosas aventuras a través del tiempo y el espacio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="html">
      <body className="body">
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
