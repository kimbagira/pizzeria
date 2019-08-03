//business Logic
function Order(size,crust,toppings,quantity,delivery){
  this.pizzasize = size;
  this.pizzacrust = crust;
  this.pizzatoppings = toppings;
  this.pizzaquantity= quantity;
  this.pizzadelivery = delivery;
}
order.prototype.allInfo=function(){
  return this.pizzasize+","+this.pizzacrust+","+this.pizzatoppings+","+this.pizzaquantity+","+this.pizzadelivery;
}
//user interface Logic
$(document).ready(function(){
  $('button').click(function(){
    //event.preventDefault();
    console.log('error')
    if($('#size1:checked').val()){
      var inputtedpizzasize=$('#size1').val();
      console.log(inputtedpizzasize)
    }
    else if($('#size2:checked').val()){
      var inputtedpizzasize=$('#size2').val();
      console.log(inputtedpizzasize)
    }

  else if($('#size3:checked').val()){
      var inputtedpizzasize=$('#size3').val();
      console.log(inputtedpizzasize)
    }
    else{
      console.log('error');
    }

    if($('#crust1:checked').val()){
      var inputtedpizzacrust=$('#crust1').val();
        console.log(inputtedpizzacrust)
      }
    else if($('#crust2:checked').val()){
      var inputtedpizzacrust=$('#crust2').val();
      console.log(inputtedpizzacrust)
    }

  else if($('#crust3:checked').val()){
      var inputtedpizzacrust=$('#crust3').val();
      console.log(inputtedpizzacrust)
    }
    else{
      console.log('error');
    }

   if($('#topping1:checked').val()){
      var inputtedpizzatoppings=$('#topping1').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping2:checked').val()){
      var inputtedpizzatoppings=$('#topping2').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping3:checked').val()){
      var inputtedpizzatoppings=$('#topping3').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping4:checked').val()){
      var inputtedpizzatoppings=$('#topping4').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping3:checked').val()){
      var inputtedpizzatoppings=$('#topping3').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping4:checked').val()){
      var inputtedpizzatoppings=$('#topping4').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping5:checked').val()){
      var inputtedpizzatoppings=$('#topping5').val();
        console.log(inputtedpizzatoppings)
    }
   
    else if($('#topping6:checked').val()){
      var inputtedpizzatoppings=$('#topping6').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping7:checked').val()){
      var inputtedpizzatoppings=$('#topping7').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping8:checked').val()){
      var inputtedpizzatoppings=$('#topping8').val();
        console.log(inputtedpizzatoppings)
    }
    else if($('#topping9:checked').val()){
      var inputtedpizzatoppings=$('#topping9').val();
        console.log(inputtedpizzatoppings)
    }
    else{
      console.log('error');
    }
    if($('#hide3:checked').val()){
      var inputtedpizzaquantity=$('select#hide3').val();
        console.log(inputtedpizzaquantity)
    }

    if($('#delivery1:checked').val()){
    var inputtedpizzadelivery=$('#delivery1').val();
        console.log(inputtedpizzadelivery)
    }
    if($('#delivery2:checked').val()){
      var inputtedpizzadelivery=$('#delivery2').val();
          console.log(inputtedpizzadelivery)
      }
    else{
      console.log('error');
    }
    
    var neworder=neworder(inputtedpizzasize,inputtedpizzacrust,inputtedpizzatoppings,inputtedpizzaquantity,inputtedpizzadelivery);
    if($('select#hide3').val()>1){
      console.log()
    }
    else{
      console.log('error')
    }
  });
  });
 $('ul#orderone').append("<li><span>" + neworder.allinfo() + "</span></li>"); 
$("#get-pizza").show();
$(".pizza-size").text(neworder.pizzaSize);
$(".pizza-crust").text(neworder.pizzaCrust);
$(".pizza-toppings").text(neworder.pizzaToppings);
$(".pizza-quantity").text(neworder.pizzaQuantinty);