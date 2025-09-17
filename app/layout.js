import "./globals.css";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { CartProvider } from "../Context/CartContext";

export const metadata = {
  title: "Photo Frame Store",
  description: "Best Photo Frames Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Provider wraps the whole app */}
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
  