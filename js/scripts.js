//business Logic
function Order(size,crust,toppings,quantity,delivery){
  this.sizeofpizza = size;
  

  this.crustofpizza = crust;
  this.toppingsofpizza = toppings;
  this.quantityofpizza= quantity;
  this.deliveryofpizza = delivery;
}
Order.prototype.allInformation=function(){

  return this.sizeofpizza + this.crustofpizza + this.toppingsofpizza + this.quantityofpizza + this.deliveryofpizza;
  console.log(sizeofpizza);
}
//user interface Logic
$(document).ready(function(){
$('form#pizza').submit(function(event){
  event.preventDefault();

var inputtedsizeofpizza=$("#hide").val();
  // console.log(inputtedsizeofpizza)
  var inputtedcrustofpizza=$("#hide1").val();
  // console.log(inputtedcrustofpizza)

  var thechoosentoppings=[];
  $('input[type=checkbox]:checked').each(function () {
    thechoosentoppings.push($(this).val());
});

  // console.log(thechoosentoppings);
  var additiontoppings = 0;
for(var a=0; a<thechoosentoppings.length; a++){
  if(thechoosentoppings[a]==="pepperont"){
    additiontoppings += 500
    // console.log(additiontoppings)
  }
 else if (thechoosentoppings[a]==="mushrooms"){
   additiontoppings +=600
  //  console.log(additiontoppings)
 }
 else if (thechoosentoppings[a]==="onions"){
  additiontoppings +=500
  // console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="sausage"){
  additiontoppings +=1000
  // console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="bacons"){
  additiontoppings +=600
  // console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="extra-cheese"){
  additiontoppings +=1000
  // console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="black-olives"){
  additiontoppings +=800
  // console.log(additiontoppings)
}
else if (thechoosentoppings[a]==="green-peppers"){
  additiontoppings +=400
  // console.log(additiontoppings)
}else{
  additiontoppings +=300
  // console.log(additiontoppings)
}

}
// console.log(additiontoppings)
var inputtedquantityofpizza
var inputteddeliveryofpizza = $('#delivery').val()

if($('#hide3').val()){
      inputtedquantityofpizza=$('#hide3').val();
        // console.log(inputtedquantityofpizza)
    }
  if($('#hide3').val()){
        console.log()
      }
    var newOrder;
    var newOrder = new Order(inputtedsizeofpizza,inputtedcrustofpizza,additiontoppings,inputtedquantityofpizza,inputteddeliveryofpizza);
    // console.log(newOrder.allInformation())
    // console.log($('#delivery').val())
    $("#get-pizza").show();
    $(".pizza-size").text(newOrder.sizeofpizza);
    $(".pizza-crust").text(newOrder.crustofpizza);
    $(".pizza-toppings").text(newOrder.toppingsofpizza);
    $(".pizza-quantity").text(newOrder.quantityofpizza);
    
    var d=parseInt(newOrder.sizeofpizza);
    var r=parseInt(newOrder.crustofpizza);
    var e=parseInt(newOrder.toppingsofpizza);
    var total=d+r+e;
    $(".pizza-total").text(total);
   
    


  if($('#delivery').val() === "2000frw"){
     $(".pizza-delivery").text("the delivery charge " +$('#delivery').val());
  
    var seelocation=prompt("where is your lovation:");
    
    alert("will be delivered at " + seelocation  +  " the delivery charge 2000frw");
  }
    else{
       $(".pizza-delivery").text("you haven't requested any delivery option");
      }
      $(".pizza-total").text(val());
  });
});
 
