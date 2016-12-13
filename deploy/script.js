var newBeer = {
    date: new Date(),
    name: undefined,
    style: undefined,
    method: undefined,
    abv: undefined,
    niceLabel: undefined,
    slammability: undefined,
    brewery: undefined,
    location: undefined,
    myRating: undefined,
    thoughts: undefined
}
var counter = 0;
$('#add').on('click', function() {
    var array = ["name", "style", "method", "abv", "niceLabel", "slammability", "brewery", "location", "myRating", "thoughts"]
    var indexIncrement = array[counter]
    console.log(newBeer);

    function add() {
        $('#direction').text(array[counter + 1])
        newBeer[indexIncrement] = $('#input').val()
        counter++;
        $('#input').val('');
    }
    add()
})

$('#submit').on('click', function() {
    console.log(newBeer);
    $.ajax({
        url: 'http://localhost:3000/beer',
        type: "POST",
        data: JSON.stringify(newBeer),
        datatype: "json",
        contentType: "application/json",
        success: function(result) {
            console.log(result);
        },
        fail: function(error) {
            console.log("error", error);
        }

    })
})

$('#reload').click(function() {
    location.reload();
});
