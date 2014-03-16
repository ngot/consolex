var c = require('./node_modules/console-colour/index.js').color;

for (var k in c) {
	if (!({}).hasOwnProperty.call(console, k)) {
		console[k] = (function () {
			var func = c[k];
			return function (v) {
				this.log.call(this, func.call(c, v));
			}
		})();
	}
}