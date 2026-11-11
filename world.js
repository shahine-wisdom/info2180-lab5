window.addEventListener('load', function () {
    var lookupBtn = document.getElementById('lookup');
    var countryInput = document.getElementById('country');
    var result = document.getElementById('result');

    lookupBtn.addEventListener('click', function () {
        var country = countryInput.value;

        fetch('world.php?country=' + encodeURIComponent(country))
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
    });
});