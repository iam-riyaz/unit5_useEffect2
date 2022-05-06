import { useEffect, useState } from "react"

const Counter=()=>{
    const [count,setCount]=useState(9)


    useEffect(()=>{
        const lukka=setInterval(()=>{
            setCount((preValue)=>{
                console.log(preValue+"printing the value")
                if(preValue<=0)
                {
                    clearInterval(lukka)
                    return 0
                }
            return preValue - 1
            })
        },1000)
    },[])
   
    return(
        <div>
            <h3>Count:{count}</h3>
        </div>
    )
}

export {Counter}