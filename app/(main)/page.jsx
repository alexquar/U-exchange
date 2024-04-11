"use client"
import TransactionForm from "../components/TransactionForm";

export default function Home() {
  return (
    <main >
      <h1 className='text-center pt-5 mt-5 text-2xl'>Currency Conversion</h1>
      <p className="pt-5 text-basic"> Here a some guidlines and instruction. Enter the currency you have and the currency to watch to exchange to. Select a date you want to check (for current data select yeserday's date) then hit check. Then change the starting amount to see how much you would get in this new currency! Please do not choose a date of today or the future and before the year 2000. </p>
      <TransactionForm />
    </main>
  );
}
