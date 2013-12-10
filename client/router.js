Router.map(function() {
	this.route('home', {
		path: '/', // match the root path
		template: 'home'
	});
	this.route('news', {
		path: '/news',
		template: 'news'
	});
	this.route('posts', {
		path: '/posts',
		template: 'posts'
	});
});