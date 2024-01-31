function searchCEP() {

    const timeOutMilliSeconds = 300;
    const timeOutPromise = new Promise((resolve) => setTimeout(resolve, timeoutMilliseconds));

    document.getElementById('spinner').style.display = 'block';
    var cep = document.getElementById('field_searchCEP').value;
    var apiUrl = 'https://viacep.com.br/ws/consulta-cep/' + cep + '/json';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => exibirResultado(data))
        .catch(error => console.error('Erro na consulta:', error))
        .finally(() => {
            document.getElementById('spinner').style.display = 'none';
        });
}

function cleanCEP() {
    document.getElementById('field_searchCEP').value = "";
}

function exibirResultado(result) {
    var resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = '<h3>Resultado de localização do CEP:</h3>';
    resultDiv.innerHTML += '<p>CEP: ' + result.cep + '</p>';
    resultDiv.innerHTML += '<p>Logradouro: ' + result.logradouro + '</p>';
    resultDiv.innerHTML += '<p>Complemento: ' + result.complemento + '<p/>';
    resultDiv.innerHTML += '<p>Bairro: ' + result.bairro + '<p/>';
    resultDiv.innerHTML += '<p>Localidade: ' + result.localidade + '<p/>';
    resultDiv.innerHTML += '<p>UF: ' + result.uf + '<p/>';
    resultDiv.innerHTML += '<p>IBGE: ' + result.ibge + '<p/>';
    resultDiv.innerHTML += '<p>GIA: ' + result.gia + '<p/>';
    resultDiv.innerHTML += '<p>DDD: ' + result.ddd + '<p/>';
    resultDiv.innerHTML += '<p>SIAFI: ' + result.siafi + '<p/>';
}