import { Component } from 'react';

class CadDesejos extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaDesejos : [],
            descricao : '',
            idUsuario : 1
        }
    }

    buscarDesejos = () => {
        console.log('A API tá lascada!')

        fetch('http://localhost:5000/api/listadesejo')

        .then(resposta => resposta.json())

        .then(dados => this.setState({ listaDesejos : dados }))
    }

    componentDidMount(){
        this.buscarDesejos();
    }

    salvarDescricao = async (event) => {
        await this.setState({ descricao : event.target.value })
        console.log(this.state.descricao)
    }

    salvarId = async (event) => {
        await this.setState({ idUsuario : event.target.value })
        console.log(this.state.idUsuario)
    }

    limparCampos = () => {
        this.setState({
            descricao : '',
            idUsuario : 1
        })

        console.log("Valores limpos com sucesso!")
    }

    cadastrarDesejo = (event) => {

        event.preventDefault();

        fetch('http://localhost:5000/api/listadesejo', {
            method : 'POST',

            body : JSON.stringify({ Descricaodesejo : this.state.descricao, IdUsuario : this.state.idUsuario }),

            headers : {
                "Content-Type" : "application/json"
            }
        })

        .then(console.log('Desejo cadastrado!'))

        .catch(erro => console.log(erro))

        // .then(this.limparCampos)
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        {/* Cadastro de Desejo */}
                        <h2>Louvado seja Allah o Senhor do Universo</h2>
                        <form onSubmit={this.cadastrarDesejo}>
                            <div>
                                <button type="submit">Enviar</button>
                                <input
                                    type="text"
                                    value={this.state.descricao}
                                    onChange={this.salvarDescricao}
                                    placeholder="Digite seu desejo aqui..."
                                />
                                {/* <input
                                    type="number"
                                    value={this.state.idUsuario}
                                    onChange={this.salvarId}
                                    placeholder="Id do Usuário"
                                /> */}
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        )
      }
}

export default CadDesejos;