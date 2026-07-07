import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="navbar-brand-mark" />
          FFVII <span>COMPILATION</span>
        </div>
        <p className="footer-disclaimer">
          Página tributo de fã, sem fins comerciais. Final Fantasy VII e todos
          os personagens, artes e nomes pertencem à Square Enix. Conteúdo
          criado apenas para celebrar a saga.
        </p>
      </div>
    </footer>
  );
}
