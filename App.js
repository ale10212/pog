import flamengo from './flamengo.jpg';
import './App.css';
import { Component } from 'react';
//import { toHaveAccessibleErrorMessage } from '@testing-library/jest-dom/matchers';

class App extends Component{


  state= {
  post :[{
    id: 1,
    titulo: 'titulo 1',
    conteudo: 'conteudo 1',
    name: 'Ricardo Augusto Nascimento',
    cont: 1,
    pog: 0
  },
  {
    id: 2,
    titulo: 'titulo 2',
    conteudo: 'conteudo 2'
  },
  {
    id: 3,
    titulo: 'titulo 3',
    conteudo: 'conteudo 3'
  }
  ]
  }
  mudaNome=()=>{
    const {pog}= this.state;
    this.setState({name: 'José Roberto Augostinhus Carraras', pog: 1})
    if (pog=== 1) {
      this.setState({name: 'Ricardo Augusto Nascimento', pog: 0})
    }
  }
  incrementa=()=>{
    const {cont}= this.state;
    this.setState({cont: (cont + 1)})
  }
  decrementa=()=>{
    const {cont}= this.state;
    this.setState({cont: (cont - 1)})
  }

  render(){

    const{post, name, cont} = this.state

    return(
      <div className='App'>
      <p onClick={this.mudaNome}>
        {name} <p>{cont}</p>
          <p>
          <img alt='é o tal' src={flamengo} className='image'></img>
          </p>
      </p>

      <p onClick={this.incrementa}>Valor +
      </p>
      <p onClick={this.decrementa}>Valor -
      </p>
      
        {post.map(post => (

        <div key={post.id}>

        <h1> {post.titulo}</h1> 
        <p>{post.conteudo}</p> 

        </div>

        ))}

      

      </div>
    )
  }

}
export default App;