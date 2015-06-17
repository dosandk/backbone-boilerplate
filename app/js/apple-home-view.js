var homeView = Backbone.View.extend({
    el: 'body',
    listEl: '.apples-list',
    cartEl: '.cart-box',
    template: _.template(App.templates.appleHomeTpl),
    initialize: function() {
        var self = this;
        console.error('homeView initialized');

        self.$el.html(self.template);
        self.collection.on('addToCart', self.showCart, self);
    },
    render: function() {
        var self = this;

        self.collection.each(function(apple){
            var appleSubView = new appleItemView({ model: apple });

            appleSubView.render();

            $(self.listEl).append(appleSubView.$el);
        });

        console.error('home view was rendered');
    },
    showCart: function(appleModel) {
        var self = this;

        console.error('showCart');
        console.log(arguments);

        $(self.cartEl).append(appleModel.get('name') + '<br/>');
    },
    test: function(massage) {
        var self = this;

        console.error(massage);
    }
});

var newHomeView = homeView.extend({

    initialize: function() {
        var self = this;

        self.render();
    },
    render: function() {
        var self = this;

        self.test('newHomeView is child of homeView');
    }
});
