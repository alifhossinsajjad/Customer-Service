import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const Tickets = ({customerTicketPromise}) => {
    const ticketsData = use(customerTicketPromise)
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3 p-3'>
            {
               ticketsData.map((ticket) => <TicketCard key={ticket.id} ticket={ticket}/>)
            }
        </div>
    );
};

export default Tickets;