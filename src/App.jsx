
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import TicketCard from './Components/TicketCard/TicketCard'
import Counter from './Components/Counter/Counter'
import Tickets from './Components/Tickets/Tickets'

const customerTicketPromise = fetch('/Utilitis/customer.json').then(res => res.json())


function App() {


  return (
    <div className='bg-[#f5f5f5] p-5'>
      
     <Banner/>


     <Counter>
      <Suspense fallback={<p className='text-center'><span className="loading loading-spinner loading-xl"></span></p>}>
     <div>
      <div className='text-xl font-bold text-gray-500'>
        Customer Tickets
      </div>
      <div>
        {
           <Tickets  customerTicketPromise={customerTicketPromise} />
        }
      </div>
     </div>
     
     </Suspense>
     </Counter>
      
    </div>
  )
}

export default App
