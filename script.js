

var coordenadas1 = parseInt(prompt('1'));
var co1Lati, co1Long

var coordenadas2 = parseInt(prompt('2'));
var co2Lati, co2Long

var resultado


// Tratando os dados da API
const api1 = `https://brasilapi.com.br/api/cep/v2/${coordenadas1}`;
fetch(api1)
    .then(resposta => resposta.json())
    .then(dados => {                                    // Pegando a Latitude e Longitude
        co1Lati = dados.location.coordinates.latitude;
        co1Long = dados.location.coordinates.longitude;
    })



// Segundo CEP
const api2 = `https://brasilapi.com.br/api/cep/v2/${coordenadas2}`;      
fetch(api2)
    .then(resposta => resposta.json())
    .then(dados => {                                           
        co2Lati = dados.location.coordinates.latitude;
        co2Long = dados.location.coordinates.longitude;
    })


// Usando site da MapQuest para calcular de parâmetro X para Y 

var calculo = `https://www.mapquestapi.com/directions/v2/route?key=FMWbPYju0jXz2kHuWiEEangHsT9aqMoi&from=${co1Lati},${co1Long}&to=${co2Lati},${co2Long}`;
fetch(calculo)
    .then(resposta => resposta.json())
    .then(dados => {
        resultado = dados.distance;
        document.write(resultado)
    })



