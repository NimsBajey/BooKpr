import React from 'react'

const Button = (props) => {
    console.log(props.name)

  return (
    <div className='flex w-full'>
      <button type="button" className="mt-4 w-[40%] rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
          {props.name}
        </button>
    </div>
  )
}

export default Button
