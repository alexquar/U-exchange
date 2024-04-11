import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default async function AboutLayout({ children }) {
  return (
    <>
<Navbar />
      {children}
      <Footer />
    </>
  )
}