import React from "react";

class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    };
  }

  componentDidMount = () => {
    const nome = sessionStorage.getItem('nome');
    if (nome) this.setState({
      nome
    });
  }

  changetxtName = (event) => {
    this.setState({
      txtNome: event.target.value
    });
  }

  persistName = () => {
    this.setState({
      nome: this.state.txtNome
    });
    sessionStorage.setItem('nome', this.state.txtNome);
  }

  render() {
    if (!this.state.nome) {
      return ( 
      <>
        Nome: < input type = "text"
        onChange = {
          this.changetxtName
        } > 
        </input> <
        button onClick = {
          this.persistName
        } > Salvar </button> </>
      );
    } else {
      return ( <div>

        <p>
        Olá {
          this.state.nome
        } </p> </div>
      )
    }
  }
}

export default App5;