var Quote = function(quoteData) {
  this.quoteData = m.prop(quoteData);
};

Quote.getData = function() {
  return this.quoteData();
};

Quote.submitQuote = function() {};

Quote.validateQuoteData = function() {};