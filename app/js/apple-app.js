require(
    [
        'apple-item.tpl', //можно исопльзовать shim-плагин
        'apple-home.tpl',
        'apple-spinner.tpl',
        'apple.tpl',
        'apple-item.view',
        'apple-home.view',
        'apple.view',
        'apples'
    ],
    function(appleItemTpl, appleHomeTpl, appleSpinnerTpl, appleTpl, appelItemView, homeView, appleView, Apples) {
        var appleData = [
            {
                name: "fuji",
                url: "img/fuji.jpg"
            },
            {
                name: "gala",
                url: "img/gala.jpg"
            },
            {
                name: "melba",
                url: "img/gala.jpg"
            },
            {
                name: "mantet",
                url: "img/mantet.jpg"
            }
        ];

        var app;
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
                self.newHomeView = new newHomeView();
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

        $(document).ready(function(){
            app = new router;
            Backbone.history.start();
        });

    }
);






