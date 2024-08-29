function buttonCotaçao() {
  //declarando var e const dos inputs
  const valor1 = document.getElementsByName("radio");
  const valor2 = document.getElementsByName("radio1");
  const valorMoeda = document.querySelector(".res");
  var erroValor = document.querySelector(".erroInput");
  var erroOrigem = document.querySelector(".erroInputOrigem");
  var erroDestino = document.querySelector(".erroInputDestino");
  var dinheiro = document.querySelector("#valor").value;

  if (dinheiro == "") {
    erroValor.innerHTML = "<p>Selecione um valor para moeda origem</p>";
  } else {
    erroValor.innerHTML = "";
    //transformando str em number
    dinheiro = Number(dinheiro);

    //declarando var dos radios
    var moeda1 = "";
    var moeda2 = "";

    //pegando valor dos radio1
    if (valor1[0].checked) {
      moeda1 = "USD";
    } else if (valor1[1].checked) {
      moeda1 = "ARS";
    } else if (valor1[2].checked) {
      moeda1 = "BRL";
    } else {
      erroOrigem.innerHTML = "<p>Selecione um valor para moeda origem</p>";
    }

    // verificando se a moeda é difente de vazio e tirando a menssagem de erro
    if (moeda1 !== "") {
      erroOrigem.innerHTML = "";
    }

    //pegando valor do radio2
    if (valor2[0].checked) {
      moeda2 = "USD";
    } else if (valor2[1].checked) {
      moeda2 = "ARS";
    } else if (valor2[2].checked) {
      moeda2 = "BRL";
    } else {
      erroDestino.innerHTML = "<p>Selecione um valor para moeda destino</p>";
    }

    // verificando se a moeda é difente de vazio e tirando a menssagem de erro
    if (moeda2 !== "") {
      erroDestino.innerHTML = "";
    }

    //definindo a URL
    var url = `https://economia.awesomeapi.com.br/last/${moeda1}-${moeda2}`;

    //fazendo a requisiçao da  API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //definindo var para retornar o valor desejado da api
        var code = moeda1 + moeda2;

        //concatendo tudo em uma var
        var cotacao = data[code].bid;

        //efetuando o calculo
        var resultado = dinheiro * cotacao;

        //definindo a formataçao do valor final
        const formatter = new Intl.NumberFormat("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

        //aplicando formataçao no valor
        const resultadoFormatado = formatter.format(resultado);

        //exibindo o resultado na tela
        valorMoeda.innerHTML = `<h3> Resultado : ${resultadoFormatado} ${moeda2} </h3>`;
      })
      .catch((error) => console.error("Erro", error));
  }
}
