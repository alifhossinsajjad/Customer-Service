
import vactor2 from '../../assets/date.png'

const TicketCard = ({ ticket, handleAddToTask}) => {
    

    return (
        <div className='lg:w-full' >
            <div className='bg-[#ffffff] p-5' onClick={() => {handleAddToTask(ticket)}}>
                <div className='flex justify-between mb-2'>
                    <span className='text-md font-medium' >{ticket.title}</span>
                    <span className={`flex items-center  rounded-xl mr-2 py-1 px-3 shadow ${ticket.status == "Open" ? 'text-[#0B5E06] font-semibold bg-[#B9F8CF] ' : 'text-[#FEBB0C] bg-yellow-100'}`}>{ticket.status}</span>
                </div>
                <span className='text-gray-500 '>
                    {ticket.description}
                </span>


                <div className='flex justify-between items-center mt-3'>
                    <div className='flex gap-3'>
                        <span className='text-gray-500 fontb'>{ticket.id}</span>
                        <span className={`font-semibold   ${ticket.priority == "High Priority" ? 'text-[#F83044]' : ticket.priority == "Low Priority" ? 'text-[#0B5E06]' : "text-[#FEBB0C]"}`}>{ticket.priority}</span>
                    </div>
                    <div className='flex items-center gap-1.5'>
                        <span className='text-gray-500'>{ticket.customer}</span>
                        <img src={vactor2} alt="" />
                        <span className='text-gray-500'>{ticket.createdAt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;