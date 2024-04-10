import { NextResponse } from 'next/server'
import currencyapi from '@everapi/currencyapi-js'
import { useState } from 'react'

export async function DELETE(_, {params}){
  const {from, to, when} = params
  const [error,setError] = useState(null)
  const API_KEY =cur_live_ppN6Cr7PxdvfUHGEW06PetxKYfbGfh1slvobt75p
  const client = new currencyapi(API_KEY)
const {data} = await client.historical({
    date: date,
    base_currency: from,
    currencies: to
})

if(!data){
    setError('Could not fetch')
}


  return NextResponse.json({ data, error})
}