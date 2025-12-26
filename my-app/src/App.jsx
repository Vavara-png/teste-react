import { useEffect, useState } from "react";
import ProdutoCard from "./components/ProdutoCard";
import './App.css';

const mockProdutos = [
  {
    id: 1,
    nome: 'Produto 1',
    preco: 29.99,
    imagem: 'https://1.bp.blogspot.com/-FY3BafmX31g/V53zoYefqyI/AAAAAAAACAo/mvvWeLJifN8Od5YBoRjqPr44o6IMvGrmwCLcB/s1600/20160731_100139.jpg',
    descricao: 'Descrição do produto 1'
  },
  {
    id: 2,
    nome: 'Produto 2',
    preco: 49.99,
    imagem: 'https://1.bp.blogspot.com/-ZcJwiq7NTQg/V535g7T-jTI/AAAAAAAACBY/Mh0jfgoIeYwJCSoHhzHCj2Pq_LOWaGBAACLcB/s1600/20160731_102209.jpg',
    descricao: 'Descrição do produto 2'
  },
  {
    id: 3,
    nome: 'Produto 3',
    preco: 19.99,
    imagem: 'https://cdn.pixabay.com/photo/2017/03/14/11/36/perfume-2142792_1280.jpg',
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
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() === '' || preco === '' || descricao.trim() === '') return;

    const novoProduto = {
      id: Date.now(), // Simples ID único
      nome: nome.trim(),
      preco: parseFloat(preco),
      imagem: imagem || 'https://via.placeholder.com/150',
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
