;(function() {
    App.templates.appleItemTpl = '<a href="#apples/<%=name%>" target="_blank"><%=name%></a>&nbsp;<a class="add-to-cart" href="#">buy</a>';
}());

define(function() {
	return '<a href="#apples/<%=name%>" target="_blank"><%=name%></a>&nbsp;<a class="add-to-cart" href="#">buy</a>';
});