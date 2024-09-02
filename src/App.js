import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useState,useEffect} from 'react'

function App() {
  const API_KEY='533bced685724a919bf619416f3aa809';
  const [data,setData]=useState('India');
  const [searchQuery, setSearchQuery] = useState("");
  const [search,setSearch]=useState([]);
  useEffect(() => {
    const FetchNews = async () => {
      if(searchQuery){
      const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}`);
      const jsondata = await response.json();
      console.log(jsondata.articles);
      setSearch(jsondata.articles);}
    };
    FetchNews();
  }, [searchQuery,search]);
  return (
    <div className="App">
      <Navbar data={data} setData={setData} setSearchQuery={setSearchQuery}/>
      <Hero search={search}/>
    </div>
  );
}

export default App;
