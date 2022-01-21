import React, { useState, useEffect } from "react";


// class App extends React.Component{
//   render(){
//     return(
//       <> 
//       <p>
//         Meu primeiro parágrafo
//       </p>
//       <p>
//       Meu segundo parágrafo
//       </p>
//       <p>
//         {new Date().toLocaleDateString('pt-BR')}
//       </p>
//       </>
//     )
//   }
// }

export default function App() {
  const [nome, setNome] = useState(undefined);

  useEffect(
    ()=> {
      if (nome === undefined) {
        setNome(sessionStorage.getItem('nome') || '');
      }

      else {
        sessionStorage.getItem('nome', nome);
      }
    }, [nome]
  );

  return (
    <>
      Nome: <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
      <br />
      Olá {nome}
    </>
  );
}
