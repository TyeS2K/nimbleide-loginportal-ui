/* Validate Component Manager/Factory :
   
*/

FACTORY.Register("Validator", function ValidateFactory() {
	var Validate = function (config) {
		var self = this;

      	function highlight(ctrl, obj, key) {
          	var err = '', bclr = 'none', bsze = '0px';
          	if (obj && obj[key]) {
              err = obj[key]; bclr = 'red'; bsze = '1px';
            }
            $me.prop(ctrl, 'title', err);
          	$me.style(ctrl, {'border-color': bclr, 'border-width': bsze} );
        }
      
		self.login = function() {
          	var chk, constraint;

            constraint = {
              username: { 
                presence: { allowEmpty: false, message: 'is required.\n' }
              },
              password: { 
                presence: { allowEmpty: false, message: 'is required.\n' }
              }
            };

            chk = validate({
              username: $me.value('username'),
              password: $me.value('password')
            }, constraint);

            highlight('username', chk, 'username');
            highlight('password', chk, 'password');

          	$me[chk ? 'disable' : 'enable']('btnlogin');
        };
      	self.reset = function() {
          var chk, constraint;
          
          chk = validate({
            password: $me.value('password'),
            confirm: $me.value('confirm'),
            resetcode: $me.value('code')
          }, constraint);

          highlight('password', chk, 'password');
          highlight('confirm', chk, 'confirm');
          highlight('code', chk, 'resetcode');
          
          $me[chk ? 'disable' : 'enable']('btnupdate');
        };
     	self.forgot = function() {
          	var constraint = {
              user: {
                length: { minimum: 5, maximum: 32 },
                presence: { message: 'is required.\n' }
              },
              email: {
                length: { minimum: 10, maximum: 128 },
                email: true,
                presence: { message: 'is required.\n' } }
            };
          
          	var chk = validate({
              user: $me.value('user'),
              email: $me.value('email')
            }, constraint);
          
          	highlight('user', chk, 'user');
          	highlight('email', chk, 'email');
          
          	$me[chk ? 'disable' : 'enable']('btnreset');
        };
      	self.profile = function() {
          	var constraint = {
              login: {
                length: { minimum: 5, maximum: 32 },
                presence: { allowEmpty: false, message: 'is required.\n' }
              },
              email: {
                length: { minimum: 10, maximum: 128 },
                email: true,
                presence: { allowEmpty: false, message: 'is required.\n' }
              },
              firstname: {
                length: { maximum: 64 },
                presence: { allowEmpty: false, message: 'is required.\n' }
              },
              lastname: {
                length: { maximum: 128 },
                presence: { allowEmpty: false, message: 'is required.\n' }
              },
              dob: { presence: true },
              password: {
                length: { minimum: 6, maximum: 25 },
                presence: { allowEmpty: false, message: 'is required.\n' }
              }
            };
          
          	var chk = validate($me.pull(), constraint);
          
          	highlight('username', chk, 'username');
          	highlight('email', chk, 'email');
            highlight('firstname', chk, 'firstname');
          	highlight('lastname', chk, 'lastname');
          	highlight('dob', chk, 'dob');
          	highlight('password', chk, 'password');
          
          	$me[chk ? 'disable' : 'enable']('btnsave');
        };
      	self.register = function() {
			var constraint = {
              username: {
                length: { minimum: 5, maximum: 32 },
                presence: { allowEmpty: false, message: 'is required.\n' }
              },
              email: {
                length: { minimum: 10, maximum: 128 },
                email: true, 
                presence: { allowEmpty: false, message: 'is required.\n' }
              },
              password: {
                length: { minimum: 6, maximum: 25 },
                equality: {
                    attribute: "confirm",
                    message: "is not complex enough",
                    comparator: function(v1, v2) {
                      return JSON.stringify(v1) === JSON.stringify(v2);
                    }
                  }
              },
              confirm: {
                length: { minimum: 6, maximum: 25 },
                equality: "password"
              }
            };
          
          	// TODO: custom validation. Does email or username exist on 
          	// server. requires a REST call to check.
          	var chk = validate({ 
              username: $me.value('username'),
              email: $me.value('email'),
              password: $me.value('password'),
              confirm: $me.value('confirm'),
            }, constraint);
          
          	highlight('username', chk, 'username');
          	highlight('email', chk, 'email');
          	highlight('password', chk, 'password');
          	highlight('confirm', chk, 'confirm');
          
          	$me[chk ? 'disable' : 'enable']('btnregister');
        };
	};
  
	Validate.prototype.type = function () {
		return "Validator";
	};
	Validate.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return Validate;
});

