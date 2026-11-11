window.addEventListener('load', function () {
    var lookupBtn = document.getElementById('lookup');
    var citiesBtn = document.getElementById('lookup-cities');
    var countryInput = document.getElementById('country');
    var result = document.getElementById('result');

    function search(extra) {
        var url = 'world.php?country=' + encodeURIComponent(countryInput.value) + extra;

        fetch(url)
            .then(function (response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Request failed');
            })
            .then(function (data) {
                result.innerHTML = data;
            })
            .catch(function (error) {
                result.innerHTML = 'There was a problem: ' + error.message;
            });
    }

    lookupBtn.addEventListener('click', function () {
        search('');
    });

    citiesBtn.addEventListener('click', function () {
        search('&lookup=cities');
    });
});