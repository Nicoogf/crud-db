import { useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {

  const [ nombre , setNombre ] = useState( "" ) ;
  const [ edad , setEdad ] = useState( 0 ) ;
  const [ pais , setPais ] = useState( "" ) ;
  const [ cargo , setCargo ] = useState( "" ) ;
  const [ experiencia , setExperiencia ] = useState( 0 ) ;

  const add = () =>{
      axios.post("http://localhost:3001/create" , {
        nombre : nombre ,
        edad : edad ,
        pais: pais ,
        cargo : cargo ,
        experiencia : experiencia
      }).then(()=>{
        alert("Usuario Cargado con exito")
      });
  }


  return (
    
      <div className='text-red-500'>

        {/* DATOS*/}
        <div className='flex flex-col items-center gap-2 w-full justify-center'>

          <div className='flex flex-row items-center justify-around'>
            <label> Nombre : </label>
            <input className="w-[300px] border-2 border-black h-[30px] text-lg pl-2 rounded-lg m-2"
                  id="nombre" name = "nombre" type='text'onChange={(event)=>{ setNombre(event.target.value)}}/> 
          </div>

          

          <div className='flex flex-row items-center justify-between'>
            <label> Edad : </label>
            <input className="w-[300px] border-2 border-black h-[30px] text-lg pl-2 rounded-lg m-2"
                  id="edad" name = "edad" type='text'onChange={(event)=>{ setEdad(event.target.value) }}/> 
          </div>
         
          <div className='flex flex-row items-center justify-between'>
            <label> Pais : </label>
            <input className="w-[300px] border-2 border-black h-[30px] text-lg pl-2 rounded-lg m-2"
                  id="pais" name = "pais" type='text' onChange={(event)=>{ setPais(event.target.value) }}/> 
          </div>
         
          <div className='flex flex-row items-center justify-between'>
            <label > Cargo : </label>
            <input className="w-[300px] border-2 border-black h-[30px] text-lg pl-2 rounded-lg m-2"
                  id="cargo" type='text' onChange={(event)=>{ setCargo(event.target.value) }}/> 
          </div>

          <div className='flex flex-row items-center justify-between'>
            <label> Experiencia : </label>
            <input className="w-[300px] border-2 border-black h-[30px] text-lg pl-2 rounded-lg m-2"
                  id="cargo" name = "cargo" type='text'onChange={(event)=>{ setExperiencia(event.target.value) }}/> 
          </div>

          <button className='bg-yellow-500 py-2 px-12 text-white font-bold rounded-md' onClick={ add }> Registrar</button>
         
         
         
        </div>


      </div>
   
  )
}

export default App ;
