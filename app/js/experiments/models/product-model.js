App.ProductModel = function(data) {
    var model = this;

    var productDefaults = {
        name: '',
        price: 0,
        discount: 0
    };

    var productData = $.extend(productDefaults, data);

    model.getDiscount = function() {
        productData.calculatedDiscount = productData.price * productData.discount / 100;
    };

    model.initialize = function() {
        model.getDiscount();
    };

    model.initialize();

    return productData;
};