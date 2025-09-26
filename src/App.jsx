
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'

import Counter from './Components/Counter/Counter'
import Tickets from './Components/Tickets/Tickets'

import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const customerTicketPromise = fetch('/Utilitis/customer.json').then(res => res.json())


function App() {

  const [tickets,setTickets] = useState(customerTicketPromise);

  // useEffect(() => {
  //   customerTicketPromise.then(data => setTickets(data));
  // })

  const [inProgress, setInprogress] = useState([])
  const [resolve, setResolve] = useState([])

  const handleAddToTask = (ticket) => {
    if(!inProgress.find((tic) => tic.id === ticket.id)){
      setInprogress([...inProgress,ticket])
       toast.success(`In-Progress`)
       return;
      
    }
  }

  const handleCompleteTask = (ticket) => {
    setInprogress(inProgress.filter((tic) => tic.id !== ticket.id));
    toast.success('Task Complete')
    setResolve([...resolve,ticket]);

    setTickets(tickets.filter((tic) => tic.id !== ticket.id));
  }




  return (
    <div className='bg-[#f5f5f5]'>
      <NavBar/>
      
    <Counter>
       <Banner inProgress = {inProgress} resolve={resolve}/>
    </Counter>


     <Counter>

      <div>
        <Suspense fallback={<p className='text-center mb-20'><span className="loading loading-spinner loading-xl"></span></p>}>
      <div>
        {
           <Tickets  customerTicketPromise={customerTicketPromise}  handleAddToTask ={handleAddToTask} handleCompleteTask ={handleCompleteTask} inProgress={inProgress} resolve={resolve} tickets={tickets} setTickets={setTickets}/>
        }
      </div>
      
     </Suspense>
      </div>
      
     </Counter>

     <Footer/>
      
    </div>
  )
}

export default App
