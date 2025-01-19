/* Events Component Manager/Factory :
   
*/

FACTORY.Register("Events", function EventsFactory() {
	var Events = function (config) {
		var self = this;
     	var $search;
      
      	self._config = $fctry.new('Config');
      	self._shared = {
          $msg: $fctry.new('MsgManager')
        };
      	self.login = $fctry.new('Login');
      
      	self.startSession = function(sessid) {
          var $api = $fctry.new('Resources');
          
		  // Login Complete.
          // - Current sessionID passed as sessid. 
          // - Current User Details located on USER.acct.
          AppEvents.login.appContext('myApp');
          if ($f.isvisible('loginmain')) {
            $f.unload('loginmain');
          }
        };
		self.main = {
          startup: function(e, itm) {
            $f.load('frmmain');
            $f.full('frmmain');
          },
          body: {
            click: function(e, item) {
              alert('Click content!');
            }
          }
		};

        for (var mod in self) {
          if (self[mod].onload) { self[mod].onload(self); }
        }
	};
	

  	Events.prototype.type = function () {
		return "Events";
	};
	Events.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return Events;
});

