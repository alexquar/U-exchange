import { NextResponse } from 'next/server'
import currencyapi from '@everapi/currencyapi-js'

export async function GET(_, {params}){
  const {from, to, when} = params
  console.log(from, to, when)
  const API_KEY = 'cur_live_ppN6Cr7PxdvfUHGEW06PetxKYfbGfh1slvobt75p'
  const client = new currencyapi(API_KEY)
 const {data} = await client.historical({
    date: when,
    base_currency: from,
    currencies: to
})
console.log(data)
return NextResponse.json({ data })
}