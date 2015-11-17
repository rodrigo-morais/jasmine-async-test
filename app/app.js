var app = (function() {
      var _products = [];
      
      var _renderData = function(_prods) {
        _products = _prods;    
      };
      
	var _getData = function() {
            $.ajax({
                  dataType: 'json',
                  url: 'app/products.json'
            })
            .done(function(data) {
                  _renderData(data);
            })
            .fail(function(xhr) {
                  console.log('error');
            });
	};
      
      var _getProducts = function() {
            return _products;
      };
	
	return {
		getData: _getData,
            getProducts: _getProducts
	}
})();