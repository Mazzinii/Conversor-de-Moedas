# Conversor de Moedas

## Problema

Antes de uma viagem a outro país percebi que seria fundamental poder consultar as taxas de câmbio de forma rápida e eficiente para garantir que os valores estejam sempre atualizados. Pensando nisso, desenvolvi este projeto de cotação de moedas para facilitar a conversão de valores entre diferentes moedas com informações atualizadas.

## Solução

Este projeto web oferece uma solução prática para conversão de moedas. Ele utiliza uma API para obter as taxas de câmbio mais recentes e permite que os usuários realizem conversões entre diferentes moedas de forma simples e intuitiva.

## Funcionalidades

- **Obter Taxas de Câmbio**: Faz uma requisição a uma API para obter as taxas de câmbio atuais e atualizadas.
- **Converter Moedas**: Permite aos usuários converter valores de uma moeda para outra com base nas taxas obtidas.
- **Interface Intuitiva**: Fornece uma interface clara e fácil de usar para inserção de valores e visualização dos resultados da conversão.

## Tecnologias Utilizadas

- **HTML5**: Estrutura o conteúdo da aplicação web.
- **CSS3**: Responsável pela estilização e layout da interface.
- **JavaScript**: Implementa a lógica da aplicação, incluindo a interação com a API e o cálculo das conversões.
- **API de Câmbio**: Fornece as taxas de câmbio atualizadas necessárias para realizar as conversões.

## Como Funciona

1. **Coleta de Inputs**: O usuário insere o valor e seleciona as moedas de origem e destino. A aplicação verifica se todos os campos foram preenchidos corretamente antes de prosseguir.
2. **Requisição à API**: A aplicação faz uma requisição HTTP para uma API de câmbio para obter as taxas de câmbio atuais.
3. **Cálculo da Conversão**: Utilizando as taxas obtidas da API, a aplicação calcula o valor convertido com base no valor inserido pelo usuário.
4. **Exibição dos Resultados**: O valor convertido é apresentado ao usuário em tempo real, permitindo a visualização imediata dos resultados.

## Exemplos de Uso

1. **Inserção de Valores**: O usuário digita o valor a ser convertido e escolhe a moeda de origem e a moeda de destino.
2. **Conversão**: Após preencher os campos e clicar no botão de conversão, o valor convertido é exibido instantaneamente na tela.

## Estrutura do Projeto

- `index.html` – Estrutura HTML da aplicação.
- `style.css` – Arquivo de estilo para a aplicação.
- `script.js` – Lógica JavaScript para interação com a API e processamento de conversões.
- `README.md` – Documentação do projeto.
- `img` - Pasta com as imagens utilizadas (favicon, manifest etc)
