import React from 'react';

const TaskStatus = ({ handleCompleteTask, inProgress, resolve }) => {
    return (
        <div className=' rounded-lg p-3 bg-white shadow-sm space-y-3'>
            <h2 className='text-xl font-bold'>Task Status</h2>

            {
                inProgress.map((ticket) => (
                    <div key={ticket.id} >
                        <div>
                            <span className='text-sm font-medium '>
                                {ticket.title}
                            </span>
                            <button className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600"
                                onClick={() => handleCompleteTask(ticket)}>Complete</button>
                        </div>
                    </div>

                ))
            }

            <div>
                <h2>Resolve Task</h2>
                {
                    resolve.length === 0 ? (
                        <p>No resolve task</p>
                    ) : (
                        <ul >
                            {
                                resolve.map((ticket) => (
                                    <li key={ticket.id}>
                                        {ticket.title}
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>

        </div>
    );
};

export default TaskStatus;