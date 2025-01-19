/* TRANSITION Component Manager/Factory :
   
*/

FACTORY.Register("Transition", function TransitionFactory() {
	var transition = function (config) {
		var self = this;

		self.msg = function(to, title, msg, duration) {
          var curform = $me.target();
          
          $f.load('loginmsg');
          $f.caption('loginmsg', 'msgtitle', title);
          $f.caption('loginmsg', 'msginfo', msg);
          $f.switch(curform, 'loginmsg', true, true);
          
          setTimeout(function() {
            $f.switch('loginmsg', to, true, true);
          }, duration);
		};
      
      	self.andCall = function(title, msg, duration, fn) {
          var curform = $me.target();
          
          $f.load('loginmsg');
          $f.caption('loginmsg', 'msgtitle', title);
          $f.caption('loginmsg', 'msginfo', msg);
          $f.switch(curform, 'loginmsg', true, true);
          
          setTimeout(function() {
            if (fn) fn();
          }, duration);
        };
	};

	transition.prototype.type = function () {
		return "Transition";
	};
	transition.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return transition;
});

