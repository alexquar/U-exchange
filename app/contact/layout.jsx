import Navbar from "../components/Navbar";


export default async function ContactLayout({ children }) {
  return (
    <>
<Navbar />
      {children}
    </>
  )
}