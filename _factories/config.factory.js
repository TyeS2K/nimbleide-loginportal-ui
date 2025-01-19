/* BLANK Component Manager/Factory :
   
*/

FACTORY.Register("Config", function blankFactory() {
	var config = function (config) {
		var self = this;
		var _state = 'local';
        var _ip = '';
      
		self.server = function() {
          return (_state == 'local') ? 'http://' + _ip + '/<service>' : 'https://www.nimble-ide.com/<service>';
		};
      	self.domain = function() {
          return (_state == 'local') ? 'http://' + _ip : 'https://www.nimble-ide.com';
		};
	};
	config.prototype.type = function () {
		return "config";
	};
	config.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return config;
});

