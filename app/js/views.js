var homeView = Backbone.View.extend({
    el: 'body',
    listEl: '.apples-list',
    cartEl: '.cart-box',
    template: _.template('Apple data: <ul class="apples-list"></ul><div class="cart-box"></div>'),
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

        $(self.cartEl).append(appleModel.attributes.name + '<br/>');
    }
});

var appleItemView = Backbone.View.extend({
    tagName: 'li',
    template: _.template('<a href="#apples/<%=name%>" target="_blank"><%=name%></a>&nbsp;<a class="add-to-cart" href="#">buy</a>'),
    events: {
        'click .add-to-cart': 'addToCart'
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
    },
    addToCart: function() {
        this.model.collection.trigger('addToCart', this.model, 'riba');
    }
});

var appleView = Backbone.View.extend({
    template: _.template('<figure><img src="<%= attributes.url %>"/><figcaption><%= attributes.name %></figcaption></figure>'),
    templateSpinner: '<img src="img/spinner.gif" width="30"/>',
    initialize: function() {
        var self = this;

        self.model = new (Backbone.Model.extend({}));
        self.model.on('change', self.render, self);
        self.on('spinner', self.showSpinner, self);
    },
    loadApple: function(appleName) {
        var self = this;

        self.trigger('spinner');

        setTimeout(function() {
            self.model.set(self.collection.where({ name: appleName })[0].attributes)
        }, 1000);
    },
    showSpinner: function() {
        var self = this;

        $('body').html(self.templateSpinner);
    },
    render: function () {
        var self = this,
            appleHtml = self.template(self.model);

        $('body').html(appleHtml);
    }
});