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