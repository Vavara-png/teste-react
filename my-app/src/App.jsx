import { useEffect, useState } from "react";
import ProdutoCard from "./components/ProdutoCard";
import produto1 from './images/produto1.webp';
import produto2 from './images/produto2.avif';
import produto3 from './images/produto3.avif';
import './App.css';

const mockProdutos = [
  {
    id: 1,
    nome: 'Produto 1',
    preco: 29.99,
    imagem: produto1, // versão otimizada
    descricao: 'Descrição do produto 1'
  },
  {
    id: 2,
    nome: 'Produto 2',
    preco: 49.99,
    imagem: produto2,
    descricao: 'Descrição do produto 2'
  },
  {
    id: 3,
    nome: 'Produto 3',
    preco: 19.99,
    imagem: produto3,
    descricao: 'Descrição do produto 3'
  }
];

function App() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    // Simulando carregamento de API
    setTimeout(() => {
      setProdutos(mockProdutos);
      setLoading(false);
    }, 1000); // reduzido para 1s apenas como simulação
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() === '' || preco === '' || descricao.trim() === '') return;

    const novoProduto = {
      id: Date.now(),
      nome: nome.trim(),
      preco: parseFloat(preco),
      imagem: imagem || '/images/placeholder.avif', // imagem padrão se não for fornecida
      descricao: descricao.trim()
    };

    setProdutos([...produtos, novoProduto]);
    setNome('');
    setPreco('');
    setDescricao('');
    setImagem('');
  };

  return (
    <main>
      <h1>Catálogo de Produtos</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome do produto" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          step="0.01" 
          placeholder="Preço" 
          value={preco} 
          onChange={(e) => setPreco(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Imagem (URL opcional)" 
          value={imagem} 
          onChange={(e) => setImagem(e.target.value)} 
        />
        <textarea 
          placeholder="Descrição" 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
          required 
        ></textarea>
        <button type="submit">Adicionar Produto</button>
      </form>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="produtos-lista">
          {produtos.map(produto => (
            <ProdutoCard 
              key={produto.id} 
              nome={produto.nome} 
              preco={produto.preco} 
              imagem={produto.imagem} 
              descricao={produto.descricao} 
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
