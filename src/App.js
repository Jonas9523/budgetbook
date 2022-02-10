import Header from "./components/Header";
import Artikeln from "./components/Artikeln";
import Invests from "./components/Invests";
import { useState, useEffect } from "react";

const App = () => {

  const [artikeln, setArtikeln] = useState([]);
  const [invest, setInvest] = useState([]);
  const [showEinkauf, setshowEinkauf] = useState(false);

useEffect(() => {
  const getEinkauf = async() => {
  const einkaufFromServer = await fetchEinkauf()
    setInvest(einkaufFromServer)
  }
  getEinkauf()
}, [])

const fetchEinkauf = async() => {
  const res = await fetch('http://localhost:3002/invest')
  const data = await res.json()
  return data
}

const addArtikel = async(artikel) => {
  const res = await fetch ('http://localhost:3002/artikel',{
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(artikel)
  }
  )
  const data = await res.json()
  setArtikeln([...artikeln, data])
}

const addEinkauf = async(invests) => {
  console.log(invests)
  const res = await fetch('http://localhost:3002/invest',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(invests)
  })
  const data = await res.json();
  setInvest([...invest, data])
}

const onDelete = async(id) => {
    const res = await fetch(`http://localhost:3002/invest/${id}`,{
    method: 'DELETE'
   })
   console.log(id)
   setInvest(invest.filter((inv) => inv.id !== id))
}


  return (
    <div className='container'>
       <Header
       onShow ={() => setshowEinkauf(!showEinkauf)}
       showEinkauf={showEinkauf} />
       {showEinkauf && <Artikeln 
       artikeln = {artikeln}
       onAdda= {addArtikel}
       onAdd = {addEinkauf}/> }
       <h3>Historie Einkäufe:</h3>
       <Invests 
       invests = {invest}
       onDelete={onDelete} />
    </div>
  )
}

export default App;
