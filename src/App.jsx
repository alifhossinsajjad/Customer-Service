
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'

import Counter from './Components/Counter/Counter'
import Tickets from './Components/Tickets/Tickets'
import { toast } from 'react-toastify'


const customerTicketPromise = fetch('/Utilitis/customer.json').then(res => res.json())


function App() {

  const [tickets,setTickets] = useState(customerTicketPromise);

  const [inProgress, setInprogress] = useState([])
  const [resolve, setResolve] = useState([])

  const handleAddToTask = (ticket) => {
    if(!inProgress.find((tic) => tic.id === ticket.id)){
      setInprogress([...inProgress,ticket])
      toast.info(`Task "${ticket.title}" added to In-Progress`)
    }
  }

  const handleCompleteTask = (ticket) => {
    setInprogress(inProgress.filter((tic) => tic.id !== ticket.id));
    setResolve([...resolve,ticket]);
    setTickets(tickets.filter((tic) => tic.id !== ticket.id));
    toast.success(`Task "${ticket.title}" marked as resolve`)
  }


  return (
    <div className='bg-[#f5f5f5] p-5'>
      
    <Counter>
       <Banner inProgress = {inProgress} resolve={resolve}/>
    </Counter>


     <Counter>

      <div>
        <Suspense fallback={<p className='text-center'><span className="loading loading-spinner loading-xl"></span></p>}>
      <div>
        {
           <Tickets  customerTicketPromise={customerTicketPromise}  handleAddToTask ={handleAddToTask} handleCompleteTask ={handleCompleteTask} inProgress={inProgress} resolve={resolve}/>
        }
      </div>
      
     </Suspense>
      </div>
      
     </Counter>
      
    </div>
  )
}

export default App
