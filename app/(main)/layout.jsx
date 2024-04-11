import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default async function MainLayout({ children }) {
  return (
    <>
<Navbar />
<div className="flex min-h-full flex-col justify-between">
      {children}
<Footer />
</div>
    </>
  )
}