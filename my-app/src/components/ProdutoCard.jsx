import "./ProdutoCard.css";

function ProdutoCard({ produto }) {
  return (
    <div className="produto-card">
      <img
        src={produto.imagem}
        alt={produto.nome}
        loading="lazy"
        width="200"
        height="150"
      />

      <h3>{produto.nome}</h3>
      <p className="preco">R$ {produto.preco.toFixed(2)}</p>
      <p className="descricao">{produto.descricao}</p>
    </div>
  );
}

export default ProdutoCard;
