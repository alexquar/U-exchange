"use client"
import { useState } from "react"

export default function TransactionForm() {
    const [from, setFrom]=useState('USD')
    const [to, setTo]=useState('CAD')
    const [fcur, setFcur] = useState('')
    const [tcur, setTcur] = useState('')
    const [when, setWhen] = useState('')
    const [err, setErr] = useState(null)
    const [conversion, setConversion] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
      console.log(when, to, from)
      const res = await fetch(`/api/exchange/${from}/${to}/${when}`)
      const json = await res.json()
        if(!json.data){
            setErr('Could not Fetch Data')
        }
          setConversion(json.data)
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col my-10 p-3 w-full">
        <div className="grid grid-cols-2 gap-3">
        <label className="mx-5">
            <span>
                Starting Currency:
            </span>
            <select className="rounded-lg" 
                   onChange={(e) => setFrom(e.target.value)}
                   value={from}
            >
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
            </select>
        </label>
        <label className="mx-5" >
            <span>
                Starting Amount:
            </span>
            <input type="number" required className="rounded-lg"
            onChange={(e) => setFcur(e.target.value)}
            value={fcur}
            />
        </label>
        </div>
        <div className="grid grid-cols-2 gap-3" >
        <label className="mx-5">
            <span>
                Exchange Currency:
            </span>
            <select className="rounded-lg"
            onChange={(e) => setTo(e.target.value)}
            value={to}
            > 
            <option value="CAD">CAD</option>
                <option value="USD">USD</option>
            </select>
        </label>
        <label className="mx-5">
            <span>
                Exchange Amount:
            </span>
            <input type="number"  className="rounded-lg"
            onChange={(e) => setTcur(e.target.value)}
            value={tcur}
            />
        </label>
        </div>
        <label className="w-1/2 mx-auto ">
            <span>
                When?
            </span>
            <input type="date" required className="rounded-lg" 
            onChange={(e) => setWhen(e.target.value)}
            value={when}
            />
        </label>
        <button className="btn-primary">Check</button>
      </form>
    </div>
  )
}
