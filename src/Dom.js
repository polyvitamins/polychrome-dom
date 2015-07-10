define([
	'polyvitamins~polyscope@master', 
	'./Dom/extras/querySelector',
	'polyvitamins~polyscope@master/system/sings/sHTMLElement',
	'polyvitamins~polyscope@master/system/sings/sSelector',
	'polyvitamins~polyscope@master/system/sings/sQuery',
	'polyvitamins~polyscope@master/system/sings/sWindow'
	],function($, querySelector) {
		
	var Dom = $.registerClass('Dom', function() {


		
		this.selector=this.__subject__;

		/*
		Delete subject we dont need it anymore
		*/
		//this.__subject__ = false;

		/*
		Perform query
		*/
		
		var elements = querySelector.call(this, this.selector);

		/*
		Safari ведет себя очень странно, querySelectorAll возвращает функцию со свойствами, вместо массива, поэтому нам необходимо тестировать и на тип "function".
		*/
		if ( ("object"===typeof elements || "function"===typeof elements) && elements.length) {
			for (index=0;index<elements.length;index++) {
				this[index] = elements[index];
			}
		}

		/*
		Контекст по умолчанию
		*/
		this.length = elements.length;
		this.context = document;
		this.brahma = true;
	});

	Dom.assignTo('Selector');
	Dom.assignTo('HTMLElement');
	Dom.assignTo('Window');
	Dom.assignTo('Query');

	return Dom;
});