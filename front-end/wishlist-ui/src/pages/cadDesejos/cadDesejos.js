import '../cadDesejos/cadDesejos.css';
import { Component } from 'react';

class CadDesejos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descricao: '',
            idUsuario: 0
        }
    }

    salvarDescricao = async (event) => {
        await this.setState({ descricao: event.target.value })
        console.log(this.state.descricao)
    }

    salvarId = async (event) => {
        await this.setState({ idUsuario: event.target.value })
        console.log(this.state.idUsuario)
    }

    limparCampos = () => {
        this.setState({
            descricao: '',
            idUsuario: 1
        })

        console.log("Valores limpos com sucesso!")
    }

    cadastrarDesejo = (event) => {

        event.preventDefault();

        fetch('http://localhost:5000/api/listadesejo', {
            method: 'POST',

            body: JSON.stringify({ Descricaodesejo: this.state.descricao, IdUsuario: this.state.idUsuario }),

            headers: {
                "Content-Type": "application/json"
            }
        })

            .then(console.log('Desejo cadastrado!'))

            .catch(erro => console.log(erro))

        // .then(this.limparCampos)
    }

    render() {
        return (
            <html>
                <head>
                    <title>Cadastro de desejos</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=devide-width,initial-scale=1, shrink-to-fit=no" />
                </head>
                <body>

                    <header>
                        <div className="menu">
                            <a href="#">Desejos.com</a>
                        </div>
                    </header>

                    <section className="cadastro">
                        <h2>Cadastrar desejo na lista</h2>
                        <form className="formulario" onSubmit={this.cadastrarDesejo}>
                            <p>Digite o seu desejo</p>
                            <input className="input-nome"
                                type="text"
                                value={this.state.descricao}
                                onChange={this.salvarDescricao}
                                placeholder="Digite aqui o seu desejo"
                            />
                            <p>Digite o seu ID</p>
                            <input className="input-id"
                                type="number"
                                value={this.state.idUsuario}
                                onChange={this.salvarId}
                                placeholder="digite seu id"
                            />
                            <button type="submit">Enviar</button>
                        </form>
                    </section>
                </body >
            </html >

        )
    }
}

export default CadDesejos;