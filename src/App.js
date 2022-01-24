import React,{useEffect,useState} from 'react'
import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Hero from './Pages/Hero';
import './styles/style.css'
import { Transition } from 'react-transition-group';
import Detailspanel from './Components/Detailspanel';

function App() {
  
const [books, setbooks] = useState([])
const [selectedBook,setSelectedBook] = useState(null);
const [showpanel, setshowpanel] = useState(false);
const [filterdBooks, setfilterdBooks] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      const books = await response.json()
      console.log(books);
      setbooks(books)
      setfilterdBooks(books)
    }

    fetchData()
  }, [])
   
  

    const pickBook = (book) => {
      setSelectedBook(book)
      setshowpanel(true)
    }
   
     const closepanel = () => {
      setSelectedBook('')
      setshowpanel(false)
     }
    
    const stringSearch = (bookAtrribute,searchTerm) => {

    return bookAtrribute.toLowerCase().includes(searchTerm.toLowerCase())
    }

    const filter =  (searchTerm) => {
      
      if (!searchTerm) {
        setfilterdBooks(books)
      } else {
        console.log(2);
        setfilterdBooks(
          books.filter(
            (book) => stringSearch(book.title ,searchTerm) || stringSearch(book.author ,searchTerm)
          )
        )
      }
    }

  return (

    <div className = 'bini'>
    <Navbar/> 
    <Searchbar filter = {filter} /> 
    <Hero 
    books = {filterdBooks}  
    pickBook = {pickBook}
    />
    {showpanel &&  
     <Transition    timeout = {1000} >
   {(state) => <Detailspanel book = {selectedBook}  closepanel = {closepanel}  state = {state} />  }
     </Transition>
    }
    </div>

  )
}
export default App;



