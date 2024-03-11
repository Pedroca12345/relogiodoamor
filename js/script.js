var dias = document.getElementById('dias')
var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

setInterval(function atualizarTempo(){
    var dataNamoro = new Date(2024, 7, 23).getTime()
    var dataAtual = new Date().getTime()
    var dataEmSegundos = (dataNamoro - dataAtual) / 1000
    var diasTotais = parseInt(dataEmSegundos / 86400)
    dataEmSegundos = dataEmSegundos % 86400
    var horasTotais = parseInt(dataEmSegundos / 3600)
    dataEmSegundos = dataEmSegundos % 3600
    var minutosTotais = parseInt(dataEmSegundos / 60)
    dataEmSegundos = parseInt(dataEmSegundos % 60)

    if(diasTotais < 10) {
        diasTotais = '0' + diasTotais 
    }

    if(horasTotais < 10) {
        horasTotais = '0' + horasTotais
    } 

    if(minutosTotais < 10) {
        minutosTotais = '0' + minutosTotais
    } 

    if(dataEmSegundos < 10) {
        dataEmSegundos = '0' + dataEmSegundos
    }

    dias.value = diasTotais
    horas.value = horasTotais
    minutos.value = minutosTotais
    segundos.value = dataEmSegundos

    
}, 1000)