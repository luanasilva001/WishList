import '../home/home.css';
import img2 from "../home/imgs/retangulo02.png"
// import cadDesejos from './pages/cadDesejos/cadDesejos';

function App() {
  return (
    <html>
      <head>
        <title>Desejos</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=devide-width,initial-scale=1, shrink-to-fit=no" />
      </head>
      <body>
        <header className="menu-bg">
          <div className="menu">
            <div className="menu-logo">
              <a href="#">Desejos.com</a>
            </div>
            <nav className="menu-nav">
              <ul>
                <li><a href="#listar">Listar</a></li>
                <li><a href="#cadastro">Cadastrar Desejos</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="sobre">
          <div className="sobre-info">
            <h1>Quem somos?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="sobre-img">
            <img src={img2} alt="Imagem de fundo" />
          </div>
        </section>
        <footer className="footer">
          <p>SENAI INFORMÁTICA</p>
        </footer>
      </body>
    </html>
  );
}

export default App;
