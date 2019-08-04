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

  //  if($('#topping1').val()){
  //     var inputtedtoppingsofpizza=$('#topping1').val() + " " + "price=500frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
  //   else if($('#topping2').val()){
  //     var iinputtedtoppingsofpizza=$('#topping2').val() + " " + "price=600frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
  //   else if($('#topping3').val()){
  //     var inputtedtoppingsofpizza=$('#topping3').val() + " " + "price=700frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
  //   else if($('#topping4').val()){
  //     var inputtedtoppingsofpizza=$('#topping4').val() + " " + "price=800frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
  //   else if($('#topping3').val()){
  //     var inputtedtoppingsofpizza=$('#topping3').val() + " " + "price=900frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
  //   else if($('#topping4').val()){
  //     var inputtedtoppingsofpizza=$('#topping4').val() + " " + "price=1000frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
  //   else if($('#topping5').val()){
  //       var inputtedtoppingsofpizza=$('#topping5').val() + " " + "price=1100frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
   
  //   else if($('#topping6').val()){
  //     var inputtedtoppingsofpizza=$('#topping6').val() + " " + "price=1200frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
  //   else if($('#topping7').val()){
  //     var inputtedtoppingsofpizza=$('#topping7').val() + " " + "p
    rice=1300frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
  //   else if($('#topping8').val()){
  //     var inputtedtoppingsofpizza=$('#topping8').val() + " " + "price=1400frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
  //   else if($('#topping9').val()){
  //     var inputtedtoppingsofpizza=$('#topping9').val() + " " + "price=1500frw";
  //       console.log(inputtedtoppingsofpizza)
  //   }
  var thechoosentoppings=[];
 
//   $('input[type=checkbox]').each(function () {
//     if (this.checked) checkArray.push(this.id)
// });
  // $.each($("input[type=checkbox]:checked",function(){
  //   thechoosentoppings.push($(this).val());
  // }));
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
else if (thechoosentoppings[a]==="extra-che
    
  additiontoppings +=1000
  console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="black-oli
    
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
toppings(thechoosentoppings)
if($('#hide3').val()){
      var inputtedquantityofpizza=$('#hide3').val();
        console.log(inputtedquantityofpizza)
    }

    if($('#delivery1').val()){
    var inputteddeliveryofpizza=$('#delivery1').val() + " " + "delivery charged=2000frw";
        console.log(inputteddeliveryofpizza)
    }
    if($('#delivery2').val()){
      var inputteddeliveryofpizza=$('#delivery2').val();
          console.log(inputteddeliveryofpizza)
      }
      if($('#hide3').val()){
        console.log()
      }
    var newOrder = new Order(inputtedsizeofpizza,inputtedcrustofpizza,additiontoppings,inputtedquantityofpizza,inputteddeliveryofpizza);
    console.log(newOrder)
    console.log(thechoosentoppings)
    $('ul#orderone').append("<li><span>" + newOrder.allInformation() +"</span></li>");
    $(".contact1").last().click(function(){
    $("#get-pizza").show();
    $(".pizza-size").text(newOrder.sizeofpizza);
    $(".pizza-crust").text(newOrder.crustofpizza);
 
    $(".pizza-toppings").text(newOrder.toppingsofpizza + 'frw');
    $(".pizza-quantity").text(newOrder.quantintyofpizza);
    $(".pizza-delivery").text(newOrder.deliveryofpizza);
  });
  });
});
 
