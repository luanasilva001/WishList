import './App.css';
import img from "../home/Rectangle 10.png"
import imgdois from "../home/Rectangle 11.png"

function App() {
  return (
    <div>
      <nav className="barra-inicial">
        <h2 style={{ marginTop: "20px" }} className="texto-site">Desejos.com</h2>
        <div className="titulos" style={{ color: "#000000", marginTop: "30px" }}>
          <h3><span className="listar-espaco">Listar</span></h3>
          <h3 >Cadastar desejos</h3>
        </div>
        <img className="imagem" src={img} style={{ height: "100px", width: "100%" }} />
      </nav>

      <section>
        <div className="cor">
          <div className="div">
            <div className="div1">
              <h2 className="txt1">Quem somos?</h2>
              <div className="txt-central">
                <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div className="div2">
              <img className="imagem-centro" src={imgdois} style={{ height: "290.92px", width: "290.92px" }} />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p><span className="rodape">
          SENAI INFORMÁTICA
          </span></p>
      </footer>
    </div >

  );
}

export default App;
