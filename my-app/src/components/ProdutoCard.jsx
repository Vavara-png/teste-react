import './ProdutoCard.css';

function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="produto-card">
      <img 
        src={imagem} 
        alt={nome} 
        loading="lazy" 
        width="200" 
        height="150" 
      />
      <h3>{nome}</h3>
      <p className="preco">R$ {preco.toFixed(2)}</p>
      <p className="descricao">{descricao}</p>
    </div>
  );
}

export default ProdutoCard;
