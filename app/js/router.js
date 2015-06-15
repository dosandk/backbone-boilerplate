var router = Backbone.Router.extend({
    routes: {
        '': 'home'
    },
    home: function(){
        var self = this;

        console.error('router home');

        self.homeView = new homeView;
        self.homeView.render();
    }
});