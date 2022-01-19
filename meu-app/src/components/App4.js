import React from "react";

class App4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {nome: undefined, txtNome: ''};
    }

    changetxtName = (event)=>{
        this.setState({txtNome: event.target.value});
    }

    persistName = ()=>{
      this.setState({nome: this.state.txtNome});
    }

  render(){
    if(!this.state.nome){
      return(
        <>
        Nome: <input type="text" onChange={this.changetxtName}></input>
        <button onClick={this.persistName}>Salvar</button>
        </>
      );
    }
    else{
    return(
      <> 
      
        <p>
            Olá {this.state.nome}
        </p>
      </>
    )
  }
}
}

export default App4;