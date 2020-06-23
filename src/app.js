const MAP_MONTH = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

window.onload = function(){

    var x = setInterval(function() {
        
        let now = new Date();

        let day = now.getDate().toString().padStart(0, 2);
        
        let month = MAP_MONTH[now.getMonth()];

        let year = now.getFullYear();

        let hour = now.getHours().toString().padStart(2, '0');
        
        let minute = now.getMinutes().toString().padStart(2, '0');
        
        let seconds = now.getSeconds().toString().padStart(2, '0');
        
        document.getElementById("timer-content").innerHTML = `${day} de ${month} de ${year} ${hour}:${minute}:${seconds}`;

    }, 1000);

}

function calc(n){
    let elResult = document.getElementById('fibonacci-result');
    elResult.innerText = `Fibonacci de ${n}: ${fibonacci(n)}`;
}


function fibonacci(n){
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) +
            fibonacci(n - 2);
    }
}