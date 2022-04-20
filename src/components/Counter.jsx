import { useState } from 'react';

// Imutabilidade:

// usuarios = ['Zobel', 'Anderson', 'Almeida']

// mutabilidade --> usuarios.push('Carlos')

// imutabilidade --> novosUsuarios = [...usuarios, 'Carlos']
// -> Conceito: Aponta para um novo espaço na memória, cria um novo 
//    espaço e não altera um existente.
// -> Conceito muito difundido na programação funcional
// -> React --> imutabilidade = performance


export function Counter() {
  const [counter, setCounter ] = useState(0);
  
  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}