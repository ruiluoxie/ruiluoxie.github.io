/**
 * Created by xieruiluo on 15/5/1.
 */
$(function() {
	var index = new Index();
	index.onLoad();
});

var Index = function() {
	this.onLoad = function() {
		this.setSize();
		this.windowResize();
	};
	this.windowResize = function() {
		var timer = undefined,
			self = this;
		$(window).on('resize.index', function() {
			timer && clearTimeout(timer);
			timer = setTimeout(function() {
				self.setSize();
			}, 50);
		});
	};
	this.setSize = function() {
		var fullHeight = document.documentElement.clientHeight,
			fullWidth = document.documentElement.clientWidth,
			contentHeight = fullHeight - 120,
			$content = $('.main-content');
		$content.css({
			height:contentHeight,
			width: fullWidth,
			'font-size': fullWidth/4
		});

	};

};