import { Banner } from "./components/Banner/Banner";
import { Products } from "./components/Products/Products";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

export default function Home() {
  return (
    <main style={{ background: "#FFFFFF" }}>
      <Header />
      <Banner />
      <Products />
      <Footer />
    </main>
  );
}
