
const Header = ({onShow, showEinkauf}) => {
    return(
  <div> 
  <h2>Haushaltsbuch</h2>
  <button
  className= {`${showEinkauf ? 'pressed'  : ''}`}
  color = {showEinkauf ? 'green' : 'black'}
  onClick={onShow}>Einkauf hinzufügen</button>
  </div>   
  
    )
}

export default Header;