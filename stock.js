$(function() {

    let stockprice = {mazebankas:"988", motorsportas: "873"};

    let money = 2566;
    $("#cash").html(money);
    
    
    

    setInterval(function() {
        var number = 1003 + Math.floor(Math.random() * 711.9);
        var number1 = 1003 + Math.floor(Math.random() * 711.9);
        let difference = [number, number1];
        
        console.log(difference);
        var randomItem = difference[Math.floor(Math.random()*difference.length)];

        if(randomItem != difference[1]){
            console.log("randomas1");
        } else
            console.log("randomas2");

        console.log(randomItem);

        $("#MAZEBANK_price").html(randomItem);
    
      },
      1000);

    setInterval(function (){
        var pricechange2 = 985 + Math.floor(Math.random() * 36.4);
        stockprice.motorsportas = pricechange2;
        $("#MOTORSPORTS_price").html(pricechange2);
    },
    1200);

    $("#plius").click(function() {
        let currentvalue = $("#MAZEBANK_price").html();
        console.log(currentvalue);
        
        console.log(money);
        if(currentvalue >= money){
            alert("neuztenkate pinigu");
        } else {
            money = money - currentvalue;
            $("#cash").html(money);
        }
    });
    
});
