var appleView = Backbone.View.extend({
    template: _.template(App.templates.appleTpl),
    templateSpinner: App.templates.appleSpinnerTpl,
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
            self.model.set(self.collection.where({ name: appleName })[0].toJSON())
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