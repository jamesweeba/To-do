import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { useState, useEffect } from "react";


import "./App.css"
import AddItem from './components/AddItem';
import Search from './components/Search';

function App() {
   const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist") )||[])
  const API_URL = "http://localhost:3500/items"
  // const [items, setItems] = useState([])
  let [search, setSearchItem] = useState("")
 
  useEffect(() => {
    // let fetchItems = async () => {
    //   try {
    //     let response = await fetch(API_URL);
    //     if (!response.ok) throw Error("could not fetch response");
    //     let items = await response.json();
    //     setItems(items);
    //     setError(null)
    //   }
    //   catch (err) {
    //     console.log(err.message)
    //     setError(err.message)
    //   } finally {
    //     setLoading(false)
    //   }
    // }
    // setTimeout(() => {
    //   fetchItems()
    // },1000)
localStorage.setItem("shoppinglist",JSON.stringify(items))



  }, [items])
  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem items={items} setItems={setItems}/>
      <Search search={search} setSearchItem={setSearchItem} />
      <Content items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
        setItems={setItems} />
      <Footer size={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase())).length} />
    </div>
  );
}


export default App;
