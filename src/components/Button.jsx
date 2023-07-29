import React from 'react'

const Button = ({ btnType, title, handleClick, styles }) => {
  return (
    <div>
      <button
        type={btnType}
        onClick={handleClick}
        className={`font-epilogue   py-2 px-4  ${styles}`}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
