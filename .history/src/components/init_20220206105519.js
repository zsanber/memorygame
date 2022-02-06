export default function init(nr){
    const cards=[]
    let url
    let id=0

    for(let i=0; i<nr*nr/2;i++){
        url=`https://picsum.photos/id/${Math.floor(Math.random()*300)}/300` 
        cards.push(url)
    }
    //tömb duplázása : 
    //megjegyzések {id:} kell a {} mert objektumra utal; 
    //,[]) inicializálom a tömbbe, 
    //mivel több sor a kód kell return: acc
    const cardsDupla=cards.reduce((acc,url)=>{
        acc.push({id:id++,url:url})
        acc.push({id:id++,url:url})
        return acc
    },[])

    //véletlenszerű keverés
    cardsDupla.sort(()=>Math.random() - 0.5)
    
    return cardsDupla
}

