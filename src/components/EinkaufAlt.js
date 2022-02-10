import { FaTimes } from 'react-icons/fa'

const EinkaufAlt = ({invests, onDelete}) => {
   
    return(
      <div className="einkaufalt">
      <h4>Einkaufsort: {invests.text}
      <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick = {() => onDelete(invests.id)}></FaTimes></h4>
      <>{invests.feld.map((inv, index) => <h6 key = {index}>Artikel: {inv.text} | Preis: {Number(inv.preis).toFixed(2)} €</h6>)}
      <h4 className =  {`${(Number(invests.invests) > 1000.00) ? 'minus' : 'good' }`}>Gesamtpreis: {invests.invests} €</h4>
      <h4>Datum: {invests.datum}</h4>
      </>
      </div>
    )
}

export default EinkaufAlt;