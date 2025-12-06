
import './App.css'
import ProductCard from './Components/ProductCard'
import LikeButton from './Components/LikeButton'
import TodoList from './Components/TodoList'

function App() {
  
  const cardData = {
    name: "iPhone 15",
    price: 999,
    image: "https://stickygrippy.com/cdn/shop/files/pink1.png?v=1717646359",
    inStock: true
  }

  const todosData = [
        { id: 1, text: "Learn React", completed: true },
        { id: 2, text: "Build a project", completed: false }
    ]

  return (
    <>
      <ProductCard cardData={cardData}/>
      <LikeButton />
      <TodoList  todosData={todosData}/>

    </>
  )
}

export default App
