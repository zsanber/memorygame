export default function init(nr){
    const cards=[]
    let url
    
    for(let i=0; i<nr*nr/2;i++){
        url=`https://picsum.photos/id/${Math.floor(random()*200)}/200` 
        cards.push(url)
    }
    //tömb duplázása
    const cardsDupla=cards.reduce((acc,url)=>{
        add.push({id:id++,url})
    },[])
    //,[]) inicializálom a tömbbe
    //{id:} kell a {} mert objektumra utalok


    return cards

}

