import { ArrowLeftIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ArticlesList from './ArticlesList'
import { useNavigate, useParams } from 'react-router-dom'

export default function ShoppingChild() {
  const navigate = useNavigate()

  const onBack = () => {
    navigate(-1) // Revenir à la page précédente
  }

  const { id } = useParams()
  const Child = useSelector((state) => state.data.children.find((c) => c.id === parseInt(id)))
  const articles = useSelector((state) => state.data.articles)
  const [data, setData] = useState([])

  useEffect(() => {
    if (!articles) return
    const filteredData = articles.filter((article) => article.parentChildId === parseInt(id))
    setData(filteredData)
  }, [articles, id])

  return (
    <div className="animate-fadeIn">
      <button onClick={onBack} className="font-bold flex items-center text-gray-600 mb-4">
        <ArrowLeftIcon className="w-5 h-5 mr-1" />
        Retour aux sous-services
      </button>

      <h2 className="text-2xl font-semibold mb-4">{Child.name}</h2>
      <p className="text-gray-700 mb-4">{Child.description}</p>

      <ArticlesList articles={data} />
    </div>
  )
}
