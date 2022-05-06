import {useEffect, useState} from "react"
const Hello=()=>{
    const [todos, setTodos]=useState([])

const [page,setPage]=useState(1)
const [text,setText]=useState("")


 useEffect(()=>{
   console.log("mounting is done")
   getData()
   

// curried function
   return ()=>{   //this funciton only execute when unmounting happen
    console.log("unmounting is done")
} 
 },[page]);


 async function getData(){
    const data= await fetch(`http://localhost:7500/User?_page=${page}&_limit=5`).then((d)=>d.json())
      setTodos(data)
  }

    return(
        <div className="App">
      <div><input type="text" placeholder='add todo' onChange={(e)=>{setText(e.target.value)}}/> 
      <button onClick={()=>{
        const payload={
          name:text,
            
            };
             fetch("http://localhost:7500/User", {
          method:"POST",
          headers:{
            "content-type": "application/json"
          },
          body:JSON.stringify(payload),
        }).then(async()=>(getData()));
      }}>add todo</button></div>
      {todos.map((Usser)=>(
        <div key={Usser.id}> {Usser.id}. { Usser.name} </div>
      )
        
       
      )}
      <div>
      <button onClick={()=>{ setPage(page-1)}}>pre</button>
      <button onClick={()=>{ setPage(page+1)}}>next</button>
      </div>
     
    </div>
    )
}

export {Hello}