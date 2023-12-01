import React from 'react'

function Loading() {
    return (
        <div className='bg-base-100 absolute top-0 left-0 w-screen h-screen flex justify-center items-center'>
            <span className="w-[80px] loading loading-dots loading-lg"></span>
        </div>
    )
}

export default Loading