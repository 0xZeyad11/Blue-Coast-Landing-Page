import NavBar from "./components/NavBar";
import AboutUs from "./Pages/AboutUs";
import Clients from "./Pages/Clients";
import ContactSection from "./Pages/ContactForm";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <NavBar />
      <ContactUs />
      <hr className="mt-20 border-gray-300" />
      <AboutUs />
      <br />
      <Clients />
      <br />
      <ContactSection />
    </>
  );
}

export default App;
