import { useEffect, useState } from "react"

export const Timer = () => {
    const [initial,setInitial] =useState(0)
    //console.log(initial)
    const [effect,setEffect] = useState(false)
    //console.log(counter)
    const [final,setFinal] = useState(0);
    //console.log(final)
    
    useEffect(()=>{
        if(effect){
       const id= setInterval(()=>{
            setInitial((p)=>{
                //console.log(initial)
                if(Number(final) === p){
                    
                    clearInterval(id);
                  return ;

                }
                return Number(p)+1;

                
    


            });
        },1000);
        return () => {
            clearInterval(id);
            
        }
    }
    },[effect,final]);
    return <div>
    <h1>initial time:{initial}</h1>
    <h1>final time:{final}</h1>
    <input type="number" onChange={(e) => setInitial(e.target.value)} placeholder="initaial value"></input>
    <input type="number" onChange={(e) => setFinal(e.target.value)} placeholder="final value"></input>
    <button onClick={()=> setEffect(!effect)}>{effect? "stop timer": "start timer"}</button>
    
    
    </div>
}