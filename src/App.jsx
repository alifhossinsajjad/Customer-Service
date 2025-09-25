
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'

import Counter from './Components/Counter/Counter'
import Tickets from './Components/Tickets/Tickets'


const customerTicketPromise = fetch('/Utilitis/customer.json').then(res => res.json())


function App() {


  return (
    <div className='bg-[#f5f5f5] p-5'>
      
    <Counter>
       <Banner/>
    </Counter>


     <Counter>

      <div>
        <Suspense fallback={<p className='text-center'><span className="loading loading-spinner loading-xl"></span></p>}>
      <div>
        {
           <Tickets  customerTicketPromise={customerTicketPromise} />
        }
      </div>
      
     </Suspense>
      </div>
      
     </Counter>
      
    </div>
  )
}

export default App
