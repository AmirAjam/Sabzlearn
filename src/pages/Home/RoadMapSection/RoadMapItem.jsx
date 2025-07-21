import React from 'react'
import { Link } from 'react-router-dom'

const RoadMapItem = ({ icon, name, firstColor, secondColor, count }) => {
  return (
    <Link
      className="py-5 overflow-hidden rounded-xl flex flex-col justify-center items-center mt-5"
      style={{
        backgroundImage: `linear-gradient(to right, ${firstColor}, ${secondColor})`,
      }}
    >
      {icon}
      <p className='font-Vazirmatn-Bold my-2 lg:text-lg'>{name}</p>
      <p className='font-Vazirmatn-Bold'>{count} دوره</p>
    </Link>
  )
}



export default RoadMapItem