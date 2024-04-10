import Navbar from "../components/Navbar";


export default async function MainLayout({ children }) {
  return (
    <>
<Navbar />
      {children}
    </>
  )
}