import React from 'react';

const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`bg-gray-900 text-white text-2xl px-6 py-4 rounded-lg mx-1 my-2 transition-all 
                        hover:bg-gray-700 focus:outline-none active:bg-gray-500 ${props.className || ''}`}
        >
            {props.children}
        </button>
    );
};

export default Button;
