
import React,{useState,useEffect} from 'react';
import './form.css'
function Form() {
    
    //valores que vem do servidor
    const [data, setData] =useState(null);

  useEffect(() => {
    fetch("/api")
        .then((res)=> res.json())
      .then((data) => setData(data));
  }, []);

    //useState para armazenar todos os valores
    const[Form,setForm] = useState({"title":"",
    "msg":""
    })
    //quando event click renderizar na tela
    const[list,setList] = useState([])
  
    function handlechange(e){
     if(e.target.getAttribute("name")==="FormTitle"){
         setForm({"title":e.target.value})
     }
     else  if(e.target.getAttribute("name")==="FormMsg"){
        setForm({"title":Form.title, "msg":e.target.value})
    }
    }

    function handleAdd(){ 
        setList([...list,Form])
    }

    return (
        <div>
            <section className='formulario'>
                <h1>Caderno de notas</h1>
            <form>
              <input type="text" name="FormTitle"
               value={setForm.title} 
               onChange={(e)=>handlechange(e)}
               placeholder='Titulo da anotação'
               />
              <br/>
             
              <input type="text" name="FormMsg" 
              value={setForm.msg}  className='msg'
               onChange={(e)=>handlechange(e)}
               placeholder='Anotações'
               />   
            </form> 
            <button onClick={handleAdd}>adicionar</button>
            </section>
           
           <section className='notas'>
               {list.map((item,key)=>(
                <section key={key} className='anotação'>
                <h1>{item.title}</h1>
                <p>{item.msg}</p>
                
               </section> 
            ))}

            <section className='anotação'>
                <h1><p>{!data ? "Loading..." : data[1].title}</p></h1>
                <p><p>{!data ? "Loading..." : data[1].msg}</p></p>
            </section>

            <section className='anotação'>
                <h1><p>{!data ? "Loading..." : data[0].title}</p></h1>
                <p><p>{!data ? "Loading..." : data[0].msg}</p></p>
            </section>
            
            
            
           </section>
            
        </div>
    );
}

export default Form;