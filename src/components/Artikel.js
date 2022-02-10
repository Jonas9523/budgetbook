import { useState } from "react";

const Artikel = ({onAdd,onAdda}) => {
    const [text,setText] = useState('');
    const [preis,setPreis] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
      
        if (!text){
            alert('Bitte einen Artikel hinzufügen')
            return
        }
        

        onAdda({text, preis})
        
        setText('')
        setPreis('')
    }

    return(
        <form className="Artikel" onSubmit={onSubmit}>
      
          <label>Artikel</label>
          <input type = "text"
          placeholder="Neuen Artikel hinzufügen"
          value = {text}
          onChange={(e) => setText(e.target.value)}>
          </input>
          <label>Preis</label>
          <input type = "number"
          placeholder="Preis"
          min = '0'
          step= ".01"
          value = {preis}
          onChange = {(e) => setPreis(e.target.value)}>
          </input>
          <input type = 'submit' value = 'Artikel hinzufügen' className ='btn-submit'  />
          </form>
      )
}

export default Artikel;