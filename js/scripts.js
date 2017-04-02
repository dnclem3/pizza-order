//Business logic
function Customer(name, crust, size) {
  this.name = name;
  this.crust = crust;
  this.size = size;
  this.toppings = [];
  this.bill = 0;
}

Customer.prototype.price = function() {
  if (this.crust = "regular") {
    this.bill+= 2;
  } else {
    this.bill+= 3;
  }

  if (this.size = "large") {
    this.bill+= 10;
  } else if (this.size = "medium") {
    this.bill+= 7;
  } else {
    this.bill+= 5;
  }

  this.bill+= this.toppings.length * 1.5;
}

Customer.prototype.printOrder = function() {
  var pizza = "<li>Crust Type: " + this.crust + "</li>";
  pizza+= "<li>Pizza Size: " + this.size + "</li>";
  pizza+= "<li>Toppings: ";
  this.toppings.forEach(function(topping) {
    pizza += topping + ", ";
  });
  pizza+= "</li>";
  $("#order").append(pizza);
}

Customer.prototype.totalBill = function() {
  $(".total").text(this.bill);
}

var createUser = function() {
  var name = $("#name").val();
  var crust = $("#crust").val();
  var size = $("#size").val();
  var user = new Customer(name, crust, size);
  var toppings = $("input:checkbox[name=toppings]:checked").each(function() {
    user.toppings.push($(this).val());
  });
  return user;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    $("#results").show();
    var customer = createUser();
    customer.price();
    customer.printOrder();
    customer.totalBill();
    $(".name").text(customer.name);
    event.preventDefault();
  });
});
