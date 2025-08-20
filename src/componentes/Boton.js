import React from 'react';
import '../hojas-de-estilo/Boton.css'


function Boton({texto, esBotonDeClic, manejarClic, disabled,  }){
    return (
        <button
            className={texto === 'Reiniciar' ? 'boton-reiniciar' : (texto === 'Clic' ? 'boton-decrementar' : 'boton-clic')}
        onClick= { manejarClic }
        disabled={disabled}
        
        >
        {texto } 
        </button>
    )
}   

export default Boton; 