define(['templates/apple-item.tpl'],function(appleItemTpl) {
    return Backbone.View.extend({
        tagName: 'li',
        template: _.template(appleItemTpl),
        events: {
            'click .add-to-cart': 'addToCart'
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        },
        addToCart: function() {
            this.model.collection.trigger('addToCart', this.model, 'riba');
        }
    });
});