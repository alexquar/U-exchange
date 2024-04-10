"use client"
import { useState } from "react"

export default function TransactionForm() {
    const [from, setFrom]=useState('')
    const [to, setTo]=useState('')
  return (
    <div>
      <form className="flex flex-col my-5 w-full">
        <div className="grid grid-cols-2 gap-3">
        <label className="mx-5">
            <span>
                Starting Currency:
            </span>
            <select className="rounded-lg">
                <option value="">USD</option>
                <option value="">CAD</option>
            </select>
        </label>
        <label className="mx-5" >
            <span>
                Starting Amount:
            </span>
            <input type="number" className="rounded-lg"/>
        </label>
        </div>
        <div className="grid grid-cols-2 gap-3" >
        <label className="mx-5">
            <span>
                Exchange Currency:
            </span>
            <select className="rounded-lg"> 
            <option value="">CAD</option>
                <option value="">USD</option>
            </select>
        </label>
        <label className="mx-5">
            <span>
                Exchange Amount:
            </span>
            <input type="number" className="rounded-lg"/>
        </label>
        </div>
        <label className="w-1/2 mx-auto ">
            <span>
                When?
            </span>
            <input type="data" className="rounded-lg" />
        </label>
        <button className="btn-primary">Check</button>
      </form>
    </div>
  )
}
