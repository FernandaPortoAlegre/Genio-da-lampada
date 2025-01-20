import { useState } from 'react'
import lampada from './assets/Lâmpada.png'
import genio from './assets/Gênio.png'
import './style.scss'

export default function App(){  //exportar formato padrao App
  
const [aladdin, setAladdin] = useState(lampada)
  
const genioDaLampada = ()=> {
  setAladdin(genio)
}

  return(
    <main>
    <h1>"Liberte a magia da programação com a lâmpada de Aladdin."</h1>
    <img src={aladdin} alt="imagem da lâmpada mágica do Aladdin" />
    <button onClick={genioDaLampada}>Faça o seu pedido</button>
    </main>
  )
}