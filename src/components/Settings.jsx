
import { useStateContext } from '../context'
import React from 'react'
import { FiSettings } from 'react-icons/fi'

const Settings = () => {
    const { setThemeSettings } = useStateContext()

  return (
    <div className="fixed right-4 bottom-4 z-10">
        <button
        type="button"
        onClick={() => setThemeSettings(true)}
        style={{ background: 'black', borderRadius: '50%' }}
        className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
            <FiSettings />
        </button>
    </div>
  )
}

export default Settings
