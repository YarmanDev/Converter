let uah = document.getElementById('convert-uah'),
    usd = document.getElementById('convert-usd');

uah.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    request.send();

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            usd.value = Math.floor(uah.value / data[0].buy * 100) / 100;
            console.log(usd.value);
            if (usd.value == 0) {
                usd.style.boxShadow = '3px 3px 7px red';
            } else {
                usd.style.boxShadow = '3px 3px 7px #2cff10';
            }
        }
    });
});

uah.addEventListener('click', () => {
    uah.style.boxShadow = '3px 3px 7px #10FFFC';
})