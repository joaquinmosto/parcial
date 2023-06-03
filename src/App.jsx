import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    //const [submiteValues, setSubmiteValues] = useState()
    const [error, setError] = useState('')

    let values = {
      name: '',
      color: '',
    }

    function handleSudmit(e) {
      e.preventDefault()
      
      if (name.length < 3) {
         setError('')
         
          
          console.error("fijate");
          setError('algo esta mal en el nombre')
          setName('')
          setColor('')
          
      }else{
          setError()
          console.log(name);
          //console.log(values);
          values.name = name;
          /*setSubmiteValues({
              name,
          })
          */
          setName('')
      }
      if (color.length > 6) {
        console.log(color);
        console.error("fijate");
        setError('algo esta mal color')

        
    }else{
        setError()
        values.color = color;
        /*setSubmiteValues({
           
            color,
        })
        */
      
        setColor('')
    }
      
  }

function handleChangeName(e) {
  
  setName(e.target.value)
  
}
function handleChangeColor(e) {
  
  setColor(e.target.value)
  
}

  return (
    <div className="App">
    <h1>Elige un color</h1>
    <div>
            Formulario
            <form onSubmit={handleSudmit} >
                <input id="nombre" placeholder= "nombre" value={name} onChange={handleChangeName} required/>
                <input id="color"  placeholder= "color" value={color} onChange={handleChangeColor} required/>
                
                <button type="sudmit">mandar</button>  
            </form>
            
            
            
            
            
            {error === ''? 
               
               !values.name == ""?
                    <Card name={values.name} color={values.color}/>
                    
                   :'ingrese sus datos'
                   
                

            : <p>{error}</p>}

        </div>
  </div>
  )
}

export default App
