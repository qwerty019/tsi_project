// import  { PureComponent } from 'react'
// import type { ReactNode } from 'react'

// interface Props {}
// interface State {}

// class List extends PureComponent<Props, State> {
//     constructor(props: Props) {
//         super(props)

//         this.state = {
            
//         }
//     }

//     render(): ReactNode {
        
//         return (
//             <div>Haha</div>
//         )
//     }
// }

// export default List






import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface AnimeItem {
    title: string;
    description: string;
    score: number;
  }

export const List = () => {
  //render(): ReactNode {
    const [data, setData] = useState<AnimeItem[]>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/data");
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);
    return (
        <div style={{ backgroundColor: 'lightblue', padding: '30px' }}>
      <h2>Список аниме</h2>
      {data.length === 0 ? (
        <p>Нет данных</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <h3>Название: {item.title}</h3>
              <p>Описание: {item.description}</p>
              <p>Оценка: {item.score}</p>
            </li>
          ))}
        </ul>
      )}
    
    </div>
    );
//  }
}
export default List




// import React, { useEffect, useState } from "react";

// interface AnimeItem {
//   title: string;
//   description: string;
//   score: number;
// }

// export const List = () => {
//   const [data, setData] = useState<AnimeItem[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Функция для загрузки данных
//   const fetchData = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("http://localhost:5000/api/data");
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Не удалось загрузить данные");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Загрузка данных при монтировании компонента
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Опционально: автоматическое обновление каждые 5 секунд
//   useEffect(() => {
//     const intervalId = setInterval(fetchData, 5000);
//     return () => clearInterval(intervalId);
//   }, []);

//   if (isLoading) {
//     return <div style={{ backgroundColor: 'pink', padding: '30px' }}>Загрузка...</div>;
//   }

//   if (error) {
//     return <div style={{ backgroundColor: 'pink', padding: '30px', color: 'red' }}>{error}</div>;
//   }

//   return (
//     <div style={{ backgroundColor: 'pink', padding: '30px' }}>
//       <h2>Список аниме</h2>
//       {data.length === 0 ? (
//         <p>Нет данных</p>
//       ) : (
//         <ul>
//           {data.map((item, index) => (
//             <li key={index} style={{ marginBottom: '20px' }}>
//               <h3>{item.title}</h3>
//               <p>{item.description}</p>
//               <p>Оценка: {item.score}</p>
//             </li>
//           ))}
//         </ul>
//       )}
    
//     </div>
//   );
// };

// export default List;