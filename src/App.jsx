
import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'

import Counter from './Components/Counter/Counter'
import Tickets from './Components/Tickets/Tickets'

import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







function App() {

  const [tickets, setTickets] = useState([]);


  const [inProgress, setInprogress] = useState([])
  const [resolve, setResolve] = useState([])

  useEffect(() => {
    fetch('/customer.json').then(res => res.json())
    .then(data => setTickets((data)))
  }, [])

  
  const handleAddToTask = (ticket) => {
    if (!inProgress.find((tic) => tic.id === ticket.id)) {
      setInprogress([...inProgress, ticket])
      toast.success(`In-Progress`)
      return;

    }
  }

  const handleCompleteTask = (ticket) => {
    console.log(ticket);
    setInprogress(inProgress.filter((tic) => tic.id !== ticket.id));
    console.log(tickets);
    toast.success('Task Complete')
    setResolve([...resolve, ticket]);

    setTickets(tickets.filter((tic) => tic.id !== ticket.id));

  }




  return (
    <div className='bg-[#f5f5f5]'>
      <NavBar />

      <Counter>
        <Banner inProgress={inProgress} resolve={resolve} />
      </Counter>


      <Counter>

        <div>
          <Suspense fallback={<p className='text-center mb-20'><span className="loading loading-spinner loading-xl"></span></p>}>
            <div>
              {
                <Tickets

                  handleAddToTask={handleAddToTask}
                  handleCompleteTask={handleCompleteTask}
                  inProgress={inProgress}
                  resolve={resolve}
                  ticketlist={tickets}
                />
              }
            </div>

          </Suspense>
        </div>

      </Counter>

      <Footer />

    </div>
  )
}

export default App
