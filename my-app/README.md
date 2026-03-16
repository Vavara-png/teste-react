# 🛒 Catálogo de Produtos – Otimização de Performance

## 📌 Introdução
Este projeto é um catálogo de produtos desenvolvido em React, com foco em boas práticas de performance.  
Durante o processo, foram aplicadas técnicas de otimização como **lazy loading de imagens**, **conversão para WebP/AVIF**, **minificação de CSS/JS** e **uso de cache**.

---📷 Print do relatório inicial:
![Relatório inicial](prints/lighthouse-inicial.png)


📊 Relatórios de Performance
🔹 Relatório Inicial
Solicitações: 19

Transferência: 1,7 kB

Recursos carregados: 2,1 MB

Tempo de carregamento:

DOMContentLoaded: 1,87 s

Load: 2,19 s

Conclusão: 4,44 s

Principais gargalos:

Imagens JPEG pesadas (20160731_100139.jpg, 20160731_102209.jpg, perfume-2142792_1280.jpg).

Scripts e CSS não minificados.


📷 Print do relatório final:
![Relatório final](prints/lighthouse-final.png)
🔹 Relatório Final
Solicitações: 22

Transferência: 2,6 kB

Recursos carregados: 1,5 MB

Tempo de carregamento:

DOMContentLoaded: 1,51 s

Load: 1,78 s

Conclusão: 3,01 s

Melhorias confirmadas:

Imagens convertidas para WebP/AVIF (produto1.webp, produto2.avif, produto3.avif).

Lazy loading ativo.

Scripts e CSS cacheados e minificados.

Redução de ~600 KB no peso total e ~32% no tempo de carregamento.



✅ Conclusão
As otimizações aplicadas resultaram em:

Página mais leve e rápida.

Experiência mais fluida para o usuário.

Documentação clara com comparativo visual dos resultados.
