import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import init from './components/init';
import backPicture from './components/yellow.png'


const nr=4
const cards=init(nr)

function App() {
  console.log(cards)
  const [flipped,selFlipped] = useState([]) //kettőnél többet ne mlehessen fordítani
  const [solved,setSolved] = useState([ tö]) //sikeresen megoldottakat tárolja az üres tömb
  const [disabled,setDisabled] = useState(false) //kétszer ugyanarra ne kattinthatssunk (kezdetben kattinthatunk, ezért false az indulási érték)

  return (
    <div className="container bg-info">
      <h1 className="text-center text-white">Memorygame</h1>
      <div className="row p-1 m-1">
        {cards.map((obj)=>
          <div className={`col-${Math.floor(12/nr)} border border-info myCol`} key={obj.id}> 
            <img className="img-fluid" 
              src={flipped.includes(obj.id) || solved.includes(obj.id) ? obj.url : backPicture} //ha az id bent van flipped/solved között, akkor url, ha nem, backPicture
              disabled={disabled || solved.includes(obj.url)}
              onClick={()=}
              alt="random photo"/>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;

//myCol - új osztály, hivatkozok rá a cssben
//key={obj.id} - kell kulcs-érték pár
//className="img-fluid"  - ettől responsive a kép
