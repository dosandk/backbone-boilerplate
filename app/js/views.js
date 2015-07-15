var homeView = Backbone.View.extend({
    el: 'body',
    template: _.template('Hello Heroku'),
    render: function(){
        var self = this;

        this.$el.html(this.template({}));

        console.error('home view was rendered');
    }
});