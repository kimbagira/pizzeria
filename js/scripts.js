//business Logic
function Order(size,crust,toppings,quantity,delivery){
  this.sizeofpizza = size;
  this.crustofpizza = crust;
  this.toppingsofpizza = toppings;
  this.quantityofpizza= quantity;
  this.deliveryofpizza = delivery;
}
Order.prototype.allInformation=function(){
  return this.sizeofpizza + "," + this.crustofpizza + "," + this.toppingsofpizza + "," + this.quantityofpizza + "," + this.deliveryofpizza;
}

//user interface Logic
$(document).ready(function(){
$('form#pizza').submit(function(event){
  event.preventDefault();
    var newOrder;
    if($('#size1').val()){
    var inputtedsizeofpizza=$('#size1').val() + " " + "price=1000frw";
      console.log(inputtedsizeofpizza)
    }
    else if($('#size2').val()){
      var inputtedsizeofpizza=$('#size2').val() + " " + "price=7000frw" ;
      console.log(inputtedsizeofpizza)
    }

  else if($('#size3').val()){
      var inputtedsizeofpizza=$('#size3').val() + " " + "price=20000frw";
      console.log(inputtedsizeofpizza)
    }

    if($('#crust1').val()){
      var inputtedcrustofpizza=$('#crust1').val()  + " " + "price=7000frw";
        console.log(inputtedcrustofpizza)
      }
    else if($('#crust2').val()){
      var inputtedcrustofpizza=$('#crust2').val() + " " + "price=8000frw";
      console.log(inputtedcrustofpizza)
    }

  else if($('#crust3').val()){
      var inputtedcrustofpizza=$('#crust3').val() + " " + "price=9000frw";
      console.log(inputtedcrustofpizza)
    }
  var thechoosentoppings=[];
  $('input[type=checkbox]:checked').each(function () {
    thechoosentoppings.push($(this).val());
});

  console.log(thechoosentoppings);
  var additiontoppings = 0;
  function toppings(thechoosentoppings){
for(var a=0; a<thechoosentoppings.length; a++){
  if(thechoosentoppings[a]==="pepperont"){
    additiontoppings += 500
    console.log(additiontoppings)
  }
 else if (thechoosentoppings[a]==="mushrooms"){
   additiontoppings +=600
   console.log(additiontoppings)
 }
 else if (thechoosentoppings[a]==="onions"){
  additiontoppings +=500
  console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="sausage"){
  additiontoppings +=1000
  console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="bacons"){
  additiontoppings +=600
  console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="extra-cheese"){
  additiontoppings +=1000
  console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="black-olives"){
  additiontoppings +=800
  console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="green-peppers"){
  additiontoppings +=400
  console.log(additiontoppings)
}else{
  additiontoppings +=300
  console.log(additiontoppings)
}

}
console.log(additiontoppings)
return additiontoppings;
}
var inputtedquantityofpizza
var inputteddeliveryofpizza = $('#delivery').val()
toppings(thechoosentoppings)
if($('#hide3').val()){
      inputtedquantityofpizza=$('#hide3').val();
        console.log(inputtedquantityofpizza)
    }

    
      if($('#hide3').val()){
        console.log()
      }
    var newOrder = new Order(inputtedsizeofpizza,inputtedcrustofpizza,additiontoppings,inputtedquantityofpizza,inputteddeliveryofpizza);
    console.log(newOrder)
    console.log($('#delivery').val())
    $("#get-pizza").show();
    $(".pizza-size").text(newOrder.sizeofpizza);
    $(".pizza-crust").text(newOrder.crustofpizza);
 
    $(".pizza-toppings").text(newOrder.toppingsofpizza + 'frw');
    $(".pizza-quantity").text(newOrder.quantityofpizza);
   if($('#delivery').val() === "2000"){
     $(".pizza-delivery").text("The delivery is cost" +$('#delivery').val());
    }
    else{
       $(".pizza-delivery").text("you haven't requested any delivery option");
      }
  });
});
 
