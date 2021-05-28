import { Component } from 'react';
import '../desejos/desejos.css';
import img from "../home/imgs/retangulo01.png"
import img2 from "../desejos/icon/communication/Path.png"

class Desejos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaDesejos: [],
            descricao: '',
            usuario: ''
        }
    }

    buscarDesejos = () => {
        console.log('A API tá lascada!')

        fetch('http://localhost:5000/api/listadesejo')

            .then(resposta => resposta.json())

            .then(dados => this.setState({ listaDesejos: dados }))
    }

    componentDidMount() {
        this.buscarDesejos();
    }

    render() {
        return (
            <div>
                <nav className="barra-inicial">
                    <h2 className="texto-site">Desejos.com</h2>
                    <img className="imagem" src={img} style={{ height: "100px", width: "100%" }} />
                </nav>
                <main>
                    <section>
                        <h2>Lista de Desejos</h2>
                        <img className="icone" src={img2} />
                        <table>
                            <thead>
                                <tr>
                                    {/* <th>#</th>
                                    <th>IdUsuario</th>
                                    <th>Descrição</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaDesejos.map((desejo) => {
                                        return (
                                            <tr key={desejo.idDesejo}>
                                                <td>{desejo.idDesejo}</td>
                                                <td>{desejo.idUsuario}</td>
                                                <td>{desejo.descricaodesejo}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        {/* Cadastro de Desejo */}
                        {/* <h2>Nome do usuário para buscar</h2> */}

                        <form>
                            <div>
                                {/* <input
                                     type="text"
                                    value={this.state.usuario}
                                    onChange={this.salvarNome}
                                    placeholder="Nome do Usuário"
                                /> */}
                                <button type="submit" onClick={() => this.buscarDesejos()}>Visualizar</button>
                            </div>
                        </form>
                    </section>
                </main>
            </div >
        )
    }
}

export default Desejos;