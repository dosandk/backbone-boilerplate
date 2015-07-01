App.ProductCollection = function(productsData) {
    var collection = this;

    collection.model = {};
    collection.view = {};

    collection.initialize = function() {
        collection.model = App.ProductModel;
        collection.view = App.ProductView;
    };

    collection.add = function(productsData) {
        $.each(productsData, function(key, value) {
            new collection.view(new collection.model(value));
        });
    };

    collection.initialize();

    return collection;
};