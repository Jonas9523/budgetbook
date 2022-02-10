

const Einkauf = ({artikel}) => {
   
    return(
       
        <div className="Einkauf">
           <h6>{artikel.text}</h6>
           <h6>{Number((artikel.preis)).toFixed(2)} €</h6>
          
        </div>
      
    )
}

export default Einkauf;