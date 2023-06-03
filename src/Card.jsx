function Card(values) {
    return(
        <div>
            
            <p>hola {values.name}</p>
            <div style={{ backgroundColor: `#${values.color}` }}>#{values.color}</div> 
        </div>
    )
    
}
/* Hola profe, no logre pasar los datos de la app a la card y no lo logre, dejo comentado todas las meneras en las 
que intente, en estados y despues metiendolas en un objeto, le dejo un log para mostrar que las validaciones las pasa*/
export default Card