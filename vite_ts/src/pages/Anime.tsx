import React, { useState } from 'react';
import { Container } from '../components/Container';
import axios from 'axios';

interface AnimeItem {
  title: string;
  description: string;
  score: string;
}

const AnimeList: React.FC<{ animes: AnimeItem[] }> = ({ animes }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Список аниме:</h2>
      <ul className="space-y-4">
        {animes.map((anime, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg">{anime.title}</h3>
            <p className="text-gray-600">{anime.description}</p>
            <p className="text-blue-500">Оценка: {anime.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AnimePage: React.FC = () => {
  const [animes, setAnimes] = useState<AnimeItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAnime, setNewAnime] = useState<AnimeItem>({ title: '', description: '', score: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAnime({ ...newAnime, [name]: value });
  };

  const handleAddAnime = async () => {
    if (!newAnime.title || !newAnime.description || !newAnime.score) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Отправляем POST-запрос на сервер
      const response = await axios.post('http://localhost:5000/api/data', {
        title: newAnime.title,
        description: newAnime.description,
        score: newAnime.score
      });

      // Если сервер вернул успешный ответ, обновляем состояние
      setAnimes([...animes, newAnime]);
      setNewAnime({ title: '', description: '', score: '' });
      setIsModalOpen(false);
      
      console.log('Данные успешно отправлены:', response.data);
    } catch (err) {
      console.error('Ошибка при отправке данных:', err);
      setError('Не удалось добавить аниме. Попробуйте снова.');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded"
        >
          Добавить аниме
        </button>
        
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Добавить новое аниме</h2>
              <input
                type="text"
                name="title"
                placeholder="Название"
                value={newAnime.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="description"
                placeholder="Описание"
                value={newAnime.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="number"
                name="score"
                placeholder="Оценка"
                value={newAnime.score}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
              <div className="flex gap-2">
                <button 
                  onClick={handleAddAnime}
                  className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded flex-1"
                >
                  Добавить
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-black px-4 py-2 rounded flex-1"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}

        <AnimeList animes={animes} />
      </div>
    </Container>
  );
};

export default AnimePage;