define(['$//$', './../Dom', './data', '$//classes/Objective/charge','$//classes/Events'], function($, Dom) {
	$(document).data('stock', $({
		ready: false
	}).charge('Events'));

	

	(function (win, fn) {
	    var done = false, top = true,
  
	    doc = win.document, root = doc.documentElement,
	  
	    add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
	    rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
	    pre = doc.addEventListener ? '' : 'on',
	  
	    init = function(e) {
	          if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
	          (e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);
	          if (!done && (done = true)) fn.call(win, e.type || e);
	    },
	  
	    poll = function() {
	          try { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
	          init('poll');
	    };
	  
	    if (doc.readyState == 'complete') fn.call(win, 'lazy');
	    else {
	          if (doc.createEventObject && root.doScroll) {
	              try { top = !win.frameElement; } catch(e) { }
	              if (top) poll();
	          }
	          doc[add](pre + 'DOMContentLoaded', init, false);
	          doc[add](pre + 'readystatechange', init, false);
	          win[add](pre + 'load', init, false);
	    } 
		  
	})(window, function() {

		$(document).data('stock').ready = true;
		$(document).data('stock').trigger('DOMReady');
	});

	Dom.extend({
		ready: function(callback) {
			var self = this;
			if (this[0]===window||this[0]===document) {
				if ($(document).data('stock').ready) callback.apply(this);
				else $(document).data('stock').bind('DOMReady', function() {
					callback.apply(self);
				});
			}
		}
	});
});