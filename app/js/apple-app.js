var router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'apples/:appleName': 'loadApple'
    },
    initialize: function() {
        var self = this;
        console.error('router was initialized');

        var apples = new Apples();
        apples.reset(appleData);

        self.homeView = new homeView({collection: apples});
        self.appleView = new appleView({collection: apples});
    },
    loadApple: function(appleName) {
        var self = this;

        //self.appleView.render(appleName);
        self.appleView.loadApple(appleName);
    },
    home: function() {
        var self = this;

        console.error('router home');

        self.homeView.render();
    }
});