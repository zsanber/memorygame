import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import init from './components/init';
import backPicture from './components/yellow.png'

const nr=6
const cards=init(nr)


function App() {
  console.log(cards)
  const [flipped,setFlipped] =useState([])//2-nél többet ne lehessen megfordítani
  const [solved,setSolved] =useState([])//itt tároljuk a megtalált párokat
  const [disabled,setDisabled] =useState(false)// 2szer ugyanarra ne kattinthassunk

  const handleClick=(id)=>{
      setDisabled(true) 
      if(flipped.length===0){ 
        setFlipped([parseInt(id)]) 
        setDisabled(false)
      }else{
        if(flipped.includes(id)) //vizsgálom a flipped tömb tartalmazza e az idt, amin a kattintás történt
            return
        setFlipped([...flipped,id]) //ha nem tartalmazza, beteszi a flippedbe
        if(isMatch(id)){
          setSolved([...solved,flipped[0],id]) //ha tartalmazza, beteszi a solvedba
          resetCards()
        }else
          setTimeout(resetCards,1000) // ha nem talál, akkor visszaforgatjuk a kártyát resetCard függvénnyel, lentebb
      }
    }

  
  //ha találat van, bekerül a flippedbe
  const isMatch=(id)=>{
    const clickedCard=cards.find(obj=>obj.id==id)
    const flippedCard=cards.find(obj=>obj.id==flipped[0])
    return clickedCard.url===flippedCard.url
  }

  //ha nincs találat, kiürül a flipped 
  const resetCards=()=>{
    setFlipped([])
    setDisabled(false)
  }

  return (
    <div className="container bg-info"> 
      <h1 className="text-center text-white">Memory game</h1>
      <div className="row p-1 m-2">
        {cards.map(obj=> 
          <div className={`col-${Math.floor(12/nr)} border border-info myCol `} key={obj.id} >
            <img className="img-fluid" 
              src={flipped.includes(obj.id) || solved.includes(obj.id) ? obj.url : backPicture} 
              disabled={disabled || solved.includes(obj.id)}
              onClick={()=>disabled ? null : handleClick(obj.id)}
              alt="random photo"/>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
