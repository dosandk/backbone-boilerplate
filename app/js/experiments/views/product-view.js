App.ProductView = function(productData) {
    var view = this;

    view.template = '';

    view.initialize = function() {
        view.getTemplate();
    };

    view.getTemplate = function() {
        $.ajax({
            url: './templates/product.tpl',
            method: 'GET',
            dataType: 'html'
        }).done(function(data) {
            view.template = _.template(data);

            view.render();
        });
    };

    view.render = function() {
        $('#products-view-port').append(view.template({
            name: productData.name,
            discountValue: productData.calculatedDiscount
        }));
    };

    view.initialize();
};