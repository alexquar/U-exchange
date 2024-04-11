import Link from "next/link"
export default function Navbar() {
  return (
    
    <nav>
        <h1 className="mr-auto ps-10 text-3xl">U Exchange</h1>
        <div className="pr-10">
        <Link className="mx-2 hover:underline" href='/'>Home</Link>
        <Link className="mx-2 hover:underline" href='/about'>About</Link>
        <Link className="mx-2 hover:underline" href='/contact'>Contact</Link>
        </div>
    </nav>
    
  )
}
