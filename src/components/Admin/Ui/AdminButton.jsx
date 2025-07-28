import React from 'react'

const AdminButton = ({ danger, text,onClick }) => {
    return (
        <button onClick={onClick}
            className={`cursor-pointer py-2 px-4 rounded-sm  duration-200 
                ${danger ? "hover:bg-red-800/80 bg-red-800" : "hover:bg-sky-600/80 bg-sky-600" }`}>
            <span className='text-white'>{text}</span>
        </button>
    )
}

export default AdminButton