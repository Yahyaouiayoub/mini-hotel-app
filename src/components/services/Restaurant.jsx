import { ArrowLeftIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Restaurant() {
  const navigate = useNavigate()

  const onBack = () => {
    navigate(-1) // Revenir à la page précédente
  }

  const children = useSelector((state) => state.data.children)
  const service = useSelector((state) => state.data.categories.find((s) => s.id === 1)) // Service avec l'ID 1

  const images = import.meta.glob('../../images/*.{jpg,png,jpeg,svg}', { eager: true })

  const [data, setData] = useState([])

  useEffect(() => {
    if (!children) return
    const filteredData = children.filter((child) => child.parentId === 1)
    setData(filteredData)
  }, [children])

  const getImage = (filename) => {
    if (!filename) return null
    const match = Object.entries(images).find(([path]) => path.includes(filename))
    return match ? match[1].default : null
  }

  return (
    <div className="animate-fadeIn">
      <button onClick={onBack} className="font-bold flex items-center text-gray-600 mb-4">
        <ArrowLeftIcon className="w-5 h-5 mr-1" />
        Retour aux services
      </button>

      <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
      <p className="text-gray-700 mb-4">{service.description}</p>

      <div className="grid grid-cols-2 gap-4">
        {data.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(`/service/restaurant/${service.id}`)}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer"
          >
            <div className="rounded overflow-hidden mx-auto mb-3 border border-gray-200 shadow-sm w-full h-32">
              <img
                src={getImage(service.image)}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium text-gray-800 text-center">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
