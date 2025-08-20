import './App.css';
import Boton from './componentes/Boton' 
import Contador from './componentes/Contador'
import freeCodeCampLogo from './imagenes/texto.png'
import { useEffect, useState } from 'react'

 function App() {
  const limite = 10; // Define el límite de clics
  const alerta = () => {
    alert("¡Has alcanzado el límite de clics!");
  }
  

  const [numClics, setNumClics] = useState(() => {
    // Recupera el valor guardado en localStorage o inicializa a 0
    const valorGuardado = localStorage.getItem('numClics');
    return valorGuardado != null ? parseInt(valorGuardado, 10) : 0;})
  

  useEffect(() => {
    localStorage.setItem('numClics', numClics);
  }, [numClics]);

  const manejarClic = () => {
    if (numClics < limite){
      setNumClics(numClics + 1);
    } else {
      alerta();
    }
  }

  const decrementarClic = () => {
    if(numClics <= 0) {
      alert("No se puede decrementar más, el contador ya está en 0.");
      return; // Evita que se decremente si ya está en 0
    }
    setNumClics(numClics - 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img 
          className='texto'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp'/>
        </div>

      
      <div className='contenedor'>
        <Contador numClics= {numClics}/>

        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          disabled={numClics >= limite}
          alerta={numClics >= limite ? alerta() : null}
          manejarClic={manejarClic}/>

        <Boton 
        texto='Decrementar'
        esBotonDeClic={false}
        manejarClic={decrementarClic}
        claseExtra='boton-decrementar'
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
