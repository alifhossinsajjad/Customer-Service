import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import TaskStatus from '../TaskStatus/TaskStatus'


const Tickets = ({ customerTicketPromise , handleAddToTask,handleCompleteTask,inProgress,resolve}) => {

    const ticketsData = use(customerTicketPromise)
    return (

        <div className='grid grid-cols-1 xl:grid-cols-12 md:grid-cols-2 gap-4 p-6 flex-1'>
            <div  className='md:col-span-2 lg:col-span-9 col-span-1  space-y-4' >
                <h2>Customer Tickets</h2>
                <div className='grid md:grid-cols-2 gap-4'>
                    {
                        ticketsData.map((ticket) => <TicketCard key={ticket.id} ticket={ticket}  handleAddToTask= {handleAddToTask} />)
                    }
                </div>
            </div>

            <div className='grid col-span-3'>
                <TaskStatus handleCompleteTask={handleCompleteTask} inProgress={inProgress} resolve={resolve}/>
            </div>


        </div>


    );
};

export default Tickets;