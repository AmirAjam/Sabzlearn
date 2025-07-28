import React from 'react'

const AddNewUserInput = ({ placeHolder, name, ...rest }) => {
    return (
        <div className='mt-10 first:mt-8'>
            <label htmlFor="name" className='block'>{placeHolder}</label>
            <input name={name} id={name} type="text" placeholder={placeHolder} {...rest}
                className='w-full mt-3 border border-gray-500 py-2 px-3 rounded-lg' />
        </div>
    )
}

export default AddNewUserInput