// https://brasilapi.com.br/api/cep/v2/{cep}

//  var teste = prompt('Digite o CEP')

var url1
var url2

var coordenadas1
var coordenadas2

// Tratando os dados da API
var api1 = `https://brasilapi.com.br/api/cep/v2/{89037-030}`;
fetch(api1)
    .then(resposta => resposta.json())
    .then(dados => {
        coordenadas1 = dados.location.type.point;
        window.alert(coordenadas1)
    })


var api2 = `https://brasilapi.com.br/api/cep/v2/{cep}`;
fetch(api2)
    .then(resposta => resposta.json())
    .then(dados => {
        coordenadas2 = dados.location.type.point;
    })

