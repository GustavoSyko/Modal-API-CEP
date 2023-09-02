var co1Lati, co1Long;
var coordenadas1;

var co2Lati, co2Long;
var coordenadas2;

var resultado

function enviarCep() {
    var cep1 = document.getElementById('cep1').value;
    var cep2 = document.getElementById('cep2').value;


    // Tratando os dados da BrasilAPI para o primeiro
    const api1 = `https://brasilapi.com.br/api/cep/v2/${cep1}`;
    fetch(api1)
        .then(resposta1 => resposta1.json())
        .then(dados1 => {               // Pegando os dados e jogando pra uma váriavel só
            co1Long = dados1.location.coordinates.longitude;
            co1Lati = dados1.location.coordinates.latitude;
            coordenadas1 = `${co1Lati},${co1Long}`;

            // Tratando os dados da BrasilAPI para o segundo
            const api2 = `https://brasilapi.com.br/api/cep/v2/${cep2}`;
            return fetch(api2);
        })


        .then(resposta2 => resposta2.json())
        .then(dados2 => {
            co2Long = dados2.location.coordinates.longitude;
            co2Lati = dados2.location.coordinates.latitude;
            coordenadas2 = `${co2Lati},${co2Long}`;

            // Usando a API do MapQuest para calcular a distância
            const calculo = `https://www.mapquestapi.com/directions/v2/route?key=FMWbPYju0jXz2kHuWiEEangHsT9aqMoi&from=${coordenadas1}&to=${coordenadas2}`;
            return fetch(calculo);
        })

                // Buscando a distância e apresentando no HTML.
        .then(resposta3 => resposta3.json())
        .then(dados3 => {
            resultado = dados3.route.distance;
            document.getElementById('resultado').innerHTML = 'A distância é de ' + resultado.toFixed(1) + ' KMs'    // Mostrar distância 
        })

        // Pegar algum erro que aconteça e jogar no lugar do resultado
        .catch(erro => {
            document.getElementById('resultado').innerHTML = 'Houve algum erro, talvez algum CEP inválido, ou que não esteja em nosso banco de dados, desculpe.'
        });
}


