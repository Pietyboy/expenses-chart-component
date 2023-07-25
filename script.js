function spending_calculator(){
    fetch("./data.json")
        .then(function (response) { return response.json(); })
        .then(function(data) {
            alert(Object.values(data[0]));
        })
}