import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                className="border-2 border-gray-600 bg-black text-white p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}

export default Input
