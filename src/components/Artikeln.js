
import Einkauf from "./Einkauf";
import { useState } from "react";
import Artikel from "./Artikel";

const Artikeln = ({artikeln, onAdd, onAdda}) => {
    var  [invests, setInvests] = useState(0)
    const [text,setText] = useState('')
    const [datum,setDatum] = useState('')
    const [artikelfeld, setArtikelfeld] = useState([])
    var feld = []

    const onsubmit = (e) => {
       if ( !text){
           alert('Bitte Ort eingeben')
       }
        setArtikelfeld(artikeln.map((artikel) => artikel))
        feld = artikeln.map((artikel) => artikel)
        console.log(feld)
        onAdd({invests, text, datum,feld })
        setInvests(0)
        setText('')
    }

    const amounts = artikeln.map(artikel => Number(artikel.preis))
  
    invests = amounts.reduce((acc,item) => Number((acc+=item)),0).toFixed(2);
    return(
        <div className="Kauf">
        <input type ='text' placeholder="Ort des Einkaufs"
        onChange={(e)=> setText(e.target.value)} />
        <input type ='date' placeholder='Datum des Einkaufs'
        onChange={(e) => setDatum(e.target.value) } />
        <Artikel onAdda ={onAdda}></Artikel>
        {artikeln.map((artikel) => <Einkauf key = {artikel.id} artikel = {artikel}></Einkauf>)}
        <h2>Gesammtsumme Einkauf:  {invests} €</h2>
        <form className="Invest" onSubmit={onsubmit}>
           <input type= 'submit' value ='Einkauf bestätigen' className='btn-submit' />
        </form>
        </ div>
       
    )
}

export default Artikeln;