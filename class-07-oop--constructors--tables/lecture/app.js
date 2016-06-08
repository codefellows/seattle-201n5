var shoes = {
  name: 'shoes',
  price: 49.99,
  tax: 4.75,
  total: 54.74
};

var socks = {
  name: 'socks',
  price: 8.99,
  tax: 0,
  total: 0,

  calcTax: function() {
    this.tax = this.price * 0.095;
  },

  calcTotal: function() {
    return this.total = this.price + this.tax;
  }
};
