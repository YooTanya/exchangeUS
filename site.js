$('body').on('click', '#calculate', function(e) {
  event.preventDefault();
  var val = $('#input').val();
  if(val > 0) {
    let ex = new exchangeUS();
    $('#result').text(ex.getResult(val));
  }else {
    $('#result').text('Please fill in the number');
  }
 
});

class dollarBill {
  var bill = new dollarBill();

  this.checkDollar = function(dollars){
    if(dollars > 0) {
      switch (dollars) {
        case dollars >= 100:
            bill.hundredBill(dollars);
            break;
        case dollars >= 50:
            bill.fiftyBill(dollars);
            break;
        case dollars >= 20:
            bill.twentyBill(dollars);
            break;
        case dollars >= 10:
            bill.tenBill(dollars);
            break;
        case dollars >= 5:
            bill.fiveBill(dollars);
            break;
        case dollars >= 1:
            bill.oneBill(dollars);
            break;
      }
    }
  }
  
  this.hundredBill = function(number){
    var quotient = Math.floor(number/100);
    result += quotient + "100 bill";
    bill.checkDollar(number - (temp*100));
  }
  this.fiftyBill = function(number){
    var quotient = Math.floor(number/50);
    result += quotient + "50 bill";
    bill.checkDollar(number - (quotient*50));
  }
  this.twentyBill = function(number){
    var quotient = Math.floor(number/20);
    result += quotient + "20 bill";
    bill.checkDollar(number - (quotient*20));
  }
  
  this.tenBill = function(number){
    var quotient = Math.floor(number/10);
    result += quotient + "10 bill";
    bill.checkDollar(number - (quotient*10));
  }
  
  this.fiveBill = function(number){
    var quotient = Math.floor(number/5);
    result += quotient + "5 bill";
    bill.checkDollar(number - (quotient*5));
  }
  
  this.oneBill = function(number){
    result += number + "1 bill";
  }
}

class centCoin {
  var coin = new centCoin();
  this.checkCent = function(cents){
    if(cents > 0) {
      switch (cents) {
        case cents >= 25:
            exchangeUS.quarter(cents);
            break;
        case cents >= 10:
            exchangeUS.dime(cents);
            break;
        case cents >= 5:
            exchangeUS.nickle(cents);
            break;
        case dollar >= 1:
            exchangeUS.penny(cents);
            break;
      }
    }
  }
  
  this.quarter = function(number){
    var quotient = Math.floor(number/25);
    result += quotient + "quarter";
    coin.checkCent(number - (quotient*25));
  }
  
  this.dime = function(number){
    var quotient = Math.floor(number/10);
    result += quotient + "dime";
    coin.checkCent(number - (quotient*10));
  }
  
  this.nickle = function(number){
    var quotient = Math.floor(number/5);
    result += quotient + "nickle";
    coin.checkCent(number - (quotient*5));
  }
  
  this.penny = function(number){
    result += number + "penny";
  }
}

class exchangeUS {
  var result = "Your change is "; 
  let bill = new dollarBill();
  let cent = new coinCent();
  this.getResult = function(val) {
    let splitVal = val.toString().split('.');
    result += bill.dollarBills(parseInt(splitVal[0])) + cent.centCoins(parseInt(splitVal[1]));
  }
}




