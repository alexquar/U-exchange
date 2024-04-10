"use client"
import { useState } from "react"

export default function TransactionForm() {
    const [from, setFrom]=useState('')
    const [to, setTo]=useState('')
  return (
    <div>
      <form className="flex flex-col my-5 w-full">
        <div className="grid grid-cols-2 gap-3">
        <label>
            <span>
                Starting Currency:
            </span>
            <input type="text" />
        </label>
        <label >
            <span>
                Starting Amount:
            </span>
            <input type="number" />
        </label>
        </div>
        <div className="grid grid-cols-2 gap-3" >
        <label>
            <span>
                Exchange Currency:
            </span>
            <input type="text" />
        </label>
        <label>
            <span>
                Exchange Amount:
            </span>
            <input type="number" />
        </label>
        </div>
        <label className="w-1/2 mx-auto">
            <span>
                When?
            </span>
            <input type="data" />
        </label>
        <button className="btn-primary">Check</button>
      </form>
    </div>
  )
}
