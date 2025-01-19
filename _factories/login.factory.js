/* Login Manager/Factory :
   
*/

FACTORY.Register("Login", function msgsFactory() {
	var login = function (config) {
		var self = this;
      	var $msg;
      	var $val = $fctry.new('Validator'),
      		$api = $fctry.new('LoginAPI');
      
      	self.init = function() {
          $api.domain(AppEvents._config.domain());
        };
      
      	self.appContext = function(app) {
          $api.context(app);
        };
        self.postLogout = function(cbk) {
          $api.postLogout(function() {
            $f.text('frmmain', 'login', 'Login/Register');
            $msg.showMsg({
              title: 'Leaving so soon?',
              head: 'Goodbye!',
              info: 'Thank you for visiting, and supporting this project.'
            });
            
            if (cbk) cbk();
          });
        };
		self.forgot = {
          maximize: function() {
          },
          cancel: {
            click: function(e, itm) {
              $api.hideChild('loginforgot');
            }
          },
          reset: {
            click: function(e, itm) {
              $api.postReset('loginforgot');
            }
          },
          user: {
            onchange: function(e, itm) {
              $val.forgot();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) $f.setfocus('loginforgot', 'email');
            }
          },
          email: {
            onchange: function(e, itm) {
              $val.forgot();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) $f.setfocus('loginforgot', 'user');
            }
          }
        };
      	self.license = {
          maximize: function() {
          },
          loadLicense: function() {
            $api.loadLicense();
          },
          agree: {
            click: function(e, itm) {
              $f.restore('loginlicense', function(anim) {
                if (anim.pos == 100) {
                  $f.unload('loginlicense');
                }
              });
            }
          },
          back: {
            click: function(e, itm) {
              $f.restore('loginlicense', function(anim) {
                if (anim.pos == 100) {
                  $f.unload('loginlicense');
                }
              });
            }
          }
        };
      	self.main = {
          init: function() {
            $api.initMethods();
          },
          maximize: function() {
            $f.full('loginmain');
          },
          cancel: {
            click: function(e, itm) {
              $api.hideChild('loginmain');
              $f.unload('loginmain');
            }
          },
          login: {
            click: function(e, itm) {
              $api.postLogin(null, function(resp) {
                if (resp) {
                  if (USER.acct && USER.acct.isAdmin) $f.show('frmmain', 'icnadd');
                }
              });
            }
          },
          register: {
            click: function(e, itm) {
              $api.showChild('loginregister', 'loginmain');
            }
          },
          forgot: {
            click: function(e, itm) {
              $api.showChild('loginforgot', 'loginmain');
            }
          },
          reset: {
            click: function(e, itm) {
              $api.showChild('loginreset', 'loginmain');
            }
          },
          username: {
            onchange: function(e, itm) {
              $val.login();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) $f.setfocus('loginmain', 'password');
            }
          },
          password: {
            onchange: function(e, itm) {
              $val.login();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) {
                $api.postLogin(null, function(resp) {
                  if (resp) {
                    if (USER.acct && USER.acct.isAdmin) $f.show('frmmain', 'icnadd');
                  }
                });
              }
            }
          }
        };
      	self.msg = {
          maximize: function() {
          },
          cancel: {
            click: function(e, itm) {
              $msg.hideMsg();
            }
          },
          ok: {
            click: function(e, itm) {
              $msg.hideMsg();
            }
          }
        };
      	self.confirm = {
          maximize: function() {
          },
          cancel: {
            click: function(e, itm) {
              $msg.hideConfirm('no');
            }
          },
          yes: {
            click: function(e, itm) {
              $msg.hideConfirm('yes');
            }
          },
          no: {
            click: function(e, itm) {
              $msg.hideConfirm('no');
            }
          }
        };
      	self.policy = {
          maximize: function() {
          },
          loadPrivacy: function() {
            $api.loadPrivacy();
          },
          agree: {
            click: function(e, itm) {
              $f.restore('loginpolicy', function(anim) {
                if (anim.pos == 100) {
                  $f.unload('loginpolicy');
                }
              });
            }
          },
          back: {
            click: function(e, itm) {
              $f.restore('loginpolicy', function(anim) {
                if (anim.pos == 100) {
                  $f.unload('loginpolicy');
                }
              });
            }
          }
        };
      	self.register = {
          maximize: function() {
          },
          cancel: {
            click: function(e, itm) {
              $api.hideChild('loginregister');
            }
          },
          register: {
            click: function(e, itm) {
              $api.postRegister();
            }
          },
          license: {
            click: function(e, itm) {
              $msg.showPolicy({title: '', msg: ''});
            }
          },
          username: {
            onchange: function(e, itm) {
              $val.register();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) $f.setfocus('loginregister', 'email');
            }
          },
          email: {
            onchange: function(e, itm) {
              $val.register();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) $f.setfocus('loginregister', 'password');
            }
          },
          password: {
            onchange: function(e, itm) {
              $val.register();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) $f.setfocus('loginregister', 'confirm');
            }
          },
          confirm: {
            onchange: function(e, itm) {
              $val.register();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) $f.setfocus('loginregister', 'username');
            }
          }
        };
      	self.reset = {
          maximize: function() {
          },
          cancel: {
            click: function(e, itm) {
              $api.hideChild('loginreset');
            }
          },
          update: {
            click: function(e, itm) {
              $api.postReset();
            }
          },
          password: {
            onchange: function(e, itm) {
              $val.reset();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) $f.setfocus('loginreset', 'confirm');
            }
          },
          confirm: {
            onchange: function(e, itm) {
              $val.reset();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) $f.setfocus('loginreset', 'code');
            }
          },
          code: {
            onchange: function(e, itm) {
              $val.reset();
            },
            keyup: function(e, itm) {
              if ([13].indexOf(e.which) > -1) $f.setfocus('loginreset', 'password');
            }
          }
        };
      	self.thankyou = {
          maximize: function() {
          },
          agree: {
            click: function(e, itm) {
              $f.unload('loginthankyou');
            }
          }
        };
      
        self.onload = function(main) {
      	  $msg = main._shared.$msg;
        };
	};
	
    login.prototype.type = function () {
		return "login";
	};
	login.prototype.toDto = function () {
		var self = this;
		return { };
	};
	return login;
});

