import React, { useEffect, useState } from 'react';

const Sidecart = ({ watchTime }) => {
    const [time, setTime] = useState(watchTime)
    const [breakTime, setBreakTime] = useState(0)
    useEffect(() => {
        const getWatchTimeFromLocalStorage = localStorage.getItem('watchTime');
        setTime(getWatchTimeFromLocalStorage);

        const getBreakTime = localStorage.getItem('breakTime');
        setBreakTime(getBreakTime)

    }, [watchTime])

    const handleBreakTime = (bt) => {
        // console.log(bt)
        localStorage.setItem('breakTime', bt)
        setBreakTime(bt)
    }

    return (
        <div>
            <h3>My Cart:</h3>
            <div>
                <p>Watch Time </p>
                {/* <p>Watch Time {time}</p> extra korlamm just */}
                <input type="text" value={time} disabled />
                <h3 className='mt-5'>Add Break Time</h3>
                <button onClick={() => handleBreakTime(15)} className='w-25 btn-circle m-1 btn btn-danger'>15</button>
                <button className='w-25 btn-circle m-1 btn btn-info'>20</button>
                <button className='w-25 btn-circle m-1 btn btn-warning'>25</button>
                <input className='mt-5' type="text" value={0} disabled />
                <button className='mt-5 btn btn-success w-100'>Completed</button>
            </div>
        </div>
    );
};

export default Sidecart;