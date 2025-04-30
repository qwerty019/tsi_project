import React, { PureComponent, ReactNode, useState } from 'react'
import {Container} from '../components/Container'

interface Props {}
interface State {}

class Anime extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        
            return <Counter/>;
        
    }
}

export default Anime

interface Animee {
    title: string;
    description: string;
    price: string;
  }

const AnimeeList = ({animes}) => {
    return (
        <div>
          <h2>Список аниме: </h2>
          <ul>
            {animes.map((anime, index) => (
              <li key={index}>
                <h3>{anime.title}</h3>
                <p>{anime.description}</p>
                <p>Оценка: {anime.price} .</p>
              </li>
            ))}
          </ul>
        </div>
      );
}

const Counter = () => {
    // const [count, setCount] = useState<number>(0);
    //const [name, setName] = useState("");
    // const [isVisible, setIsVisible] = useState(true);
    //const [items, setItems] = useState([""]);
    //const [newElement, setNewElement] = useState("");
    // const [user, setUser] = useState({name:"Иван", age:30});
    const [animes, setGoods] = useState<Animee[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAnime, setNewGood] = useState<Animee>({title: '', description: '', price: ''});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewGood({ ...newAnime, [name]: value });
    };

    const handleAddGood = () => {
        if (newAnime.title && newAnime.description && newAnime.price) {
            setGoods([...animes, newAnime]);
            setNewGood({ title: '', description: '', price: '' });
            setIsModalOpen(false);
          } else {
            alert("Пожалуйста, заполните все поля");
          }
    };

    return (
        <Container>
            <div className="flex felx-col gap-4 items-center justify-center"/>
                <div>
                <button onClick={() => setIsModalOpen(true)}>Добавить товар</button>
                
                {isModalOpen && (
                    <div className="modal">
                    <h2>Добавить новый товар</h2>
                    <input
                        type="text"
                        name="title"
                        placeholder="Название"
                        value={newAnime.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Описание"
                        value={newAnime.description}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Оценка"
                        value={newAnime.price}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddGood}>Добавить</button>
                    <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
                    </div>
                )}

                <AnimeeList animes={animes} />
            </div>
        </Container>
    )
}