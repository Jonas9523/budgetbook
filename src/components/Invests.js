import EinkaufAlt from "./EinkaufAlt"

const Invests = ({invests, onDelete}) => {
   var datum = new Date();
   var monat = datum.getMonth();
   const monate = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September',    
   'Oktober','November','Dezember']
  
   const invest = invests.filter((inv) => ( new Date (inv.datum)).getMonth() === 1)
   const money = invest.map((inv) => Number (inv.invests))
   
   var sum = money.reduce((inv,item) => Number((inv +=item)),0).toFixed(2);

    return(
        <div>
          <h4>{monate[monat]}:</h4>
          <>{invests.map((inv) => (new Date (inv.datum)).getMonth() === 1 ? <EinkaufAlt key={inv.id} invests = {inv} onDelete={onDelete} /> : '')}
          <h4>Gesamtsumme Monat: {sum} €</h4>
          {monat === 2 ? <h4>März:</h4> : ''}
          <>{invests.map((inv) => (new Date (inv.datum)).getMonth() === 2 ? <EinkaufAlt key={inv.id} invests = {inv} onDelete={onDelete} /> : '' )}</>
        </>
        </div>
    )
}

export default Invests;