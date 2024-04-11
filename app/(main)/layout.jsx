import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default async function MainLayout({ children }) {
  return (
    <>
<Navbar />
      {children}
<Footer />

    </>
  )
}