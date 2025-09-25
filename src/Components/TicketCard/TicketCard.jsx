
import vactor2 from '../../assets/date.png'

const TicketCard = ({ticket}) => {
  console.log(ticket);

    return (
        <div className='bg-[#ffffff] p-3 md:w-md w-72'>
            <div>
                <span className='text-md font-medium' >Login Issues - Can't Access Account</span>
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