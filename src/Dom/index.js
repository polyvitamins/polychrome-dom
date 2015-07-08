define(['./../Dom','./find','./parent','polyvitamins~polyscope-eacher@master/each'], function(Dom) {
	Dom.extend({
		/*
		Возвращает порядковый номер элемента
		*/
		index: function() {
			var isource = $(this)[0],i=null,ic=0;
			$(this).parent().find('>*').each(function() { 
				if (isource===this) { i=ic; return false; }
					ic++;
			});
			return i;
		}
	});
});