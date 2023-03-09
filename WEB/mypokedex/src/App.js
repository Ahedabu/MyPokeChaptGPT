import {FiSearch} from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Pokedex</h1>

      <div className="containerInput">
        <input
          type="test"
          placeholder="Escolha seu pokemon"
        />

        <button className="buttonSearch">
          < FiSearch size={25} color="#FFF"/>
        </button>
      </div> 

        <main className='main'>
          <h2>
            NOME: PIKACHU
          </h2>
          <span>
            IMAGEM: FOTINHO LINDA DO PIKACHU
          </span>
          <span> 
            MAIS INFORMAÇÕES SOBRE O PIKACHU
            </span>
        </main>
    </div>
  );
}

export default App;
