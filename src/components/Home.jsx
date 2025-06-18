import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const data = useSelector((state) => state.data);
  const navigate = useNavigate();

  if (!data || !data.categories) {
    return <div className="text-gray-500">Chargement...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Bienvenue</h2>
      <p className="text-gray-600 mb-6">Comment pouvons-nous vous aider aujourd'hui ?</p>

      <div className="grid grid-cols-2 gap-4">
        {data.categories.map((categorie) => (
          <div
            key={categorie.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer"
            onClick={() => navigate(categorie.Route)}
          >
            <div className={`${categorie.color} w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
              {categorie.icon}
            </div>
            <h3 className="font-medium text-gray-800">{categorie.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{categorie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
