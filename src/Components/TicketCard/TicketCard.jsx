import React, { use } from 'react';
import vactor2 from '../../assets/date.png'

const TicketCard = ({customerTicketPromise}) => {
  const customerTicket = use(customerTicketPromise);
  console.log(customerTicket);

    return (
        <div className='bg-[#ffffff] p-3'>
            <div>
                <span>Login Issues - Can't Access Account</span>
                <span>open</span>
            </div>
            <div>
                Customer is unable to log in to their account. They've tried resetting their password multiple times but still...
            </div>
            <div>
                <div>
                    <span>#1001</span>
                    <span>HIGH PRIORITY</span>
                </div>
                <div >
                    <span>John Smith</span>
                    <span><img  src={vactor2} alt="" /> 1/15/2024</span>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;