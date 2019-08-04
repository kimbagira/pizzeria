//business Logic
function Order(size,crust,toppings,quantity,delivery){
  this.pizzasize = size;
  this.pizzacrust = crust;
  this.pizzatoppings = toppings;
  this.pizzaquantity= quantity;
  this.pizzadelivery = delivery;
}
Order.prototype.allInfo=function(){
  return this.pizzasize + "," + this.pizzacrust + "," + this.pizzatoppings + "," + this.pizzaquantity + "," + this.pizzadelivery;
}
//user interface Logic
$(document).ready(function(){

$('button').click(function(){
    var newOrder;
    if($('#size1').val()){
      var inputtedpizzasize=$('#size1').val();
      console.log(inputtedpizzasize)
    }
    else if($('#size2').val()){
      var inputtedpizzasize=$('#size2').val();
      console.log(inputtedpizzasize)
    }

  else if($('#size3').val()){
      var inputtedpizzasize=$('#size3').val();
      console.log(inputtedpizzasize)
    }

    if($('#crust1').val()){
      var inputtedpizzacrust=$('#crust1').val();
        console.log(inputtedpizzacrust)
      }
    else if($('#crust2').val()){
      var inputtedpizzacrust=$('#crust2').val();
      console.log(inputtedpizzacrust)
    }

  else if($('#crust3').val()){
      var inputtedpizzacrust=$('#crust3').val();
      console.log(inputtedpizzacrust)
    }

   if($('#topping1').val()){
      var inputtedpizzatoppings=$('#topping1').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping2').val()){
      var inputtedpizzatoppings=$('#topping2').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping3').val()){
      var inputtedpizzatoppings=$('#topping3').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping4').val()){
      var inputtedpizzatoppings=$('#topping4').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping3').val()){
      var inputtedpizzatoppings=$('#topping3').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping4').val()){
      var inputtedpizzatoppings=$('#topping4').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping5').val()){

      var inputtedpizzatoppings=$('#topping5').val();
        console.log(inputtedpizzatoppings)
    }
   
    else if($('#topping6').val()){
      var inputtedpizzatoppings=$('#topping6').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping7').val()){
      var inputtedpizzatoppings=$('#topping7').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping8').val()){
      var inputtedpizzatoppings=$('#topping8').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping9').val()){
      var inputtedpizzatoppings=$('#topping9').val();
        console.log(inputtedpizzatoppings)
    }

    if($('#hide3').val()){
      var inputtedpizzaquantity=$('#hide3').val();
        console.log(inputtedpizzaquantity)
    }

    if($('#delivery1').val()){
    var inputtedpizzadelivery=$('#delivery1').val();
        console.log(inputtedpizzadelivery)
    }
    if($('#delivery2').val()){
      var inputtedpizzadelivery=$('#delivery2').val();
          console.log(inputtedpizzadelivery)
      }
    
    var newOrder = Order(inputtedpizzasize,inputtedpizzacrust,inputtedpizzatoppings,inputtedpizzaquantity,inputtedpizzadelivery);
    console.log(newOrder)

    $('ul#orderone').append("<li><span class='contact1'>" + newOrder.allInfo +"</span></li>");
    if($('#hide3').val()>1){
      console.log()
    }
    //  $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
    // $('ul#orderone').append("<li><span class='contact1'>" + newOrder.allInfo + "</span></li>");

    $(".contact1").last().click(function(){
    $("#get-pizza").show();
    $(".pizza-size").text(newOrder.pizzasize);
    $(".pizza-crust").text(newOrder.pizzacrust);
    $(".pizza-toppings").text(newOrder.pizzatoppings);
    $(".pizza-quantity").text(newOrder.pizzaquantinty);
    $(".pizza-delivery").text(newOrder.pizzadelivery);
  });
  });
$('.pizzasize').val();
$('.pizzacrust').val();
$('.pizzatoppings').val();
$('.pizzaquantity').val();
$('.pizzadelivery').val();
//   $("input#new-location").val();
});
 
