var homeView = Backbone.View.extend({
    el: 'body',
    template: _.template('Hello World'),
    render: function(){
        var self = this;

        this.$el.html(this.template({}));

        console.error('home view was rendered');
    }
});