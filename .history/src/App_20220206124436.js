import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import init from './components/init';
import backPicture from './components/yellow.png'


const nr=4
const cards=init(nr)

function App() {
  console.log(cards)
  const [flipped,setFlipped] = useState([]) //kettőnél többet ne mlehessen fordítani
  const [solved,setSolved] = useState([]) //sikeresen megoldottakat tárolja az üres tömb
  const [disabled,setDisabled] = useState(false) //kétszer ugyanarra ne kattinthatssunk (kezdetben kattinthatunk, ezért false az indulási érték)

  const handleClick=(id)=>{
    setDisabled(true)  //kétszer ne legyen kattintható ha
    if(flipped.length===0){  //azaz ha még nincs bent a flipped tömbben
      setFlipped([parseInt(id)]) // beteszem a tömbbe
      setDisabled(false)  //majd újra kattinthatóvá teszem
    } else{
      if(flipped.include(id))  //vizsgálom a flipped tömb tartalmazza e az idt, amin a kattintás történt
        return
        setFlipped([...flipped,id]) //ha nem tartalmazza, beteszi a flippedbe
        if(isMatch(id)){
          setSolved([...solved,flipped[0],id]) //ha tartalmazza, beteszi a solvedba
        } else
          setTimeout(resetCards,1000) // ha nem talál, akkor visszaforgatjuk a kártyát resetCard függvénnyel, lentebb
     }
  }

  //ha találat van, bekerül a flippedbe
  const isMatch=(id)=> {
    const clickedCars=cards.find(obj=>obj.id==id)
    const flippedCard=cards.find(obj=>obj.id==flipped[0])
    return clickedCard
  }

  //ha nincs találat, kiürül a flipped 
  const resetCards=()=>{
      setFlipped([])
      setDisabled(false) 
  }

  return (
    <div className="container bg-info">
      <h1 className="text-center text-white">Memorygame</h1>
      <div className="row p-1 m-1">
        {cards.map((obj)=>
          <div className={`col-${Math.floor(12/nr)} border border-info myCol`} key={obj.id}> 
            <img className="img-fluid" 
              src={flipped.includes(obj.id) || solved.includes(obj.id) ? obj.url : backPicture} //ha az id bent van flipped/solved között, akkor url, ha nem, backPicture
              disabled={disabled || solved.includes(obj.url)}
              onClick={()=>disabled ? null : handleClick(obj.id)}
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
