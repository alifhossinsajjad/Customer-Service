
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import TicketCard from './Components/TicketCard/TicketCard'

const customerTicketPromise = fetch('/Utilitis/customer.json').then(res => res.json())


function App() {


  return (
    <div className='bg-[#f5f5f5] p-5'>
      
     <Banner/>


     <Suspense fallback={<p><span className="loading loading-spinner loading-xl"></span></p>}>
     <div>
      <div>
        Customer Tickets
      </div>
      <div>
        {
          
        }
      </div>
     </div>
      <TicketCard   customerTicketPromise={customerTicketPromise} />
     </Suspense>
      
    </div>
  )
}

export default App
