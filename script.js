

var cep1 = prompt('1');
var co1Lati, co1Long
var coordenadas1

var cep2 = prompt('2');
var co2Lati, co2Long
var coordenadas2

var resultado


// Tratando os dados da API
const api1 = `https://brasilapi.com.br/api/cep/v2/${cep1}`;
fetch(api1)
    .then(resposta => resposta.json())
    .then(dados => {                                    // Pegando a Latitude e Longitude
        co1Lati = dados.location.coordinates.latitude;
        co1Long = dados.location.coordinates.longitude;
        coordenadas1 = `${co1Lati},${co1Long}`;
        console.log(coordenadas1)
    })


// Segundo CEP
const api2 = `https://brasilapi.com.br/api/cep/v2/${cep2}`;
fetch(api2)
    .then(resposta => resposta.json())
    .then(dados => {
        co2Lati = dados.location.coordinates.latitude;
        co2Long = dados.location.coordinates.longitude;
        coordenadas2 = `${co2Lati},${co2Long}`;
        console.log(coordenadas2)
    })

    
// Usando site da MapQuest para calcular de parâmetro X para Y 

var calculo = `https://www.mapquestapi.com/directions/v2/route?key=FMWbPYju0jXz2kHuWiEEangHsT9aqMoi&from=${coordenadas1}&to=${coordenadas2}`;
fetch(calculo)
    .then(resposta => resposta.json())
    .then(dados => {
        resultado = dados.distance;
        console.log(dados)
        document.write(resultado)
    })



