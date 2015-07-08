define(['./../Dom'], function(Dom) {
	Dom.extend({
		condition: function(condit, onTrue, onFalse) {
			if (condit) {
				if (typeof onTrue == 'function') return onTrue.call(this, condit);
				return this;
			} else {
				if (typeof onFalse == 'function') return onFalse.call(this);
				return this;
			};
		}
	});
});