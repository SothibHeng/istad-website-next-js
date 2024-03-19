import Image from "next/image";
import NavbarComponent from "./components/NavbarComponent";
import SliderComponent from "./components/SliderComponent";

export default function Home() {
  return (
    <div>
      {/* header */}
      <header>
        {/* nav-abr */}
        <NavbarComponent />
      </header>
      {/* main */}
      <main>
        <SliderComponent />
      </main>
      {/* Footer */}
      <footer>
        
      </footer>
    </div>
  );
}
