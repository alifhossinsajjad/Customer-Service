import React from 'react';

const TaskStatus = ({ handleCompleteTask, inProgress, resolve }) => {



    return (
      <div>
          <div className='lg:w-88 md:w-lg w-72 '>
            <h2 className='text-xl font-bold '>Task Status</h2>

            {
                inProgress.map((ticket) => (
                    <div key={ticket.id} className='shadow p-5 rounded-xl mb-3 '>
                        <div className='grid '>
                            <span className='text-sm font-medium mb-3'>
                                {ticket.title}
                            </span>
                            <button className="bg-green-500 text-white text-xl p-2  rounded hover:bg-green-600 cursor-pointer"
                                onClick={() => handleCompleteTask(ticket)} >Complete</button>
                                
                        </div>
                    </div>

                ))
            }

            <div className='mt-8 bg-white p-5 rounded-xl'>
                <h2 className='text-xl font-bold'>Resolve Task</h2>
                {
                    resolve.length === 0 ? (
                        <p className='mt-5 text-center'>No resolve task</p>
                    ) : (
                        <ul >
                            {
                                resolve.map((ticket) => (
                                    <li key={ticket.id} className='bg-green-100 p-5 rounded-xl mt-3 font-bold'>
                                        {ticket.title}
                                        <p className='text-green-500'>✅Complete</p>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </div>
      </div>
    );
};

export default TaskStatus;