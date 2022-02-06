export default function init(nr){
    const cards=[]
    let url
    let id=0

    for(let i=0; i<nr*nr/2;i++){
        do {
        url=`https://picsum.photos/id/${Math.floor(Math.random()*200)}/300` 
        }while(!checkImage(url))
        cards.push(url)
    }

    //tömb duplázása : 
    //megjegyzések {id:} kell a {} mert objektumra utal; ,[]) inicializálom a tömbbe, - mivel több sor a kód kell return: acc
    const cardsDupla=cards.reduce((acc,url)=>{
        acc.push({id:id++,url:url})
        acc.push({id:id++,url:url})
        return acc
    },[])

    //véletlenszerű keverés
    cardsDupla.sort(()=>Math.random() - 0.5)
    
    return cardsDupla
}

function checkImage(url) {
    let flag=[]
    let image = new Image();
    image.onload = function() {
        if (this.width > 0) 
            flag.push(1)
          
    }
    image.onerror = function() {
        flag.push(0)
        
    }
    //image.src = url;
    if(flag[0]==0)
        return false
    else
        return true
}


//függvény létrehozása function-nel, mivel erőforrás igényes, ezért async
// a függvényre utalok fent a for ciklusban do - whileval, ha nincs jó url, ne tegye be, fusson tovább

/*async function checkImage(url){
    const response=await fetch(url)
    const blob=await response.blob()
    console.log(blob.type)
    return blob.type.startsWith('image/')
}*/