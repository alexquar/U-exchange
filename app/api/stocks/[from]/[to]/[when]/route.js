import { NextResponse } from 'next/server'

export async function DELETE(_, {params}){
  const {from, to, when} = params
  

  return NextResponse.json({ data, error})
}