var homeView = Backbone.View.extend({
    el: 'body',
    template: _.template('Apple data: <%= data %>'),
    render: function() {
        var self = this;

        self.$el.html(this.template({
            data: JSON.stringify(self.collection.models)
        }));

        console.error('home view was rendered');
    }
});

var appleView = Backbone.View.extend({
    template: _.template('<figure><img src="<%= attributes.url %>"/><figcaption><%= attributes.name %></figcaption></figure>'),
    render: function (appleName) {
        var appleModel = this.collection.where({
            name: appleName
        })[0];

        var appleHtml = this.template(appleModel);

        $('body').html(appleHtml);
    }
});