$(document).ready(function(){
    for(var i=1;i<152;i++){
        $(".pics").append("<img id="+i+" src='https://pokeapi.co/media/img/"+i+".png'>")
    }
    $("img").click(function(){
        $.get("https://pokeapi.co/api/v2/pokemon/"+$(this).attr("id")+"", function(res){
            console.log(res);
            var pokedex = "";
            pokedex += "<h1>"+res.name+"</h1>";
            pokedex += "<img src='https://pokeapi.co/media/img/"+res.id+".png'>"
            pokedex += "<h4>Types</h4>"
            pokedex += "<ul>";
            for(var i=0;i<res.types.length;i++){
                pokedex += "<li>"+res.types[i].type.name+"</li>";
            }
            pokedex += "</ul>";
            pokedex += "<h4>Height</h4>";
            pokedex += res.height;
            pokedex += "<h4>Weight</h4>";
            pokedex += res.weight;
            $(".pokedex").html(pokedex);
        }, "json");
    });

});