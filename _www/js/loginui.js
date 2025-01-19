/**
 * Generated with nimble-ide v5.1 on 01/18/2025 07:51 pm.
 * Created for the nimbleJS runtime.
 * (c)2016 by Nimble Solutions, All rights reserved.
 *
 * version: 5.0
 **/
 
if (!$heap) { var $heap = { }; }
$heap.loginui = { };
$heap.loginui.Code = {
	_callback: null,
	SlideDesktop: function(oldD, newD) {
		var desk = $f.elem('desktop' + newD + '.body');
		if (!desk) return;
		
		function fadeIn() {
		    if (desk.style.opacity < 1) {
		        desk.style.opacity = (Number(desk.style.opacity) + 0.1).toFixed(2);
		        setTimeout( fadeIn, 60 );
		    } else { 
		        desk.style.opacity = 1;
		        $d.setactive(newD);
		        DESKTOP.switching = false;
		    }
		}
		
		DESKTOP.switching = true;
		desk.style.opacity = 0;
		$d.show('desktop'+ newD +'.body');
		$f.setpos('desktop' + newD + '.body', '', 0, 0);
		$f.slideto('desktop' + oldD + '.body', '', 100, 0, -1, -1, 0.25, function(anim) {
			if (anim.pos == 100) {
				$f.slideto('desktop' + oldD + '.body', '', -(1.35 * DESKTOP.width), 0, -1, -1, 0.50, function(anim) {
					if (anim.pos == 100) {
						fadeIn();
					}
				});
			}
		});
	},
	Ini: { 
	 },
	Csv: { 
	 },
	Data: { 
		"black.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>black<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>b50<DQ>: <DQ>#fafafa<DQ>, <CR>' + 
			'		<DQ>b100<DQ>: <DQ>#f5f5f5<DQ>, <CR>' + 
			'		<DQ>b200<DQ>: <DQ>#eeeeee<DQ>, <CR>' + 
			'		<DQ>b300<DQ>: <DQ>#e0e0e0<DQ>, <CR>' + 
			'		<DQ>b400<DQ>: <DQ>#bdbdbd<DQ>, <CR>' + 
			'		<DQ>b500<DQ>: <DQ>#9e9e9e<DQ>, <CR>' + 
			'		<DQ>b600<DQ>: <DQ>#757575<DQ>, <CR>' + 
			'		<DQ>b700<DQ>: <DQ>#616161<DQ>, <CR>' + 
			'		<DQ>b800<DQ>: <DQ>#424242<DQ>, <CR>' + 
			'		<DQ>b900<DQ>: <DQ>#212121<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"bluegray.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>bluegray<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>bg50<DQ>: <DQ>#eceff1<DQ>, <CR>' + 
			'		<DQ>bg100<DQ>: <DQ>#cfd8dc<DQ>, <CR>' + 
			'		<DQ>bg200<DQ>: <DQ>#b0bec5<DQ>, <CR>' + 
			'		<DQ>bg300<DQ>: <DQ>#90a4ae<DQ>, <CR>' + 
			'		<DQ>bg400<DQ>: <DQ>#78909c<DQ>, <CR>' + 
			'		<DQ>bg500<DQ>: <DQ>#607d8b<DQ>, <CR>' + 
			'		<DQ>bg600<DQ>: <DQ>#546e7a<DQ>, <CR>' + 
			'		<DQ>bg700<DQ>: <DQ>#455a64<DQ>, <CR>' + 
			'		<DQ>bg800<DQ>: <DQ>#37474f<DQ>, <CR>' + 
			'		<DQ>bg900<DQ>: <DQ>#263238<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"brown.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>brown<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>br50<DQ>: <DQ>#efebe9<DQ>, <CR>' + 
			'		<DQ>br100<DQ>: <DQ>#d7ccc8<DQ>, <CR>' + 
			'		<DQ>br200<DQ>: <DQ>#bcaaa4<DQ>, <CR>' + 
			'		<DQ>br300<DQ>: <DQ>#a1887f<DQ>, <CR>' + 
			'		<DQ>br400<DQ>: <DQ>#8d6e63<DQ>, <CR>' + 
			'		<DQ>br500<DQ>: <DQ>#795548<DQ>, <CR>' + 
			'		<DQ>br600<DQ>: <DQ>#6d4c41<DQ>, <CR>' + 
			'		<DQ>br700<DQ>: <DQ>#5d4037<DQ>, <CR>' + 
			'		<DQ>br800<DQ>: <DQ>#4e342e<DQ>, <CR>' + 
			'		<DQ>br900<DQ>: <DQ>#3e2723<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		},
		"palette.json": {
			'data' : '{<CR>' + 
			'	<DQ>name<DQ>: <DQ>light blue<DQ>,<CR>' + 
			'	<DQ>jsonType<DQ>: <DQ>palette<DQ>,<CR>' + 
			'	<DQ>data<DQ>: {<CR>' + 
			'		<DQ>color50<DQ>: <DQ>#e1f5fe<DQ>, <CR>' + 
			'		<DQ>color100<DQ>: <DQ>#b3e5fc<DQ>, <CR>' + 
			'		<DQ>color200<DQ>: <DQ>#81d4fa<DQ>, <CR>' + 
			'		<DQ>color300<DQ>: <DQ>#4fc3f7<DQ>, <CR>' + 
			'		<DQ>color400<DQ>: <DQ>#29b6f6<DQ>, <CR>' + 
			'		<DQ>color500<DQ>: <DQ>#03a9f4<DQ>, <CR>' + 
			'		<DQ>color600<DQ>: <DQ>#039be5<DQ>, <CR>' + 
			'		<DQ>color700<DQ>: <DQ>#0288d1<DQ>, <CR>' + 
			'		<DQ>color800<DQ>: <DQ>#0277bd<DQ>, <CR>' + 
			'		<DQ>color900<DQ>: <DQ>#01579b<DQ>, <CR>' + 
			'		<DQ>colora100<DQ>: <DQ>#80d8ff<DQ>, <CR>' + 
			'		<DQ>colora200<DQ>: <DQ>#40c4ff<DQ>, <CR>' + 
			'		<DQ>colora400<DQ>: <DQ>#00b0ff<DQ>, <CR>' + 
			'		<DQ>colora700<DQ>: <DQ>#0091ea<DQ><CR>' + 
			'	}<CR>' + 
			'}<CR>' + 
			''
		}
	 },
	Lists: { 
	 },
	i18n: { 
	 },
	Vars: { },
	
	Services: function(in_msg) {
			/**
		* Build a router to parse messages coming to
		* this applications PostBox.
		*
		* version: 5.0
		**/
		switch (in_msg.msg) {
			case 'ping':
				alert("loginui received ping sent from: " + in_msg.from);
				break;
				
			default:
		}
		
	},
	 Components: {
	
	
	},
	 RegisterFactories: function() {
	
		
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
		
		/* Login Manager Component Manager/Factory :
		   
		*/
		FACTORY.Register("LoginAPI", function loginFactory() {
			var login = function (config) {
				var self = this;
		      	var _sv, _dlg, _app = '';
		      	var server = '<server>';
		      	var $msg = $fctry.new('MsgManager');
		      
		      	var _prev = [];
		      	self.context = function(app) {
		          if (url) {
		            _app = app;
		          } else {
		            return _app;
		          }
		        };
		      	self.domain = function(url) {
		          if (url) {
		            server = url;
		          } else {
		            return server;
		          }
		        };
				self.initMethods = function(dlg) {
		          _dlg = dlg;
		          var url = window.location.href, uiReady = false; 
		 
		          $f.setfocus(_dlg, 'login');
				};
		      
				self.addListener = function() {
				};
		       	self.postLogin = function(dlg, cbk) {
		 
		        };
		        self.postLogout = function(cbk) {
		        };
		      
		      	self.postRegister = function(dlg) {
		        };
		      	self.postForgot = function(dlg) {
		        };
		      	self.postReset = function(dlg) {
		        };
		      
		      	// User License Agreement
		      	self.postLicense = function(dlg) {
		        };
		      	self.loadLicense = function() {
		        };
		      
		      	self.showError = function(title, info) {
		          $f.load('loginmsg');
		          $f.settext('loginmsg', 'infotitle', title);
		          $f.settext('loginmsg', 'info', info);
		          $f.max('loginmsg', function(anim) {
		          	if (anim.pos == 100) {
		              $f.show('loginmsg');
		            }
		          });
		          
		        };
		      	self.showing = false;
		      	self.showChild = function(dlg, prev) {
		          _prev.push(prev);
		          self.showing = true;
		          $f.load(dlg);
		          $f.max(dlg, function(anim) {
		            if (anim.pos == 100) {
		              $f.show(dlg);
		              $f.full(dlg);
		              if (prev) $f.hide(prev);
		              self.showing = false;
		            }
		          });
		        };
		        self.hideChild = function(dlg, blUnload) {
		          var _prvname;
		          
		          $f[blUnload ? 'unload' : 'hide'](dlg);
		          if (_prev.length > 0) _prvname = _prev.pop();
		          $f.show(_prvname);
		        };
		      	self.setFullScreen = function(dlg) {
		          _prev.push(dlg);
		          $f.load(dlg);
		          $f.show(dlg);
		          $f.full(dlg);
		        };
		      
		      	self.loadPrivacy = function() {
		          var query = App.App.query;
		          if (!$login.showing) $f.show('loginpolicy');
		          if (query.info) {
		              $me.disable('btnagree');
		              $me.hide('icnback');
		              if (query.back) $me.show('icnback');
		              $me.enable('btnagree');
		          }
		        };
		      
		        self.onload = function(main) {
		          
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
		
		/* Me Component Manager/Factory :
		   Updated: 12/16/2023
		*/
		FACTORY.Register("Me", function MeObjFactory() {
			var MeInst = function (config) {
				var self = this;
		        var obj = config.resolveName(), _form = obj.InstForm, _ctrl = obj.Control;
		      	var doc = document;
		      
		      	function resolveName(fn, ctrl) {
		          return {dlg: _form, ctrl: ($nim.undef(ctrl) ? _ctrl : ctrl)};
		        }
		      	
		      	self.target = function(id) {
		          var obj;
		          
		          if (!id) {
		            return _form;
		          } else { 
		            obj = id.resolveName();
		            _form = obj.InstForm;
		            _ctrl = obj.Control;
		            
		            self._elem = doc.getElementById(id);
		          }
		        };
				self.name = function() {
		          return obj.Form;
		        };
		      	self.instName = function() {
		          return obj.InstForm;
		        };
		      	// PicClip, Tab, Class, Menu & List Control custom methods.
		      	// Parameter Format: (dlg, ctrl, p1, p2, p3, p4, p5, p6)
		      	// NOTE: Most methods only use p1 - p3.
		      	["picclip.setrows", "picclip.getrows", "picclip.setcols", "picclip.getcols", "picclip.setgraphiccell", 
		         "picclip.getgraphiccell", "picclip.getcellcount", "picclip.resetcellsize", "picclip.setcellsize",
		         "picclip.getcellsize", "picclip.getcellwidth", "picclip.getcellheight",
		        
		         "list.item", "list.addlist", "list.addchild", "list.add", "list.insert", "list.remove", "list.removeselected", 
		         "list.clear", "list.clearnode", "list.listindex", "list.listcount", "list.selectvalue", "list.selectcaption", 
		         "list.selectindex", "list.selectcheck", "list.gettext", "list.settext", "list.getvalue", "list.getitemdata", 
		         "list.setitemdata", "list.selected", "list.setselected", "list.selecteditem", "list.selectedcaption", 
		         "list.getallselected", "list.getallvalues", "list.getallchecked", "list.getallcaptions", "list.getitemname", 
		         "list.getitemparent", "list.getitemcaption", "list.exists", "list.find", "list.findexact",
		         
		 		 "tab.create", "tab.page", "tab.pages", "tab.select", "tab.add", 
		         "tab.remove", "tab.position", "tab.tabscroll", "tab.elem",
		        
		         "menu.additem", "menu.removeitem", "menu.hide", "menu.unload", "menu.open", "menu.show", "menu.closeall",
		         
		         "class.get", "class.set", "class.add", "class.toggle", "class.remove", "class.swap",
		         "class.invert", "class.list", "class.exists", "clone", "next"].forEach(function(fn) {
		          	var type = fn.split('.');
		          	if (!self[type[0]]) { self[type[0]] = {}; }
					self[type[0]][type[1]] = function(ctrl, p1, p2, p3, p4, p5, p6) {
						var obj = resolveName(type[1], ctrl);
						return $f[type[0]][type[1]](obj.dlg, obj.ctrl, p1, p2, p3, p4, p5, p6);
					};
		        });
		      	// Parameter Format: Add(dlg, ctrl, type, fld, l, t, w, h)
		      	// add, addwidget, attachevents, make.
		   		['add', 'addwidget', 'attachevents', 'make'].forEach(function(fn) {
					self[fn] = function(ctrl, type, fld, l, t, w, h) {
						var obj = resolveName(ctrl);
		              	return $f[fn](obj.dlg, obj.ctrl, type, fld, l, t, w, h);
					};
		        });
		      	// Parameter Format: (dlg, ctrl, p1, p2)
				['prop', 'style', 'setevent', 'addevent', 'removeevent', 'size',
		         'pos', 'center', 'fadein', 'fadeout', 'flip', 'min', 'restore'].forEach(function(fn) {
					self[fn] = function(ctrl, p1, p2) {
						var obj = resolveName(fn, ctrl);
						if (typeof(p1) == 'string' && typeof(p2) == 'undefined') {
							return $f['get' + fn] ? $f['get' + fn](obj.dlg, obj.ctrl, p1) : $f[fn](obj.dlg, obj.ctrl, p1);
						} else {
							return $f['set' + fn] ? $f['set' + fn](obj.dlg, obj.ctrl, p1, p2) : $f[fn](obj.dlg, obj.ctrl, p1, p2);
						}
					};
				});
		      	// Parameter Format: (dlg, ctrl, p1)
				['value', 'checked', 'text', 'caption', 'scale', 'translate',
		         'dockleft', 'docktop', 'dockbottom', 'dockright',
		         'origin', 'rotate', 'width', 'left', 'top', 'height'].forEach(function(fn) {
					self[fn] = function(ctrl, p1) {
						var obj = resolveName(fn, ctrl);
						if (typeof(p1) == 'undefined') {
							return $f['get' + fn] ? $f['get' + fn](obj.dlg, obj.ctrl) : $f[fn](obj.dlg, obj.ctrl);
						} else {
							return $f['set' + fn] ? $f['set' + fn](obj.dlg, obj.ctrl, p1) : $f[fn](obj.dlg, obj.ctrl, p1);
						}
					};
				});
		      	// Parameter Format: (dlg, ctrl)
				['unload', 'show', 'type', 'hide', 'enable', 'refresh', 'disable', 'isvisible', 
				 'isenabled', 'iswidget', 'setfocus', 'elem', 'ctrl', 'find', 'buildname',
		         'children', 'issliding', 'isfading', 'isloading', 'getcoords', 'getscreencoords',
		         'getpos', 'getscreenpos', 'vcenter', 'hcenter', 'getcenter', 'disablecontent'].forEach(function(fn) {
					self[fn] = function(ctrl) {
						var obj = resolveName(fn, ctrl);
						return $f[fn](obj.dlg, obj.ctrl);
					};
				});
		      	// Parameter Format: (dlg, p1)
				['zorder', 'zindex', 'title', 'max', 'full', 'fullscreen', 
		         'eachform', 'eachcontrol', 'push'].forEach(function(fn) {
					self[fn] = function(p1) {
						var obj = resolveName(fn);
						if (typeof(p1) == 'undefined') {
							return $f['get' + fn] ? $f['get' + fn](obj.dlg) : $f[fn](obj.dlg, p1);
						} else {
							return $f['set' + fn] ? $f['set' + fn](obj.dlg, p1) : $f[fn](obj.dlg, p1);
						}
					};
				});
		      	// Parameter Format: (dlg)
		 		['pull', 'forms', 'state', 'controls', 'widgets'].forEach(function(fn) {
					self[fn] = function() {
						var obj = resolveName(fn);
						return $f[fn](obj.dlg);
					};
		        });
				
				self['switch'] = function(newdlg, p1, p2) {
					var obj = resolveName('switch');
					return $f['switch'](obj.dlg, newdlg, p1, p2);
				};
		      
		     	// Additional custom methods to align with v5 Property panel.
		      	// 
		        var fnMap = {
		          "font": { fn: "style" },
		          "border": { fn: "style" },
		          "borderwidth": { fn: "style", "style": "border-width" },
		          "borderstyle": { fn: "style", "style": "border-style" },
		          "bordercolor": { fn: "style", "style": "border-color" },
		          "borderradius": { fn: "style", "style": "border-radius" },
		          "fontname": { fn: "style", "style": "font-family" },
		          "fontbold": { fn: "style","style": "font-weight", "value": {"true": "bold", "false": "normal"} },
		          "fontsize": { fn: "style", "style": "font-size" },
		          "fontitalic": { fn: "style", "style": "font-style", "value": {"true": "italic", "false": "normal"} },
		          "fontunderline": { fn: "style", "style": "text-decoration", "value": {"true": "underline", "false": ""} },
		          "fontstrikethru": { fn: "style", "style": "text-decoration",  "value": {"true": "line-through", "false": ""}},
		          "forecolor": { fn: "style", "style": "color" },
		          "backcolor": { fn: "style", "style": "background-color" },
		          "tooltip": { fn: "prop", "style": "title" }
		        };
		      	['font', 'fontname', 'fontbold', 'fontsize', 'fontitalic', 'fontunderline', 'fontstrikethru', 
		         'borderradius', 'borderwidth', 'borderstyle', 'bordercolor', 'forecolor', 'backcolor', 'border', 'tooltip'].forEach(function(fx) {
					self[fx] = function(ctrl, p1) {
						var fn, pval, style, obj = resolveName(fx, ctrl);
		              	if (fnMap[fx]) {
		                  fn = fnMap[fx].fn;
		                  style = fnMap[fx].style || fx;
		                  if (fn) {
		                    if (typeof(p1) == 'undefined') {
		                        return $f['get' + fn](obj.dlg, obj.ctrl, style);
		                    } else {
		                        p1 = (p1.toString().toLowerCase() == 'true') ? 'true' :
		                            (p1.toString().toLowerCase() == 'false') ? 'false' : p1;
		                        // if text decoration make sure you concatenate or remove value.
		                        if (fnMap[fx].value && style == 'text-decoration') {
		                          pval = $f.getstyle(obj.dlg, obj.ctrl, style);
		                          pval = pval.replace(fnMap[fx].value['true'], '');
		                          p1 = (fnMap[fx].value[p1]) ? pval.trim() + ' ' + fnMap[fx].value[p1] : pval;
		                        } else {
		                          p1 = fnMap[fx].value ? fnMap[fx].value[p1] || p1 : p1;
		                        }
		                        $f['set' + fn](obj.dlg, obj.ctrl, style, p1);
		                    }
		                  }
		                }
					};
		        });
		      
		      	self.select = function(ctrl) {
		          var elem = $f.ctrl(obj.dlg, obj.ctrl);
		          if (elem && elem.select) elem.select();
		        };
		      	self.destroy = function() {
		          // Clear methods.
		          function remove(obj) {
		            Object.keys(obj).forEach(function(fn) {
		              if (fn != 'destroy' && typeof(obj[fn]) == 'function') {
		                obj[fn] = null;
		                delete obj[fn];
		              }
		            });
		          }
		          
		          remove(self.list);
		          remove(self.tab);
		          remove(self.picclip);
		          remove(self);
		          $me = null;
		        };
			};
		  	MeInst.prototype._type = function () {
				return "MeInst";
			};
			MeInst.prototype._toDto = function () {
				var self = this;
				return { };
			};
			return MeInst;
		});
		/* msgs Component Manager/Factory :
		   
		*/
		FACTORY.Register("MsgManager", function msgsFactory() {
			var msgs = function (config) {
				var self = this;
		      	var _cbk = null;
		      
				self.showPolicy = function(cfg) {
		            $f.load('loginpolicy');
		            if (cfg.title) $f.settext('loginpolicy', 'infotitle', cfg.title);
		            if (cfg.msg) $f.settext('loginpolicy', 'info', cfg.msg);
		          
		          	$f.zindex('loginpolicy', 6);
		          	$f.show('loginpolicy');
		            $f.max('loginpolicy', function(anim) {
		            	if (anim.pos == 100) {
		                }
		            });
				};
				self.hidePolicy = function() {
		          $f.unload('loginpolicy');
				};
		      	self.showLicense = function(cfg) {
		            $f.load('loginlicense');
		            if (cfg.title) $f.settext('loginlicense', 'infotitle', cfg.title);
		            if (cfg.msg) $f.settext('loginlicense', 'info', cfg.msg);
		          
		            $f.zindex('loginlicense', 6);
		          	$f.show('loginlicense');
		          	$f.max('loginlicense', function(anim) {
		            	if (anim.pos == 100) {
		                }
		            });
				};
				self.hideLicense = function() {
		          $f.unload('loginlicense');
				};
				self.showMsg = function(cfg) {
		            $f.load('loginmsg');
		          	$f.zindex('loginmsg', 6);
		          	$with($f, 'settext', [
		              ['loginmsg', 'infotitle', cfg.title],
		              ['loginmsg', 'infohead', cfg.head],
		              ['loginmsg', 'info', cfg.info]
		            ]);
		          	$f.max('loginmsg', function(anim) {
		            	if (anim.pos == 100) {
		                  $f.show('loginmsg');
		                }
		            });
				};
				self.hideMsg = function() {
		          $f.unload('loginmsg');
				};
		      
		      	self.showConfirm = function(cfg) {
		          	_cbk = cfg.cbk;
		            $f.load('loginconfirm');
		          	$f.zindex('loginconfirm', 6);
		          	$with($f, 'settext', [
		              ['loginconfirm', 'infotitle', cfg.title],
		              ['loginconfirm', 'infohead', cfg.head],
		              ['loginconfirm', 'info', cfg.info]
		            ]);
		          	$f.max('loginconfirm', function(anim) {
		            	if (anim.pos == 100) {
		                  $f.show('loginconfirm');
		                }
		            });
		        };
		      	self.hideConfirm = function(resp) {
		          $f.unload('loginconfirm');
		          if (_cbk) _cbk(resp);
		          _cbk = null;
				};
			};
			
		  	msgs.prototype.type = function () {
				return "msgs";
			};
			msgs.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return msgs;
		});
		
		/* REST Component Manager/Factory :
		   
		*/
		FACTORY.Register("Rest", function blankFactory() {
			var restObj = function (config) {
				var self = this;
				function ajaxCMD(type, url, blASync, payload, callbk) {
					var xhr  = new XMLHttpRequest();
					var json = null;
					if (type == "POST") {
		              if (payload instanceof FormData) {
		                json = payload;
		              } else {
		                json = (typeof(payload) == 'object') ? JSON.stringify(payload) : payload;
		              }
					} else { 
						if (typeof(payload) == 'function') { callbk = payload; payload = null; }
					}
					xhr.onerror = function() {
						if (callbk) { callbk ('error'); }
					};
					xhr.onreadystatechange = function () {
						var resp;
						
						if (xhr.readyState < 4) { return; }
						if (xhr.readyState == 4 && xhr.status == 200) {
							try {
								resp = JSON.parse(xhr.responseText);
							} catch (err) {
								resp = xhr.responseText || {};
							} finally {
								if (callbk) { callbk ('ok', resp); }
							}
						}
					};
					xhr.open(type, url, blASync);
					if (type == "POST" && typeof(json) == 'string') xhr.setRequestHeader('Content-Type','application/json');
					try {
						xhr.send(json);
					} catch(err) {
						console.log(err);
					}
				}
				function restJson(inval) {
					var ary = inval.split(':');
					ary.shift();
					return JSON.parse(ary.join(':') || "") || {};
				}
		      	function _post(url, payload, callbk) {
					ajaxCMD('POST', url, true, payload, callbk);
		        }
		        function _get(url, callbk) {
					ajaxCMD('GET', url, true, null, callbk);
		        }
		      	function cleanPayload(payload) {
		          ['news','video','home','code','bookmark',
		          'version','svr','app','sessid','pubid'].forEach(function(it) {
		            delete payload[it];
		          });
		          return payload;
		        }
		      	function authPayload(payload) {
		          payload = cleanPayload(payload);
		          return Object.assign(payload, {
		            version: 1.0,
		            pubid: '<pubid>',
		            sessid: '<sessionid>'
		          });
		        }
		      
		        self.get = _get;
		        self.post = _post;
		      	self.auth = authPayload;
		        self.restJson = restJson;
			};
		  
			restObj.prototype.type = function () {
				return "rest";
			};
			restObj.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return restObj;
		});
		
		/* Strings Component Manager/Factory :
		*/
		FACTORY.Register('Strings', function StringFactory() {
			var Strings = function (config) {
				var self = this;
				var catType = {
					'lists': '.LST',
					'csvs': '.CSV',
					'ini files': '.INI'
				};
				function escapeRegExp(text) {
					return text.replace(/[-[\]{}()*+?.,\\^$|\s]/g, '\\$&');
				}
				self.capFirst = function(txt) {
					return txt.substr(0,1).toUpperCase() + txt.substr(1).toLowerCase();
				};
				self.replaceFirst = function(find, repl, str) {
					if (!find) return str;
					
					var retval = "";
					repl = repl.toString();
					if (str && typeof str == 'string') {
						find = escapeRegExp(find);
						retval = str.replace(find, repl);
					} else { retval = str; }
					return retval;
				};
				self.replaceAll = KERNEL.replaceAll;
				self.replaceAllIC = function(find, repl, str) {
					if (!find) return str;
					
					var retval = "";
					repl = repl.toString();
					if (str && typeof str == 'string') {
						find = escapeRegExp(find);
						retval = str.replace(new RegExp(find, 'gi'), repl);
					} else { retval = str; }
					return retval;
				};
				self.getStrLen = function(sCmd, len) {
					if (sCmd.length >= len) {
						return {
							item: sCmd.substr(0, len),
							remainder: sCmd.substr(len+1)
						};
					} else {
						return {
							item: sCmd,
							remainder: ''
						};
					}
				};
				self.getStrParam = function(sCmd, delim) {
					var p;
					p = sCmd.toLowerCase().indexOf(delim.toLowerCase());
					if (p > -1) {
						return {
							item: sCmd.substr(0, p).trimLeft(),
							remainder: sCmd.substr(p + delim.length)
						};
					} else {
						return {
							item: sCmd.trimLeft(),
							remainder: ''
						};
					}
				};
				self.justifyCode = function(inTxt, tabCnt) {
					var jtab, retval;
					if (inTxt.trim() != '') {
						while (inTxt.right(2) == '\r\n') {
							inTxt = inTxt.left(inTxt.length - 2);
						}
						retval = self.replaceAll('<<' + 'CRLF' + '>>', '\r\n', inTxt);
						retval = self.replaceAll('<<' + 'CR' + '>>', '\r\n', inTxt);
						retval = self.replaceAll('\r\n\r\n', '\r\n', retval);
						if (retval.right(2) != '\r\n') { retval += '\r\n'; }
						jtab = "\t".repeat(tabCnt);
						retval = jtab + self.replaceAll('\r\n', '\r\n' + jtab, retval);
						return '\r\n' + retval;
					} else { return ''; }
				};
				self.justifyCodeLF = function(inTxt, tabCnt) {
					var jtab, retval;
					if (inTxt.trim() != '') {
						while (inTxt.right(2) == '\r\n') {
							inTxt = inTxt.left(inTxt.length - 2);
						}
						retval = self.replaceAll('<<' + 'CRLF' + '>>', '\n', inTxt);
						retval = self.replaceAll('<<' + 'CR' + '>>', '\n', inTxt);
						retval = self.replaceAll('\r\n', '\n', retval);
						retval = self.replaceAll('\n\n', '\n', retval);
						if (retval.substr(retval.length-1) != '\n') { retval += '\n'; }
						
						jtab = "\t".repeat(tabCnt);
						retval = jtab + self.replaceAll('\n', '\n' + jtab, retval);
						retval = self.replaceAll('\t', '    ', retval);
						return '\n' + retval;
					} else { return ''; }
				};
				self.cleanDeadSpace = function(inTxt) {
					var retval = '', inDat, ln, blBlank;
					inDat = inTxt;
					inDat = self.replaceAll('\t', '    ', inDat);
					ln = inDat.split('\r\n');
					for (var x = 0; x < ln.length; x++) {
						if (ln[x].trim() != '') {
							retval = retval + ln[x] + '\r\n';
							blBlank = false;
						} else {
							if (!blBlank) {
								blBlank = true;
								retval = retval + '\r\n';
							}
						}
					}
					return retval;
				};
		        self.decodeCaption = function(inCap) {
		          var retval = '';
		          if (typeof inCap == 'boolean') { return inCap ? "1" : "0"; }
		          if (typeof inCap == 'number') { return inCap.toString(); }
		          retval = self.replaceAll("\'", "'", inCap);
		          retval = self.replaceAll("''", '"', retval);
		          retval = self.replaceAll("<TAB>", '\t',retval);
		          retval = self.replaceAll("<[" + "CRLF" + "]>", '\r\n', retval);
		          retval = self.replaceAll("<[" + "CR" + "]>", '\r\n', retval);
		          retval = self.replaceAll("<" + "CRLF" + ">", '\r\n', retval);
		          retval = self.replaceAll("<" + "CR" + ">", '\r\n', retval);
		          retval = self.replaceAll("<COMMA>", ',', retval);
		          retval = self.replaceAll("<SEMI>", ';', retval);
		          retval = self.replaceAll("<COLN>", ':', retval);
		          retval = self.replaceAll("<AMP>", '&&', retval);
		          retval = self.replaceAll("<br>", '\r\n', retval);
		          retval = self.replaceAll("<BR>", '\r\n', retval);
		          retval = self.replaceAll("<PIP>", '|', retval);
		          retval = self.replaceAll("&nbsp;", ' ', retval);
		          return retval;
		        };
		      	self.encodeCaption = function(inCap) {
		          var retval = '';
		          if (typeof inCap == 'boolean') { return inCap ? "1" : "0"; }
		          if (typeof inCap == 'number') { return inCap.toString(); }
		          retval = self.replaceAll("'", "\'", inCap);
		          retval = self.replaceAll('"', "''", retval);
		          retval = self.replaceAll('\t', "<TAB>", retval);
		          retval = self.replaceAll('\r\n', "<[" + "CRLF" + "]>", retval);
		          retval = self.replaceAll('\r', "<[" + "CRLF" + "]>", retval);
		          retval = self.replaceAll('\n', "<[" + "CRLF" + "]>", retval);
		          retval = self.replaceAll(',', "<COMMA>", retval);
		          retval = self.replaceAll(';', "<SEMI>", retval);
		          retval = self.replaceAll(':', "<COLN>", retval);
		          retval = self.replaceAll('&&', "<AMP>", retval);
		          retval = self.replaceAll('|', "<PIP>", retval);
		          return retval;
		        };
				
				self.stripNumerics = function(inTxt) {
					var newtext, x, falpha;
					falpha = '0123456789@#$%*^[]=\|<>~';
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) == -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.numericOnly = function(inTxt) {
					var newtext, x, falpha;
					falpha = '1234567890';
					falpha = '.+-*/' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.alphaOnly = function(inTxt) {
					var newtext, x, falpha;
					falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					falpha += falpha.toLowerCase();
					falpha = '._-' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.alphaNumOnly = function(inTxt) {
					var newtext, x, falpha;
					falpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					falpha += falpha.toLowerCase();
					falpha = '._-' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.asciiStrip = function(inTxt) {
					var newtext, x, falpha;
					falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					falpha += falpha.toLowerCase();
					falpha = '0123456789()._-+' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.objectNameStrip = function(inTxt) {
					var newtext, x, falpha;
					falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ()';
					falpha += falpha.toLowerCase();
					falpha = '0123456789%+! ' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.labelStrip = function(inTxt) {
					var newtext, x, falpha;
					falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					falpha += falpha.toLowerCase();
					falpha = '0123456789._+' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.fileStrip = function(inTxt) {
					var newtext, x, falpha;
					falpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					falpha += falpha.toLowerCase();
					falpha = '0123456789._-+' + falpha;
					newtext = '';
					x = 0;
					while (x < inTxt.length) {
						if (falpha.indexOf(inTxt.substr(x,1)) > -1) {
							newtext += inTxt.substr(x,1);
						}
						x++;
					}
					return newtext.trim();
				};
				self.formatVal = function(inTxt, num) {
					return self.replaceFirst("#", num, inTxt);
				};
				
				self.colorStrToRGB = function(inTxt) {
					var tmp;
					if (inTxt.toLowerCase().indexOf('rgb') > -1) {
						tmp = inTxt.split('(')[1].split(')')[0];
						return {
							r: Number(tmp.split(',')[0]),
							g: Number(tmp.split(',')[1]),
							b: Number(tmp.split(',')[2]),
						};
					} else {
						return {
							r: 0, g: 0, b: 0
						};
					}
				};
				self.rgbToHEX = function(r,g,b) {
					var rgb = b | (g << 8) | (r << 16);
					return '#' + (0x1000000 + rgb).toString(16).slice(1);
				};
				self.hexToRGB = function(hex) {
					var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
					return result ? {
						r: parseInt(result[1], 16),
						g: parseInt(result[2], 16),
						b: parseInt(result[3], 16)
					} : null;
				};
				
				self.normalizeEOL = function(inTxt) {
					var retval = self.replaceAll('\n', '\r\n', inTxt);
					retval = self.replaceAll('\r\r\n', '\r\n', retval);
					retval = self.replaceAll('\r\n\r\n\r\n', '\r\n\r\n', retval);
					return retval;
				};
				self.normalizeTrailingEOL = function(inTxt) {
					var retval = inTxt;
					while (retval.right(2) == '\r\n') {
						retval = retval.left(retval.length-2);
					}
					retval = retval + '\r\n';
					return retval;
				};
			};
			Strings.prototype.type = function () {
				return "Strings";
			};
			Strings.prototype.toDto = function () {
				var self = this;
				return { };
			};
			return Strings;
		});
		// TODO: Analysis @ 8/9/2017 8:26AM
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
			
	},
	Logon: function(instID) {
	 
	},
	Logoff: function(instID) {
	 
	},
	EndApp: function(instID) {
	 
	},
	StartApp: function(pos) {
	    try {
	        $k.enabled = false;
	        if (typeof($k.fluidDesktop) == "undefined") { DESKTOP.fluidDesktop = globals.fluidDesktop; }
	        if (typeof($k.desktop) == "undefined") { $k.desktop = false; }
	        $k.setuplogo();
	 
	        App.Code.RegisterFactories();
	         if ($fctry.exists("Events")) { AppEvents = $fctry.new("Events"); }
	 
	        /* This function is called before your Startup Dialog is shown. 
	           The KERNEL is disabled until the Startup Dialog is displayed. 
			     You CAN NOT manually display dialog(s) here. */
	    }
	    catch (err) {
	        if ($k.errhandler) {
	            $k.errhandler(err, null);
	        }
	    }
	    finally {
	        $k.enabled = true;
	    }
	    return pos;
	}
	
};
$k.wrapallfunctions($heap.loginui.Code);
 
/** 
 * Create ALL Dialog Instances -------------------------
 **/
 
/** Form Template --------------------------------------
 *  NAME: loginconfirm
 *
 * version: 5.0
 **/
$heap.loginui['loginconfirm'] = { };
$heap.loginui['loginconfirm'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginconfirm';
			if (!$heap.loginui[pos.form]) { pos.form = 'loginconfirm'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginconfirm']);
			instName = $heap.loginui[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			if (show) { $heap.loginui[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'-999', top:'-999', width:'663', height:'580'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginconfirm',pos.left,pos.top,663,580,styles);
			$f.hide('loginconfirm');
				props = [{"name":"event-activate","value":"login.msg.maximize"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginconfirm','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"rgba(20,20,20,0.60)"},{"name":"font-size","value":""},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"border","value":"none"},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginconfirm','', styles);
			
			
			$f.add('loginconfirm','label2','label','','0','0','105','12');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginconfirm','label2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','label2', styles);
			$f.add('loginconfirm','label1','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginconfirm','label1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','label1', styles);
			$f.add('loginconfirm','frmlogin','div','','62','160','540','262');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginconfirm','frmlogin', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"display","value":"inline-block"},{"name":"left","value":"calc(50% - 270px)"},{"name":"overflow","value":"hidden"},{"name":"padding","value":"20px 60px 30px 60px"},{"name":"position","value":"absolute"},{"name":"top","value":"calc(50% - 130px)"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(80,80,80,.90) 8px 10px 18px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"}];
				$f.setstyle('loginconfirm','frmlogin', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginconfirm','frmlogin'),'picturex2','imagex',options,'338','-45','219','114');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginconfirm','picturex2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 150px 0px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 150px 0px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(80,80,80,.40) 0px 2px 2px 2px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginconfirm','picturex2', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginconfirm','frmlogin'),'picturex1','imagex',options,'-21','-44','426','169');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginconfirm','picturex1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 90px 190px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 95px 190px"},{"name":"div.box-shadow","value":"rgba(80,80,80,.60) -2px 4px 4px 0px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginconfirm','picturex1', styles);
			$f.add($f.getinstname('loginconfirm','frmlogin'),'infotitle','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginconfirm','infotitle', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"20px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','infotitle', styles);
			$f.add($f.getinstname('loginconfirm','frmlogin'),'infohead','label','','0','0','105','43');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Confirm:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginconfirm','infohead', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"36px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"15px 0px 35px 20px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','infohead', styles);
			$f.add($f.getinstname('loginconfirm','frmlogin'),'info','label','','0','0','420','89');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Are you sure you want to delete this resource?"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginconfirm','info', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"20px"},{"name":"line-height","value":"24px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','info', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('loginconfirm','frmlogin'),'icncancel','icon',options,'488','4','32','32');
				props = [{"name":"event-click","value":"login.confirm.cancel.click"},{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"image.class","value":"fa fa-times-circle-o"},{"name":"image.title","value":"Close"}];
				$f.setprop('loginconfirm','icncancel', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"image.color","value":"lightblue"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"32px"}];
				$f.setstyle('loginconfirm','icncancel', styles);
			$f.add('loginconfirm','label7','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginconfirm','label7', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginconfirm','label7', styles);
			$f.add('loginconfirm','btnyes','button','','167','398','150','45');
				props = [{"name":"event-click","value":"login.confirm.yes.click"},{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Yes"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginconfirm','btnyes', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224488"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"background","value":"linear-gradient(90deg, rgba(1,64,89,1) 0%, rgba(60,160,210,1) 100%);"},{"name":"border","value":"0.5px solid #000"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"30px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"font-size","value":"14px"},{"name":"max-width","value":"160px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(50% - 170px)"},{"name":"div.margin","value":"18px 5px -5px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"calc(50% + 90px)"}];
				$f.setstyle('loginconfirm','btnyes', styles);
			$f.add('loginconfirm','btnno','button','','347','398','150','45');
				props = [{"name":"event-click","value":"login.confirm.no.click"},{"name":"disabled","value":false},{"name":"form","value":"loginconfirm"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"No"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginconfirm','btnno', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224488"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"background","value":"linear-gradient(90deg, rgba(1,64,89,1) 0%, rgba(60,160,210,1) 100%);"},{"name":"border","value":"0.5px solid #000"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"30px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"font-size","value":"14px"},{"name":"max-width","value":"160px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(50% + 10px)"},{"name":"div.margin","value":"18px 5px -5px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"calc(50% + 90px)"}];
				$f.setstyle('loginconfirm','btnno', styles);
			$f.setprop('loginconfirm','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginconfirm').enabled ) { $f.model('loginconfirm').create('loginconfirm'); }
			$nim.React.build('loginconfirm');
			$f.refresh('loginconfirm');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['icncancel', 'onclick', 'login.confirm.cancel.click'],['btnyes', 'onclick', 'login.confirm.yes.click'],['btnno', 'onclick', 'login.confirm.no.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginconfirm', itm[0], itm[1], $nim.fn.findEvent('loginui', 'loginconfirm', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginconfirm'].isLoaded = 1;
				App.Dialog['loginconfirm'].isActivated = 0;
				$f.hide('loginconfirm');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginconfirm'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginconfirm','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginconfirm','', props);
					styles = [{"name":"body.background-color","value":"transparent"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#000"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginconfirm','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginconfirm', itm.name); }
					});
				
					$f.events('loginconfirm', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginconfirm','','forceshow').toLowerCase() == 'true') $heap.loginui['loginconfirm'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginconfirm');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginconfirm', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginconfirm'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginconfirm');
		try {
			if ($k.islastform('loginconfirm')) { $k.app.unloadwidget('loginconfirm'); }
			
			var itm, evtArr = [
					['icncancel', 'onclick'],['btnyes', 'onclick'],['btnno', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginconfirm', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginconfirm', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginconfirm');
			if (App) {
				var dlgItem = App.Dialog['loginconfirm'], 
					dlgCount = App.Dialog['loginconfirm'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			App.Dialog['loginconfirm'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginconfirm');
			blCancel = $f.events('loginconfirm', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginconfirm');
			$k.instance.restore();
			$f.events('loginconfirm', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginconfirm");
				App.Dialog['loginconfirm'].isLoaded = 0;
				App.Dialog['loginconfirm'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginconfirm');
			if ($k.isformloaded('loginconfirm') == false) {
				retval = $f.events('loginconfirm', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginconfirm");
			
			// Pull DataModel. 
			$k.instance.save('loginconfirm');
			if ($f.model('loginconfirm').enabled) { $f.model('loginconfirm').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginconfirm'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginconfirm'].isActivated) {
				$f.events('loginconfirm', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
    }
};
$k.wrapallfunctions($heap.loginui['loginconfirm'].Code, 'loginconfirm');
 
/** Form Template --------------------------------------
 *  NAME: loginforgot
 *
 * version: 5.0
 **/
$heap.loginui['loginforgot'] = { };
$heap.loginui['loginforgot'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginforgot';
			if (!$heap.loginui[pos.form]) { pos.form = 'loginforgot'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginforgot']);
			instName = $heap.loginui[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginforgot'}});
			}
		}
		finally {
			if (show) { $heap.loginui[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'681', height:'756'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginforgot',pos.left,pos.top,681,756,styles);
			$f.hide('loginforgot');
				props = [{"name":"event-activate","value":"login.forgot.maximize"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginforgot','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"transparent"},{"name":"font-size","value":""},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginforgot','', styles);
			
			
			$f.add('loginforgot','label2','label','','0','0','105','90');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','label2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.height","value":"calc(50% - 215px)"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','label2', styles);
			$f.add('loginforgot','label1','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','label1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','label1', styles);
			$f.add('loginforgot','frmlogin','div','','0','0','510','434');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginforgot','frmlogin', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"none"},{"name":"display","value":"inline-block"},{"name":"margin","value":"10px 0px -20px 0px"},{"name":"overflow","value":"hidden"},{"name":"padding","value":"40px 60px 30px 60px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"}];
				$f.setstyle('loginforgot','frmlogin', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginforgot','frmlogin'),'picturex2','imagex',options,'341','-5','178','114');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginforgot','picturex2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 150px 0px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 150px 0px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(80,80,80,.40) 0px 2px 2px 2px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginforgot','picturex2', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginforgot','frmlogin'),'picturex1','imagex',options,'-18','-4','399','169');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginforgot','picturex1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 90px 190px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 93px 190px"},{"name":"div.box-shadow","value":"rgba(80,80,80,.60) -1px 4px 4px 0px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginforgot','picturex1', styles);
			$f.add($f.getinstname('loginforgot','frmlogin'),'label8','label','','0','0','105','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Forgot your password?"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','label8', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"22px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"15px 0px 5px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','label8', styles);
			$f.add($f.getinstname('loginforgot','frmlogin'),'label5','label','','0','0','105','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"No problem!"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','label5', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"36px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 60px 20px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','label5', styles);
			$f.add($f.getinstname('loginforgot','frmlogin'),'lbusername','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Username:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','lbusername', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"85px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','lbusername', styles);
			$f.add($f.getinstname('loginforgot','frmlogin'),'user','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.forgot.user.onchange"},{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginforgot','user', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','user', styles);
			$f.add($f.getinstname('loginforgot','frmlogin'),'lbor','label-right','','0','0','105','24');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"- or -"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','lbor', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','lbor', styles);
			$f.add($f.getinstname('loginforgot','frmlogin'),'lbemail','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Email:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','lbemail', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','lbemail', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('loginforgot','frmlogin'),'icncancel','icon',options,'464','15','32','32');
				props = [{"name":"event-click","value":"login.forgot.cancel.click"},{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"image.class","value":"fa fa-times-circle-o"},{"name":"image.title","value":"Close"}];
				$f.setprop('loginforgot','icncancel', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"image.color","value":"lightblue"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"32px"}];
				$f.setstyle('loginforgot','icncancel', styles);
			$f.add($f.getinstname('loginforgot','frmlogin'),'email','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.forgot.email.onchange"},{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginforgot','email', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','email', styles);
			$f.add('loginforgot','label7','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginforgot','label7', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','label7', styles);
			$f.add('loginforgot','btnreset','button','','0','0','150','45');
				props = [{"name":"event-click","value":"login.forgot.reset.click"},{"name":"disabled","value":true},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Reset"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginforgot','btnreset', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224488"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"background","value":"linear-gradient(90deg, rgba(1,64,89,1) 0%, rgba(60,160,210,1) 100%);"},{"name":"border","value":"0.5px solid #000"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"30px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"font-size","value":"14px"},{"name":"max-width","value":"150px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"-10px 5px -5px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginforgot','btnreset', styles);
			$f.add('loginforgot','custom1','div','','11','7','96','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginforgot"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom1(validate)"},{"name":"caption","value":""},{"name":"ctype","value":"validate"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-custom"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginforgot','custom1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"visibility","value":"visible"},{"name":"font-size","value":"10.2pt"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"}];
				$f.setstyle('loginforgot','custom1', styles);
			$f.hide('loginforgot','custom1');
			$f.setprop('loginforgot','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginforgot').enabled ) { $f.model('loginforgot').create('loginforgot'); }
			$nim.React.build('loginforgot');
			$f.refresh('loginforgot');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginforgot'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['user', 'onchange', 'login.forgot.user.onchange'],['icncancel', 'onclick', 'login.forgot.cancel.click'],['email', 'onchange', 'login.forgot.email.onchange'],
					['btnreset', 'onclick', 'login.forgot.reset.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginforgot', itm[0], itm[1], $nim.fn.findEvent('loginui', 'loginforgot', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginforgot'].isLoaded = 1;
				App.Dialog['loginforgot'].isActivated = 0;
				$f.hide('loginforgot');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginforgot'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginforgot','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginforgot','', props);
					styles = [{"name":"body.background-color","value":"TRANSPARENT"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginforgot','', styles);
					
					var ctrls = [{"widget":false,"name":"custom1"}];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginforgot', itm.name); }
					});
				
					$f.events('loginforgot', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginforgot','','forceshow').toLowerCase() == 'true') $heap.loginui['loginforgot'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginforgot');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginforgot'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginforgot', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginforgot'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginforgot');
		try {
			if ($k.islastform('loginforgot')) { $k.app.unloadwidget('loginforgot'); }
			
			var itm, evtArr = [
					['user', 'onchange'],['icncancel', 'onclick'],['email', 'onchange'],
				['btnreset', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginforgot', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginforgot'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginforgot', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginforgot');
			if (App) {
				var dlgItem = App.Dialog['loginforgot'], 
					dlgCount = App.Dialog['loginforgot'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginforgot'}});
			}
		}
		finally {
			App.Dialog['loginforgot'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginforgot');
			blCancel = $f.events('loginforgot', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginforgot');
			$k.instance.restore();
			$f.events('loginforgot', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginforgot'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginforgot");
				App.Dialog['loginforgot'].isLoaded = 0;
				App.Dialog['loginforgot'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginforgot');
			if ($k.isformloaded('loginforgot') == false) {
				retval = $f.events('loginforgot', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginforgot");
			
			// Pull DataModel. 
			$k.instance.save('loginforgot');
			if ($f.model('loginforgot').enabled) { $f.model('loginforgot').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginforgot'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginforgot'].isActivated) {
				$f.events('loginforgot', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		user_OnChange: function(e, itm) { 
			
		}//-USER_ONCHANGE
    }
};
$k.wrapallfunctions($heap.loginui['loginforgot'].Code, 'loginforgot');
 
/** Form Template --------------------------------------
 *  NAME: loginlicense
 *
 * version: 5.0
 **/
$heap.loginui['loginlicense'] = { };
$heap.loginui['loginlicense'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginlicense';
			if (!$heap.loginui[pos.form]) { pos.form = 'loginlicense'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginlicense']);
			instName = $heap.loginui[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginlicense'}});
			}
		}
		finally {
			if (show) { $heap.loginui[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'-999', top:'-999', width:'736', height:'208'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginlicense',pos.left,pos.top,736,208,styles);
			$f.hide('loginlicense');
				props = [{"name":"event-activate","value":"login.license.maximize"},{"name":"event-load","value":"login.license.loadLicense"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginlicense','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"transparent"},{"name":"font-size","value":""},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginlicense','', styles);
			
			
			$f.add('loginlicense','label1','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginlicense"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginlicense','label1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginlicense','label1', styles);
			$f.add('loginlicense','licpage','div','','0','0','600','243');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginlicense"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginlicense','licpage', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"none"},{"name":"display","value":"inline-block"},{"name":"height","value":"calc(100% - 65px)"},{"name":"margin","value":"20px 0px 0px 0px"},{"name":"overflow","value":"visible"},{"name":"padding","value":"20px 20px 20px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"min-width","value":"575px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"}];
				$f.setstyle('loginlicense','licpage', styles);
			$f.add($f.getinstname('loginlicense','licpage'),'infotitle','label-right','','0','0','105','36');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginlicense"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"END-USER LICENSE AGREEMENT"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginlicense','infotitle', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"24px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"25px 0px 15px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginlicense','infotitle', styles);
			$f.add($f.getinstname('loginlicense','licpage'),'info','label','','0','0','105','622');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginlicense"},{"name":"dock","value":"TTFF"},{"name":"title","value":""},{"name":"caption","value":"<b>IMPORTANT:</b> PLEASE READ THIS DOCUMENT IN ITS ENTIRETY<br /><br />This End-User License Agreement (hereinafter, \"Agreement\") creates a legally binding Agreement between you, as an end user of our services (hereinafter, \"End User\"), and the following company: Nimble Solutions, LLC (hereinafter, \"Company\"). You will be referred to through second-person pronouns such as \"your\" and \"yours.\" We, the Company, will be referred to with pronouns such as \"us,\" \"our,\" and \"ours.\" Collectively, you and the Company may be referred to as the \"Parties\" and individually as \"Party.\"<br />This license governs the use of all of our software products (hereinafter, \"Software\"), specifically:<br />Nimble IDE: Software program for creating Html and Javascript applications for browser, desktop and mobile platforms.<br />By accessing, downloading, installing, or otherwise using our Software in any way, you agree to be bound by this Agreement in its entirety. If you do not agree, you must cease use of the Software immediately.<br /><br /><b>SOFTWARE LICENSE:</b> When you lawfully access the Software, whether through purchase or other lawful means, we grant you, subject to all of the terms and conditions of this Agreement, a non-exclusive, non-transferable, limited, revocable license to use the Software (\"License\"). This License extends to the use of documentation, data, or information developed by the Company, and other materials which may assist in your use of the Software. This License may not be transferred to any third parties without express, lawful, written permission from the Company and this License terminates upon your cessation of use of the Software.<br />This License shall be applicable to all lawful End Users of the Software, unless a separate written agreement has been executed between you and the Company.<br /><br /><b>LICENSE FEE:</b> The License is provided for a fee, in conjunction with the purchase of the Software. Such fee will be displayed to you prior to your purchase of the Software.<br /><br /><b>RESTRICTIONS:</b> The License provided hereunder is subject to the following additional restrictions:<br />The license must not be transferred or sold to any third party. The license is not valid for software or computer companies or individuals which work for any of Nimble Solutions competitors. All users must agree not to reverse engineer the software in any way.<br /><br /><b>ADDITIONAL LICENSES:</b> The following additional licenses may be available as related to the Software:<br />Educational License: Educational licenses for Nimble IDE are available at a discounted rate. Such license are institution-wide and must be negotiated separately with Nimble Solutions, LLC.<br /><br />Press License: To use Nimble IDE for public press purposes, please contact Nimble Solutions, LLC. Press licenses may be subject to an additional fee.<br /><br /><b>ADDITIONAL TERMS:</b> Additional terms may be applicable to the Parties' relationship with each other, such as the Company Terms <u> </u>Conditions or Terms of Use, the Company Privacy Policy, and any other such written agreements governing your relationship with us. Nothing contained herein is intended to restrict the terms of any other written agreement. Instead, all relevant documents shall be construed as broadly as possible.<br />The Terms <u> </u>Conditions/Terms of Use can be found at the following link: https://www.nimble-ide.com/terms.The Privacy Policy can be found at the following link: https://www.nimble-ide.com/privacy.<br /><br /><b>INTELLECTUAL PROPERTY:</b> You agree that the Software, Company website and all services provided by the Company are the property of the Company, including all copyrights, trademarks, trade secrets, patents, and other intellectual property (\"Company IP\"). You agree that the Company owns all right, title and interest in and to the Company IP and that you will not use the Company IP for any unlawful or infringing purpose. You agree not to reproduce or distribute the Company IP in any way, including electronically or via registration of any new trademarks, trade names, service marks or Uniform Resource Locators (URLs), without express written permission from the Company.<br /><br /><b>ACCEPTABLE USE:</b> You agree not to use the Software for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Software in any way that could damage the Company website, services, or general business of the Company.<br />You further agree not to use the Software:<br />I) To harass, abuse, or threaten others or otherwise violate any person's legal rights;<br />II) To violate any intellectual property rights of the Company or any third party;<br />III) To upload or otherwise disseminate any computer viruses or other software that may damage the property of another;<br />IV) To perpetrate any fraud;<br />V) To engage in or create any unlawful gambling, sweepstakes, or pyramid scheme;<br />VI) To publish or distribute any obscene or defamatory material;<br />VII) To publish or distribute any material that incites violence, hate, or discrimination towards any group;<br />VIII) To unlawfully gather information about others.<br /><br /><b>REVERSE ENGINEERING <u> </u>SECURITY:</b> You agree not to undertake any of the following actions:<br />a) Reverse engineer, or attempt to reverse engineer or disassemble the Software or any code within or related to the Software or the Company website;<br />b) Violate the security of the Software through any unauthorized access, circumvention of encryption or other security tools, data mining or interference to any host, user or network;<br />c) Copy or otherwise distribute copies of the Software unlawfully, such as through any peer-to-peer network or other intellectual property circumvention tool.<br /><br /><b>MAINTENANCE:</b> This License includes Software maintenance and support. Please contact the Company for assistance.<br /><br /><b>INDEMNIFICATION:</b> You agree to defend and indemnify the Company and any of its affiliates (if applicable) and hold us harmless against any and all legal claims and demands, including reasonable attorney's fees, which may arise from or relate to your use or misuse of the Software, your breach of this Agreement, or your conduct or actions. You agree that the Company shall be able to select its own legal counsel and may participate in its own defense, if the Company wishes.<br /><br /><b>SPAM POLICY:</b> You are strictly prohibited from using the Software or any of the Company's services for illegal spam activities, including gathering email addresses and personal information from others or sending any mass commercial emails.<br /><br /><b>SERVICE INTERRUPTIONS:</b> The Company may need to interrupt access to the Software to perform maintenance or emergency services on a scheduled or unscheduled basis. You agree that your access to the Software may be affected by unanticipated or unscheduled downtime, for any reason, but that the Company shall have no liability for any damage or loss caused as a result of such downtime.<br /><br /><b>NO WARRANTIES:</b> You agree that your use of the Software is at your sole and exclusive risk and that the Software is provided on \"As Is\" basis. The Company hereby expressly disclaims any and all express or implied warranties of any kind, including, but not limited to the implied warranty of fitness for a particular purpose and the implied warranty of merchantability. The Company makes no warranties that the Software will meet your needs or that access to the Software will be uninterrupted or error-free. The Company also makes no warranties as to the reliability or accuracy of any information contained within the Software. You agree that any damage that may occur to you, through your computer system, or as a result of loss of your data from your use of the Software is your sole responsibility and that the Company is not liable for any such damage or loss.<br /><br /><b>LIMITATION ON LIABILITY:</b> The Company is not liable for any damages that may occur to you as a result of your use of the Software, to the fullest extent permitted by law. The maximum liability of the Company arising from or relating to this Agreement is limited to the greater of one hundred ($100) US Dollars or the amount you paid to the Company in the last six (6) months. This section applies to any and all claims by you, including, but not limited to, lost profits or revenues, consequential or punitive damages, negligence, strict liability, fraud, or torts of any kind.<br /><br /><b>DISPUTE RESOLUTION <u> </u>GOVERNING LAW:</b> All disputes will be resolved as provided for in the Terms <u> </u>Conditions or Terms of Service. Should Company not have a live version of any Terms document or any other provisions in any user-facing document covering dispute resolution and governing law, the laws of Florida shall govern any matter or dispute relating to or arising from this EULA or the Company's relationship with End User.<br /><br /><b>ASSIGNMENT:</b> This Agreement, or the rights granted hereunder, may not be assigned, sold, leased or otherwise transferred in whole or part by you. Should this Agreement, or the rights granted hereunder, by assigned, sold, leased or otherwise transferred by the Company, the rights and liabilities of the Company will bind and inure to any assignees, administrators, successors, and executors.<br /><br /><b>HEADINGS FOR CONVENIENCE ONLY:</b> Headings of parts and sub-parts under this Agreement are for convenience and organization, only. Headings shall not affect the meaning of any provisions of this Agreement.<br /><br /><b>NO AGENCY, PARTNERSHIP OR JOINT VENTURE:</b> No agency, partnership, or joint venture has been created between the Parties as a result of this Agreement. No Party has any authority to bind the other to third parties.<br /><br /><b>FORCE MAJEURE:</b> The Company is not liable for any failure to perform due to causes beyond its reasonable control including, but not limited to, acts of God, acts of civil authorities, acts of military authorities, riots, embargoes, acts of nature and natural disasters, and other acts which may be due to unforeseen circumstances.<br /><br /><b>ELECTRONIC COMMUNICATIONS PERMITTED:</b> Electronic communications are permitted to both Parties under this Agreement, including e-mail or fax. For any questions or concerns, please email us at the following address: nimblejs@nimble-ide.com."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginlicense','info', props);
				styles = [{"name":"color","value":"#5a5a5a"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"height","value":"calc(100% - 140px)"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"line-height","value":"20px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"top"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 35px 0px"},{"name":"div.overflow-y","value":"scroll"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginlicense','info', styles);
			$f.add($f.getinstname('loginlicense','licpage'),'btnagree','button','','0','0','150','45');
				props = [{"name":"event-click","value":"login.license.agree.click"},{"name":"disabled","value":false},{"name":"form","value":"loginlicense"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"I agree"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginlicense','btnagree', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224488"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"background","value":"linear-gradient(90deg, rgba(1,64,89,1) 0%, rgba(60,160,210,1) 100%);"},{"name":"border","value":"0.5px solid #000"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"30px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"font-size","value":"14px"},{"name":"max-width","value":"150px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"-10px 5px -5px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginlicense','btnagree', styles);
			options = 'media/img_missing.png';
			$f.add('loginlicense','icnback','icon',options,'77','30','32','32');
				props = [{"name":"event-click","value":"login.license.back.click"},{"name":"disabled","value":false},{"name":"form","value":"loginlicense"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-left","value":"!!!!"},{"name":"image.class","value":"fa fa-arrow-circle-left"},{"name":"image.title","value":"arrow-circle-left"}];
				$f.setprop('loginlicense','icnback', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"32px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(50% - 290px)"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"30px"},{"name":"image.color","value":"lightblue"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"32px"}];
				$f.setstyle('loginlicense','icnback', styles);
			$f.setprop('loginlicense','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginlicense').enabled ) { $f.model('loginlicense').create('loginlicense'); }
			$nim.React.build('loginlicense');
			$f.refresh('loginlicense');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginlicense'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['btnagree', 'onclick', 'login.license.agree.click'],['icnback', 'onclick', 'login.license.back.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginlicense', itm[0], itm[1], $nim.fn.findEvent('loginui', 'loginlicense', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginlicense'].isLoaded = 1;
				App.Dialog['loginlicense'].isActivated = 0;
				$f.hide('loginlicense');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginlicense'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginlicense','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginlicense','', props);
					styles = [{"name":"body.background-color","value":"TRANSPARENT"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.overflow","value":"visible"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginlicense','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginlicense', itm.name); }
					});
				
					$f.events('loginlicense', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginlicense','','forceshow').toLowerCase() == 'true') $heap.loginui['loginlicense'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginlicense');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginlicense'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginlicense', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginlicense'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginlicense');
		try {
			if ($k.islastform('loginlicense')) { $k.app.unloadwidget('loginlicense'); }
			
			var itm, evtArr = [
					['btnagree', 'onclick'],['icnback', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginlicense', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginlicense'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginlicense', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginlicense');
			if (App) {
				var dlgItem = App.Dialog['loginlicense'], 
					dlgCount = App.Dialog['loginlicense'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginlicense'}});
			}
		}
		finally {
			App.Dialog['loginlicense'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginlicense');
			blCancel = $f.events('loginlicense', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginlicense');
			$k.instance.restore();
			$f.events('loginlicense', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginlicense'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginlicense");
				App.Dialog['loginlicense'].isLoaded = 0;
				App.Dialog['loginlicense'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginlicense');
			if ($k.isformloaded('loginlicense') == false) {
				retval = $f.events('loginlicense', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginlicense");
			
			// Pull DataModel. 
			$k.instance.save('loginlicense');
			if ($f.model('loginlicense').enabled) { $f.model('loginlicense').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginlicense'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginlicense'].isActivated) {
				$f.events('loginlicense', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
    }
};
$k.wrapallfunctions($heap.loginui['loginlicense'].Code, 'loginlicense');
 
/** Form Template --------------------------------------
 *  NAME: loginmain
 *
 * version: 5.0
 **/
$heap.loginui['loginmain'] = { };
$heap.loginui['loginmain'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginmain';
			if (!$heap.loginui[pos.form]) { pos.form = 'loginmain'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginmain']);
			instName = $heap.loginui[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginmain'}});
			}
		}
		finally {
			if (show) { $heap.loginui[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'628', height:'615'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginmain',pos.left,pos.top,628,615,styles);
			$f.hide('loginmain');
				props = [{"name":"event-load","value":"login.main.init"},{"name":"event-activate","value":"login.main.maximize"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginmain','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"transparent"},{"name":"font-size","value":""},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginmain','', styles);
			
			
			$f.add('loginmain','label2','label','','0','0','105','90');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','label2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.height","value":"calc(50% - 215px)"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','label2', styles);
			$f.add('loginmain','label1','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','label1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','label1', styles);
			$f.add('loginmain','frmlogin','div','','0','0','480','402');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginmain','frmlogin', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"none"},{"name":"display","value":"inline-block"},{"name":"margin","value":"10px 0px -20px 0px"},{"name":"overflow","value":"hidden"},{"name":"padding","value":"40px 60px 30px 60px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"}];
				$f.setstyle('loginmain','frmlogin', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginmain','frmlogin'),'picturex2','imagex',options,'341','-5','158','114');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginmain','picturex2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 80px 0px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 150px 0px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(80,80,80,.40) 10px 4px 2px 3px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginmain','picturex2', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginmain','frmlogin'),'picturex1','imagex',options,'-18','-4','399','169');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginmain','picturex1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 80px 190px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 93px 190px"},{"name":"div.box-shadow","value":"rgba(80,80,80,.60) -1px 4px 4px 0px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginmain','picturex1', styles);
			$f.add($f.getinstname('loginmain','frmlogin'),'label8','label','','0','0','105','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Welcome back,"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','label8', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"22px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"15px 0px 5px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','label8', styles);
			$f.add($f.getinstname('loginmain','frmlogin'),'label5','label','','0','0','105','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Login"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','label5', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"40px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 60px 20px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','label5', styles);
			$f.add($f.getinstname('loginmain','frmlogin'),'lblogin','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Login:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lblogin', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','lblogin', styles);
			$f.add($f.getinstname('loginmain','frmlogin'),'username','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.main.username.onchange"},{"name":"event-keyup","value":"login.main.username.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Login"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginmain','username', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','username', styles);
			$f.add($f.getinstname('loginmain','frmlogin'),'lbpassword','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Password:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lbpassword', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','lbpassword', styles);
			$f.add($f.getinstname('loginmain','frmlogin'),'password','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.main.password.onchange"},{"name":"event-keyup","value":"login.main.password.keyup"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"placeholder","value":"Password"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-textbox"},{"name":"type","value":"password"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginmain','password', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 5px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','password', styles);
			$f.add($f.getinstname('loginmain','frmlogin'),'lbregister','label','','0','0','180','15');
				props = [{"name":"event-click","value":"login.main.register.click"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Register now."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lbregister', props);
				styles = [{"name":"color","value":"#224488"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"11px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"top"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','lbregister', styles);
			$f.add($f.getinstname('loginmain','frmlogin'),'lbforgot','label-right','','0','0','180','15');
				props = [{"name":"event-click","value":"login.main.forgot.click"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Forgot password?"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lbforgot', props);
				styles = [{"name":"color","value":"#b0b0b0"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"display","value":"table"},{"name":"float","value":"right"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"11px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"right"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','lbforgot', styles);
			$f.add($f.getinstname('loginmain','frmlogin'),'lbreset','label-right','','0','0','180','15');
				props = [{"name":"event-click","value":"login.main.reset.click"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Enter reset code."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','lbreset', props);
				styles = [{"name":"color","value":"#b0b0b0"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"11px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"right"},{"name":"caption.vertical-align","value":"top"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"2px 0px 25px 0px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','lbreset', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('loginmain','frmlogin'),'icncancel','icon',options,'436','12','32','32');
				props = [{"name":"event-click","value":"login.main.cancel.click"},{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"image.class","value":"fa fa-times-circle-o"},{"name":"image.title","value":"Close"}];
				$f.setprop('loginmain','icncancel', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"image.color","value":"lightblue"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"32px"}];
				$f.setstyle('loginmain','icncancel', styles);
			$f.add('loginmain','label7','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmain','label7', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','label7', styles);
			$f.add('loginmain','btnlogin','button','','0','0','150','45');
				props = [{"name":"event-click","value":"login.main.login.click"},{"name":"disabled","value":true},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Login"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginmain','btnlogin', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224488"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"background","value":"linear-gradient(90deg, rgba(1,64,89,1) 0%, rgba(60,160,210,1) 100%);"},{"name":"border","value":"0.5px solid #000"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"30px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"font-size","value":"14px"},{"name":"max-width","value":"150px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"-10px 5px -5px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmain','btnlogin', styles);
			$f.add('loginmain','custom1','div','','13','546','96','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmain"},{"name":"dock","value":"FFFF"},{"name":"title","value":"custom1(validate)"},{"name":"caption","value":""},{"name":"ctype","value":"validate"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-custom"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginmain','custom1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"transparent"},{"name":"font-size","value":"inherit"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"0px solid #bbb"},{"name":"display","value":"inline-block"},{"name":"position","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"pointer-events","value":"inherit"},{"name":"vertical-align","value":"middle"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"}];
				$f.setstyle('loginmain','custom1', styles);
			$f.hide('loginmain','custom1');
			$f.setprop('loginmain','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginmain').enabled ) { $f.model('loginmain').create('loginmain'); }
			$nim.React.build('loginmain');
			$f.refresh('loginmain');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginmain'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['username', 'onchange', 'login.main.username.onchange'],['username', 'onkeyup', 'login.main.username.keyup'],
					['password', 'onchange', 'login.main.password.onchange'],['password', 'onkeyup', 'login.main.password.keyup'],['lbregister', 'onclick', 'login.main.register.click'],['lbforgot', 'onclick', 'login.main.forgot.click'],['lbreset', 'onclick', 'login.main.reset.click'],
					['icncancel', 'onclick', 'login.main.cancel.click'],['btnlogin', 'onclick', 'login.main.login.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginmain', itm[0], itm[1], $nim.fn.findEvent('loginui', 'loginmain', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginmain'].isLoaded = 1;
				App.Dialog['loginmain'].isActivated = 0;
				$f.hide('loginmain');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginmain'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginmain','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginmain','', props);
					styles = [{"name":"body.background-color","value":"TRANSPARENT"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginmain','', styles);
					
					var ctrls = [{"widget":false,"name":"custom1"}];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginmain', itm.name); }
					});
				
					$f.events('loginmain', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginmain','','forceshow').toLowerCase() == 'true') $heap.loginui['loginmain'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginmain');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginmain'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginmain', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginmain'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginmain');
		try {
			if ($k.islastform('loginmain')) { $k.app.unloadwidget('loginmain'); }
			
			var itm, evtArr = [
					['username', 'onchange'],['username', 'onkeyup'],
				['password', 'onchange'],['password', 'onkeyup'],['lbregister', 'onclick'],['lbforgot', 'onclick'],['lbreset', 'onclick'],
				['icncancel', 'onclick'],['btnlogin', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginmain', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginmain'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginmain', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginmain');
			if (App) {
				var dlgItem = App.Dialog['loginmain'], 
					dlgCount = App.Dialog['loginmain'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginmain'}});
			}
		}
		finally {
			App.Dialog['loginmain'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginmain');
			blCancel = $f.events('loginmain', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginmain');
			$k.instance.restore();
			$f.events('loginmain', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginmain'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginmain");
				App.Dialog['loginmain'].isLoaded = 0;
				App.Dialog['loginmain'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginmain');
			if ($k.isformloaded('loginmain') == false) {
				retval = $f.events('loginmain', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginmain");
			
			// Pull DataModel. 
			$k.instance.save('loginmain');
			if ($f.model('loginmain').enabled) { $f.model('loginmain').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginmain'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginmain'].isActivated) {
				$f.events('loginmain', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 

	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
    }
};
$k.wrapallfunctions($heap.loginui['loginmain'].Code, 'loginmain');
 
/** Form Template --------------------------------------
 *  NAME: loginmsg
 *
 * version: 5.0
 **/
$heap.loginui['loginmsg'] = { };
$heap.loginui['loginmsg'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginmsg';
			if (!$heap.loginui[pos.form]) { pos.form = 'loginmsg'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginmsg']);
			instName = $heap.loginui[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginmsg'}});
			}
		}
		finally {
			if (show) { $heap.loginui[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'-999', top:'-999', width:'663', height:'580'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginmsg',pos.left,pos.top,663,580,styles);
			$f.hide('loginmsg');
				props = [{"name":"event-activate","value":"login.msg.maximize"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginmsg','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"rgba(20,20,20,0.50)"},{"name":"font-size","value":""},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"border","value":"none"},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginmsg','', styles);
			
			
			$f.add('loginmsg','label2','label','','0','0','105','12');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmsg','label2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmsg','label2', styles);
			$f.add('loginmsg','label1','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmsg','label1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmsg','label1', styles);
			$f.add('loginmsg','frmlogin','div','','55','538','540','262');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginmsg','frmlogin', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"display","value":"inline-block"},{"name":"left","value":"calc(50% - 270px)"},{"name":"overflow","value":"hidden"},{"name":"padding","value":"20px 60px 30px 60px"},{"name":"position","value":"absolute"},{"name":"top","value":"calc(50% - 130px)"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(80,80,80,.90) 8px 10px 18px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"}];
				$f.setstyle('loginmsg','frmlogin', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginmsg','frmlogin'),'picturex2','imagex',options,'338','-45','219','114');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginmsg','picturex2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 150px 0px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 150px 0px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(80,80,80,.40) 0px 2px 2px 2px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginmsg','picturex2', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginmsg','frmlogin'),'picturex1','imagex',options,'-21','-44','426','169');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginmsg','picturex1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 90px 190px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 95px 190px"},{"name":"div.box-shadow","value":"rgba(80,80,80,.60) -2px 4px 4px 0px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginmsg','picturex1', styles);
			$f.add($f.getinstname('loginmsg','frmlogin'),'infotitle','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmsg','infotitle', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"20px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmsg','infotitle', styles);
			$f.add($f.getinstname('loginmsg','frmlogin'),'infohead','label','','0','0','105','43');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Information:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmsg','infohead', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"36px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"15px 0px 35px 20px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmsg','infohead', styles);
			$f.add($f.getinstname('loginmsg','frmlogin'),'info','label','','0','0','420','89');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"A confirmation link has been sent to your email address."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmsg','info', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"20px"},{"name":"line-height","value":"24px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmsg','info', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('loginmsg','frmlogin'),'icncancel','icon',options,'488','4','32','32');
				props = [{"name":"event-click","value":"login.msg.cancel.click"},{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"image.class","value":"fa fa-times-circle-o"},{"name":"image.title","value":"Close"}];
				$f.setprop('loginmsg','icncancel', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"image.color","value":"lightblue"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"32px"}];
				$f.setstyle('loginmsg','icncancel', styles);
			$f.add('loginmsg','label7','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginmsg','label7', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginmsg','label7', styles);
			$f.add('loginmsg','btnok','button','','338','14','150','45');
				props = [{"name":"event-click","value":"login.msg.ok.click"},{"name":"disabled","value":false},{"name":"form","value":"loginmsg"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Close"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginmsg','btnok', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224488"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"background","value":"linear-gradient(90deg, rgba(1,64,89,1) 0%, rgba(60,160,210,1) 100%);"},{"name":"border","value":"0.5px solid #000"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"30px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"font-size","value":"14px"},{"name":"max-width","value":"160px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(50% - 80px)"},{"name":"div.margin","value":"18px 5px -5px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"calc(50% + 90px)"}];
				$f.setstyle('loginmsg','btnok', styles);
			$f.setprop('loginmsg','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginmsg').enabled ) { $f.model('loginmsg').create('loginmsg'); }
			$nim.React.build('loginmsg');
			$f.refresh('loginmsg');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginmsg'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['icncancel', 'onclick', 'login.msg.cancel.click'],['btnok', 'onclick', 'login.msg.ok.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginmsg', itm[0], itm[1], $nim.fn.findEvent('loginui', 'loginmsg', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginmsg'].isLoaded = 1;
				App.Dialog['loginmsg'].isActivated = 0;
				$f.hide('loginmsg');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginmsg'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginmsg','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginmsg','', props);
					styles = [{"name":"body.background-color","value":"transparent"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#000"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginmsg','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginmsg', itm.name); }
					});
				
					$f.events('loginmsg', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginmsg','','forceshow').toLowerCase() == 'true') $heap.loginui['loginmsg'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginmsg');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginmsg'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginmsg', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginmsg'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginmsg');
		try {
			if ($k.islastform('loginmsg')) { $k.app.unloadwidget('loginmsg'); }
			
			var itm, evtArr = [
					['icncancel', 'onclick'],['btnok', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginmsg', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginmsg'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginmsg', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginmsg');
			if (App) {
				var dlgItem = App.Dialog['loginmsg'], 
					dlgCount = App.Dialog['loginmsg'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginmsg'}});
			}
		}
		finally {
			App.Dialog['loginmsg'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginmsg');
			blCancel = $f.events('loginmsg', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginmsg');
			$k.instance.restore();
			$f.events('loginmsg', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginmsg'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginmsg");
				App.Dialog['loginmsg'].isLoaded = 0;
				App.Dialog['loginmsg'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginmsg');
			if ($k.isformloaded('loginmsg') == false) {
				retval = $f.events('loginmsg', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginmsg");
			
			// Pull DataModel. 
			$k.instance.save('loginmsg');
			if ($f.model('loginmsg').enabled) { $f.model('loginmsg').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginmsg'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginmsg'].isActivated) {
				$f.events('loginmsg', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 

	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
    }
};
$k.wrapallfunctions($heap.loginui['loginmsg'].Code, 'loginmsg');
 
/** Form Template --------------------------------------
 *  NAME: loginpolicy
 *
 * version: 5.0
 **/
$heap.loginui['loginpolicy'] = { };
$heap.loginui['loginpolicy'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginpolicy';
			if (!$heap.loginui[pos.form]) { pos.form = 'loginpolicy'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginpolicy']);
			instName = $heap.loginui[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginpolicy'}});
			}
		}
		finally {
			if (show) { $heap.loginui[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'-999', top:'-999', width:'737', height:'207'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginpolicy',pos.left,pos.top,737,207,styles);
			$f.hide('loginpolicy');
				props = [{"name":"event-activate","value":"login.policy.maximize"},{"name":"event-load","value":"login.policy.loadPrivacy"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginpolicy','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"transparent"},{"name":"font-size","value":""},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginpolicy','', styles);
			
			
			$f.add('loginpolicy','label1','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginpolicy"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginpolicy','label1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginpolicy','label1', styles);
			$f.add('loginpolicy','prvpage','div','','0','0','600','265');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginpolicy"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginpolicy','prvpage', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"none"},{"name":"display","value":"inline-block"},{"name":"height","value":"calc(100% - 65px)"},{"name":"margin","value":"20px 0px 0px 0px"},{"name":"overflow","value":"visible"},{"name":"padding","value":"20px 20px 20px 20px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"min-width","value":"575px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"}];
				$f.setstyle('loginpolicy','prvpage', styles);
			$f.add($f.getinstname('loginpolicy','prvpage'),'infotitle','label-right','','0','0','105','36');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginpolicy"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"PRIVACY STATEMENT"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginpolicy','infotitle', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"24px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"25px 0px 15px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginpolicy','infotitle', styles);
			$f.add($f.getinstname('loginpolicy','prvpage'),'info','label','','0','0','105','622');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginpolicy"},{"name":"dock","value":"TTFF"},{"name":"title","value":""},{"name":"caption","value":"<b>IMPORTANT:</b> PLEASE READ THIS DOCUMENT IN ITS ENTIRETY<br /><br />This End-User License Agreement (hereinafter, \"Agreement\") creates a legally binding Agreement between you, as an end user of our services (hereinafter, \"End User\"), and the following company: Nimble Solutions, LLC (hereinafter, \"Company\"). You will be referred to through second-person pronouns such as \"your\" and \"yours.\" We, the Company, will be referred to with pronouns such as \"us,\" \"our,\" and \"ours.\" Collectively, you and the Company may be referred to as the \"Parties\" and individually as \"Party.\"<br />This license governs the use of all of our software products (hereinafter, \"Software\"), specifically:<br />Nimble IDE: Software program for creating Html and Javascript applications for browser, desktop and mobile platforms.<br />By accessing, downloading, installing, or otherwise using our Software in any way, you agree to be bound by this Agreement in its entirety. If you do not agree, you must cease use of the Software immediately.<br /><br /><b>SOFTWARE LICENSE:</b> When you lawfully access the Software, whether through purchase or other lawful means, we grant you, subject to all of the terms and conditions of this Agreement, a non-exclusive, non-transferable, limited, revocable license to use the Software (\"License\"). This License extends to the use of documentation, data, or information developed by the Company, and other materials which may assist in your use of the Software. This License may not be transferred to any third parties without express, lawful, written permission from the Company and this License terminates upon your cessation of use of the Software.<br />This License shall be applicable to all lawful End Users of the Software, unless a separate written agreement has been executed between you and the Company.<br /><br /><b>LICENSE FEE:</b> The License is provided for a fee, in conjunction with the purchase of the Software. Such fee will be displayed to you prior to your purchase of the Software.<br /><br /><b>RESTRICTIONS:</b> The License provided hereunder is subject to the following additional restrictions:<br />The license must not be transferred or sold to any third party. The license is not valid for software or computer companies or individuals which work for any of Nimble Solutions competitors. All users must agree not to reverse engineer the software in any way.<br /><br /><b>ADDITIONAL LICENSES:</b> The following additional licenses may be available as related to the Software:<br />Educational License: Educational licenses for Nimble IDE are available at a discounted rate. Such license are institution-wide and must be negotiated separately with Nimble Solutions, LLC.<br /><br />Press License: To use Nimble IDE for public press purposes, please contact Nimble Solutions, LLC. Press licenses may be subject to an additional fee.<br /><br /><b>ADDITIONAL TERMS:</b> Additional terms may be applicable to the Parties' relationship with each other, such as the Company Terms <u> </u>Conditions or Terms of Use, the Company Privacy Policy, and any other such written agreements governing your relationship with us. Nothing contained herein is intended to restrict the terms of any other written agreement. Instead, all relevant documents shall be construed as broadly as possible.<br />The Terms <u> </u>Conditions/Terms of Use can be found at the following link: https://www.nimble-ide.com/terms.The Privacy Policy can be found at the following link: https://www.nimble-ide.com/privacy.<br /><br /><b>INTELLECTUAL PROPERTY:</b> You agree that the Software, Company website and all services provided by the Company are the property of the Company, including all copyrights, trademarks, trade secrets, patents, and other intellectual property (\"Company IP\"). You agree that the Company owns all right, title and interest in and to the Company IP and that you will not use the Company IP for any unlawful or infringing purpose. You agree not to reproduce or distribute the Company IP in any way, including electronically or via registration of any new trademarks, trade names, service marks or Uniform Resource Locators (URLs), without express written permission from the Company.<br /><br /><b>ACCEPTABLE USE:</b> You agree not to use the Software for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Software in any way that could damage the Company website, services, or general business of the Company.<br />You further agree not to use the Software:<br />I) To harass, abuse, or threaten others or otherwise violate any person's legal rights;<br />II) To violate any intellectual property rights of the Company or any third party;<br />III) To upload or otherwise disseminate any computer viruses or other software that may damage the property of another;<br />IV) To perpetrate any fraud;<br />V) To engage in or create any unlawful gambling, sweepstakes, or pyramid scheme;<br />VI) To publish or distribute any obscene or defamatory material;<br />VII) To publish or distribute any material that incites violence, hate, or discrimination towards any group;<br />VIII) To unlawfully gather information about others.<br /><br /><b>REVERSE ENGINEERING <u> </u>SECURITY:</b> You agree not to undertake any of the following actions:<br />a) Reverse engineer, or attempt to reverse engineer or disassemble the Software or any code within or related to the Software or the Company website;<br />b) Violate the security of the Software through any unauthorized access, circumvention of encryption or other security tools, data mining or interference to any host, user or network;<br />c) Copy or otherwise distribute copies of the Software unlawfully, such as through any peer-to-peer network or other intellectual property circumvention tool.<br /><br /><b>MAINTENANCE:</b> This License includes Software maintenance and support. Please contact the Company for assistance.<br /><br /><b>INDEMNIFICATION:</b> You agree to defend and indemnify the Company and any of its affiliates (if applicable) and hold us harmless against any and all legal claims and demands, including reasonable attorney's fees, which may arise from or relate to your use or misuse of the Software, your breach of this Agreement, or your conduct or actions. You agree that the Company shall be able to select its own legal counsel and may participate in its own defense, if the Company wishes.<br /><br /><b>SPAM POLICY:</b> You are strictly prohibited from using the Software or any of the Company's services for illegal spam activities, including gathering email addresses and personal information from others or sending any mass commercial emails.<br /><br /><b>SERVICE INTERRUPTIONS:</b> The Company may need to interrupt access to the Software to perform maintenance or emergency services on a scheduled or unscheduled basis. You agree that your access to the Software may be affected by unanticipated or unscheduled downtime, for any reason, but that the Company shall have no liability for any damage or loss caused as a result of such downtime.<br /><br /><b>NO WARRANTIES:</b> You agree that your use of the Software is at your sole and exclusive risk and that the Software is provided on \"As Is\" basis. The Company hereby expressly disclaims any and all express or implied warranties of any kind, including, but not limited to the implied warranty of fitness for a particular purpose and the implied warranty of merchantability. The Company makes no warranties that the Software will meet your needs or that access to the Software will be uninterrupted or error-free. The Company also makes no warranties as to the reliability or accuracy of any information contained within the Software. You agree that any damage that may occur to you, through your computer system, or as a result of loss of your data from your use of the Software is your sole responsibility and that the Company is not liable for any such damage or loss.<br /><br /><b>LIMITATION ON LIABILITY:</b> The Company is not liable for any damages that may occur to you as a result of your use of the Software, to the fullest extent permitted by law. The maximum liability of the Company arising from or relating to this Agreement is limited to the greater of one hundred ($100) US Dollars or the amount you paid to the Company in the last six (6) months. This section applies to any and all claims by you, including, but not limited to, lost profits or revenues, consequential or punitive damages, negligence, strict liability, fraud, or torts of any kind.<br /><br /><b>DISPUTE RESOLUTION <u> </u>GOVERNING LAW:</b> All disputes will be resolved as provided for in the Terms <u> </u>Conditions or Terms of Service. Should Company not have a live version of any Terms document or any other provisions in any user-facing document covering dispute resolution and governing law, the laws of Florida shall govern any matter or dispute relating to or arising from this EULA or the Company's relationship with End User.<br /><br /><b>ASSIGNMENT:</b> This Agreement, or the rights granted hereunder, may not be assigned, sold, leased or otherwise transferred in whole or part by you. Should this Agreement, or the rights granted hereunder, by assigned, sold, leased or otherwise transferred by the Company, the rights and liabilities of the Company will bind and inure to any assignees, administrators, successors, and executors.<br /><br /><b>HEADINGS FOR CONVENIENCE ONLY:</b> Headings of parts and sub-parts under this Agreement are for convenience and organization, only. Headings shall not affect the meaning of any provisions of this Agreement.<br /><br /><b>NO AGENCY, PARTNERSHIP OR JOINT VENTURE:</b> No agency, partnership, or joint venture has been created between the Parties as a result of this Agreement. No Party has any authority to bind the other to third parties.<br /><br /><b>FORCE MAJEURE:</b> The Company is not liable for any failure to perform due to causes beyond its reasonable control including, but not limited to, acts of God, acts of civil authorities, acts of military authorities, riots, embargoes, acts of nature and natural disasters, and other acts which may be due to unforeseen circumstances.<br /><br /><b>ELECTRONIC COMMUNICATIONS PERMITTED:</b> Electronic communications are permitted to both Parties under this Agreement, including e-mail or fax. For any questions or concerns, please email us at the following address: nimblejs@nimble-ide.com."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginpolicy','info', props);
				styles = [{"name":"color","value":"#5a5a5a"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"height","value":"calc(100% - 140px)"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"line-height","value":"20px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"top"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 35px 0px"},{"name":"div.overflow-y","value":"scroll"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginpolicy','info', styles);
			$f.add($f.getinstname('loginpolicy','prvpage'),'btnagree','button','','0','0','150','45');
				props = [{"name":"event-click","value":"login.policy.agree.click"},{"name":"disabled","value":false},{"name":"form","value":"loginpolicy"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Close"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginpolicy','btnagree', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224488"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"background","value":"linear-gradient(90deg, rgba(1,64,89,1) 0%, rgba(60,160,210,1) 100%);"},{"name":"border","value":"0.5px solid #000"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"30px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"font-size","value":"14px"},{"name":"max-width","value":"150px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"-10px 5px -5px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginpolicy','btnagree', styles);
			options = 'media/img_missing.png';
			$f.add('loginpolicy','icnback','icon',options,'341','30','32','32');
				props = [{"name":"event-click","value":"login.policy.back.click"},{"name":"disabled","value":false},{"name":"form","value":"loginpolicy"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-left","value":"!!!!"},{"name":"image.class","value":"fa fa-arrow-circle-left"},{"name":"image.title","value":"arrow-circle-left"}];
				$f.setprop('loginpolicy','icnback', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"32px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.left","value":"calc(50% - 290px)"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.top","value":"30px"},{"name":"image.color","value":"lightblue"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"32px"}];
				$f.setstyle('loginpolicy','icnback', styles);
			$f.setprop('loginpolicy','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginpolicy').enabled ) { $f.model('loginpolicy').create('loginpolicy'); }
			$nim.React.build('loginpolicy');
			$f.refresh('loginpolicy');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginpolicy'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['btnagree', 'onclick', 'login.policy.agree.click'],['icnback', 'onclick', 'login.policy.back.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginpolicy', itm[0], itm[1], $nim.fn.findEvent('loginui', 'loginpolicy', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginpolicy'].isLoaded = 1;
				App.Dialog['loginpolicy'].isActivated = 0;
				$f.hide('loginpolicy');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginpolicy'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginpolicy','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginpolicy','', props);
					styles = [{"name":"body.background-color","value":"TRANSPARENT"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.overflow","value":"visible"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginpolicy','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginpolicy', itm.name); }
					});
				
					$f.events('loginpolicy', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginpolicy','','forceshow').toLowerCase() == 'true') $heap.loginui['loginpolicy'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginpolicy');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginpolicy'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginpolicy', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginpolicy'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginpolicy');
		try {
			if ($k.islastform('loginpolicy')) { $k.app.unloadwidget('loginpolicy'); }
			
			var itm, evtArr = [
					['btnagree', 'onclick'],['icnback', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginpolicy', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginpolicy'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginpolicy', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginpolicy');
			if (App) {
				var dlgItem = App.Dialog['loginpolicy'], 
					dlgCount = App.Dialog['loginpolicy'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginpolicy'}});
			}
		}
		finally {
			App.Dialog['loginpolicy'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginpolicy');
			blCancel = $f.events('loginpolicy', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginpolicy');
			$k.instance.restore();
			$f.events('loginpolicy', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginpolicy'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginpolicy");
				App.Dialog['loginpolicy'].isLoaded = 0;
				App.Dialog['loginpolicy'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginpolicy');
			if ($k.isformloaded('loginpolicy') == false) {
				retval = $f.events('loginpolicy', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginpolicy");
			
			// Pull DataModel. 
			$k.instance.save('loginpolicy');
			if ($f.model('loginpolicy').enabled) { $f.model('loginpolicy').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginpolicy'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginpolicy'].isActivated) {
				$f.events('loginpolicy', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Load: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
    }
};
$k.wrapallfunctions($heap.loginui['loginpolicy'].Code, 'loginpolicy');
 
/** Form Template --------------------------------------
 *  NAME: loginregister
 *
 * version: 5.0
 **/
$heap.loginui['loginregister'] = { };
$heap.loginui['loginregister'] = {
    _flatten: true,
	_private: true,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginregister';
			if (!$heap.loginui[pos.form]) { pos.form = 'loginregister'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginregister']);
			instName = $heap.loginui[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginregister'}});
			}
		}
		finally {
			if (show) { $heap.loginui[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'708', height:'604'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginregister',pos.left,pos.top,708,604,styles);
			$f.hide('loginregister');
				props = [{"name":"event-activate","value":"login.register.maximize"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"_private","value":"true"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginregister','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"transparent"},{"name":"font-size","value":""},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginregister','', styles);
			
			
			$f.add('loginregister','label2','label','','0','0','105','90');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','label2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.height","value":"calc(50% - 240px)"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','label2', styles);
			$f.add('loginregister','label1','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','label1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','label1', styles);
			$f.add('loginregister','frmlogin','div','','0','0','480','450');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginregister','frmlogin', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"none"},{"name":"display","value":"inline-block"},{"name":"margin","value":"10px 0px -20px 0px"},{"name":"overflow","value":"hidden"},{"name":"padding","value":"20px 60px 30px 60px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"}];
				$f.setstyle('loginregister','frmlogin', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginregister','frmlogin'),'picturex2','imagex',options,'364','-45','152','114');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginregister','picturex2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 150px 0px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 150px 0px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(80,80,80,.40) 0px 2px 2px 2px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginregister','picturex2', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginregister','frmlogin'),'picturex1','imagex',options,'-21','-12','399','137');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginregister','picturex1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 90px 180px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 95px 180px"},{"name":"div.box-shadow","value":"rgba(80,80,80,.60) -1px 4px 4px 0px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginregister','picturex1', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'label8','label','','0','0','105','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"New user?"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','label8', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"22px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 5px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','label8', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'label5','label','','0','0','105','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Register:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','label5', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"40px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 45px 20px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','label5', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'lbusername','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Username:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','lbusername', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','lbusername', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'username','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.register.username.onchange"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','username', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','username', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'lbemail','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Email:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','lbemail', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','lbemail', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'email','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.register.email.onchange"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','email', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','email', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'lbpassword','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Password:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','lbpassword', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','lbpassword', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'password','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.register.password.onchange"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','password', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','password', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'lbconfirm','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Confirm password:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','lbconfirm', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','lbconfirm', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'confirm','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.register.confirm.onchange"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginregister','confirm', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','confirm', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('loginregister','frmlogin'),'icncancel','icon',options,'436','12','32','32');
				props = [{"name":"event-click","value":"login.register.cancel.click"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"image.class","value":"fa fa-times-circle-o"},{"name":"image.title","value":"Close"}];
				$f.setprop('loginregister','icncancel', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"image.color","value":"lightblue"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"32px"}];
				$f.setstyle('loginregister','icncancel', styles);
			$f.add($f.getinstname('loginregister','frmlogin'),'license','label-right','','0','0','105','16');
				props = [{"name":"event-click","value":"login.register.license.click"},{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"View Privacy Statement"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','license', props);
				styles = [{"name":"color","value":"#224488"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"12px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"center"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"10px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','license', styles);
			$f.add('loginregister','label7','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginregister','label7', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','label7', styles);
			$f.add('loginregister','btnregister','button','','0','0','150','45');
				props = [{"name":"event-click","value":"login.register.register.click"},{"name":"disabled","value":true},{"name":"form","value":"loginregister"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Register"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginregister','btnregister', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224488"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"background","value":"linear-gradient(90deg, rgba(1,64,89,1) 0%, rgba(60,160,210,1) 100%);"},{"name":"border","value":"0.5px solid #000"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"30px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"font-size","value":"14px"},{"name":"max-width","value":"160px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"-10px 5px -5px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginregister','btnregister', styles);
			$f.setprop('loginregister','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginregister').enabled ) { $f.model('loginregister').create('loginregister'); }
			$nim.React.build('loginregister');
			$f.refresh('loginregister');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginregister'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['username', 'onchange', 'login.register.username.onchange'],['email', 'onchange', 'login.register.email.onchange'],['password', 'onchange', 'login.register.password.onchange'],
					['confirm', 'onchange', 'login.register.confirm.onchange'],['icncancel', 'onclick', 'login.register.cancel.click'],['license', 'onclick', 'login.register.license.click'],['btnregister', 'onclick', 'login.register.register.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginregister', itm[0], itm[1], $nim.fn.findEvent('loginui', 'loginregister', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginregister'].isLoaded = 1;
				App.Dialog['loginregister'].isActivated = 0;
				$f.hide('loginregister');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginregister'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginregister','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginregister','', props);
					styles = [{"name":"body.background-color","value":"TRANSPARENT"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginregister','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginregister', itm.name); }
					});
				
					$f.events('loginregister', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginregister','','forceshow').toLowerCase() == 'true') $heap.loginui['loginregister'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginregister');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginregister'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginregister', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginregister'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginregister');
		try {
			if ($k.islastform('loginregister')) { $k.app.unloadwidget('loginregister'); }
			
			var itm, evtArr = [
					['username', 'onchange'],['email', 'onchange'],['password', 'onchange'],
				['confirm', 'onchange'],['icncancel', 'onclick'],['license', 'onclick'],['btnregister', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginregister', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginregister'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginregister', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginregister');
			if (App) {
				var dlgItem = App.Dialog['loginregister'], 
					dlgCount = App.Dialog['loginregister'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginregister'}});
			}
		}
		finally {
			App.Dialog['loginregister'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginregister');
			blCancel = $f.events('loginregister', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginregister');
			$k.instance.restore();
			$f.events('loginregister', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginregister'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginregister");
				App.Dialog['loginregister'].isLoaded = 0;
				App.Dialog['loginregister'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginregister');
			if ($k.isformloaded('loginregister') == false) {
				retval = $f.events('loginregister', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginregister");
			
			// Pull DataModel. 
			$k.instance.save('loginregister');
			if ($f.model('loginregister').enabled) { $f.model('loginregister').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginregister'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginregister'].isActivated) {
				$f.events('loginregister', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
    }
};
$k.wrapallfunctions($heap.loginui['loginregister'].Code, 'loginregister');
 
/** Form Template --------------------------------------
 *  NAME: loginreset
 *
 * version: 5.0
 **/
$heap.loginui['loginreset'] = { };
$heap.loginui['loginreset'] = {
    _flatten: true,
	_private: true,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginreset';
			if (!$heap.loginui[pos.form]) { pos.form = 'loginreset'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginreset']);
			instName = $heap.loginui[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginreset'}});
			}
		}
		finally {
			if (show) { $heap.loginui[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'0', top:'0', width:'753', height:'587'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginreset',pos.left,pos.top,753,587,styles);
			$f.hide('loginreset');
				props = [{"name":"event-activate","value":"login.reset.maximize"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"_private","value":"true"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginreset','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"transparent"},{"name":"font-size","value":""},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginreset','', styles);
			
			
			$f.add('loginreset','label2','label','','0','0','105','90');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','label2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.height","value":"calc(50% - 220px)"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','label2', styles);
			$f.add('loginreset','label1','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','label1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','label1', styles);
			$f.add('loginreset','frmlogin','div','','0','0','480','434');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginreset','frmlogin', props);
				styles = [{"name":"left","value":""},{"name":"top","value":""},{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"border","value":"none"},{"name":"display","value":"inline-block"},{"name":"margin","value":"10px 0px -20px 0px"},{"name":"overflow","value":"hidden"},{"name":"padding","value":"40px 60px 30px 60px"},{"name":"position","value":"relative"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"}];
				$f.setstyle('loginreset','frmlogin', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginreset','frmlogin'),'picturex2','imagex',options,'341','-5','178','114');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginreset','picturex2', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 150px 0px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 150px 0px"},{"name":"div.border","value":"none"},{"name":"div.box-shadow","value":"rgba(80,80,80,.40) 0px 2px 2px 2px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginreset','picturex2', styles);
			options = 'media/blue.png';
			$f.add($f.getinstname('loginreset','frmlogin'),'picturex1','imagex',options,'-18','-4','399','169');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-graphicx"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"}];
				$f.setprop('loginreset','picturex1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"0px 0px 85px 190px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.border-radius","value":"0px 0px 95px 185px"},{"name":"div.box-shadow","value":"rgba(80,80,80,.60) -2px 4px 4px 0px"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"div.z-index","value":"0"}];
				$f.setstyle('loginreset','picturex1', styles);
			$f.add($f.getinstname('loginreset','frmlogin'),'label8','label','','0','0','105','25');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Update your password?"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','label8', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"22px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"15px 0px 5px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','label8', styles);
			$f.add($f.getinstname('loginreset','frmlogin'),'label5','label','','0','0','105','48');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Enter code."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','label5', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"40px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.left","value":"0px"},{"name":"caption.position","value":"relative"},{"name":"caption.text-align","value":"left"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 60px 20px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','label5', styles);
			$f.add($f.getinstname('loginreset','frmlogin'),'lbauthcode','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Authorization code:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lbauthcode', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','lbauthcode', styles);
			$f.add($f.getinstname('loginreset','frmlogin'),'code','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.reset.code.onchange"},{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginreset','code', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','code', styles);
			$f.add($f.getinstname('loginreset','frmlogin'),'lbnewpassword','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Enter new password:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lbnewpassword', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','lbnewpassword', styles);
			$f.add($f.getinstname('loginreset','frmlogin'),'password','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.reset.password.onchange"},{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginreset','password', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','password', styles);
			$f.add($f.getinstname('loginreset','frmlogin'),'lbconfirm','label','','0','0','105','21');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Confirm password:"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','lbconfirm', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"5px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','lbconfirm', styles);
			$f.add($f.getinstname('loginreset','frmlogin'),'confirm','textbox','','0','0','105','31');
				props = [{"name":"event-change","value":"login.reset.confirm.onchange"},{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-textbox"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"}];
				$f.setprop('loginreset','confirm', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"#eaeaea"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"outline","value":"none"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"2px"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0.5px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 10px 0px"},{"name":"div.padding","value":"0.5px 5px 0.5px 5px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','confirm', styles);
			options = 'media/img_missing.png';
			$f.add($f.getinstname('loginreset','frmlogin'),'icncancel','icon',options,'436','12','32','32');
				props = [{"name":"event-click","value":"login.reset.cancel.click"},{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-icon"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"image.class","value":"fa fa-times-circle-o"},{"name":"image.title","value":"Close"}];
				$f.setprop('loginreset','icncancel', props);
				styles = [{"name":"color","value":"#add8e6"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"32px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"},{"name":"caption.position","value":"relative"},{"name":"div.display","value":"inline-block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"absolute"},{"name":"image.color","value":"lightblue"},{"name":"image.display","value":"block"},{"name":"image.font-size","value":"32px"}];
				$f.setstyle('loginreset','icncancel', styles);
			$f.add('loginreset','label7','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginreset','label7', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','label7', styles);
			$f.add('loginreset','btnupdate','button','','0','0','160','45');
				props = [{"name":"event-click","value":"login.reset.update.click"},{"name":"disabled","value":true},{"name":"form","value":"loginreset"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Update password"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginreset','btnupdate', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224488"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"background","value":"linear-gradient(90deg, rgba(1,64,89,1) 0%, rgba(60,160,210,1) 100%);"},{"name":"border","value":"0.5px solid #000"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"30px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"font-size","value":"14px"},{"name":"max-width","value":"160px"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"-10px 5px -5px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginreset','btnupdate', styles);
			$f.setprop('loginreset','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginreset').enabled ) { $f.model('loginreset').create('loginreset'); }
			$nim.React.build('loginreset');
			$f.refresh('loginreset');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginreset'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['code', 'onchange', 'login.reset.code.onchange'],['password', 'onchange', 'login.reset.password.onchange'],['confirm', 'onchange', 'login.reset.confirm.onchange'],
					['icncancel', 'onclick', 'login.reset.cancel.click'],['btnupdate', 'onclick', 'login.reset.update.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginreset', itm[0], itm[1], $nim.fn.findEvent('loginui', 'loginreset', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginreset'].isLoaded = 1;
				App.Dialog['loginreset'].isActivated = 0;
				$f.hide('loginreset');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginreset'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginreset','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginreset','', props);
					styles = [{"name":"body.background-color","value":"TRANSPARENT"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginreset','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginreset', itm.name); }
					});
				
					$f.events('loginreset', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginreset','','forceshow').toLowerCase() == 'true') $heap.loginui['loginreset'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginreset');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginreset'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginreset', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginreset'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginreset');
		try {
			if ($k.islastform('loginreset')) { $k.app.unloadwidget('loginreset'); }
			
			var itm, evtArr = [
					['code', 'onchange'],['password', 'onchange'],['confirm', 'onchange'],
				['icncancel', 'onclick'],['btnupdate', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginreset', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginreset'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginreset', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginreset');
			if (App) {
				var dlgItem = App.Dialog['loginreset'], 
					dlgCount = App.Dialog['loginreset'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginreset'}});
			}
		}
		finally {
			App.Dialog['loginreset'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginreset');
			blCancel = $f.events('loginreset', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginreset');
			$k.instance.restore();
			$f.events('loginreset', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginreset'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginreset");
				App.Dialog['loginreset'].isLoaded = 0;
				App.Dialog['loginreset'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginreset');
			if ($k.isformloaded('loginreset') == false) {
				retval = $f.events('loginreset', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginreset");
			
			// Pull DataModel. 
			$k.instance.save('loginreset');
			if ($f.model('loginreset').enabled) { $f.model('loginreset').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginreset'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginreset'].isActivated) {
				$f.events('loginreset', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
    }
};
$k.wrapallfunctions($heap.loginui['loginreset'].Code, 'loginreset');
 
/** Form Template --------------------------------------
 *  NAME: loginthankyou
 *
 * version: 5.0
 **/
$heap.loginui['loginthankyou'] = { };
$heap.loginui['loginthankyou'] = {
    _flatten: true,
	_private: false,
	isLoaded: 0,
    isActivated: 0,
	count: 0,
	New: function(pos, show) {
		var instName;
		try {
			if (!KERNEL.enabled) return;
			if (!pos) {
				pos = { left: 0, top: 0, target: FORMS.Target };
			}
			pos.form = pos.form ? pos.form : 'loginthankyou';
			if (!$heap.loginui[pos.form]) { pos.form = 'loginthankyou'; }
			
			$k.instance.newform(pos.form, App.Dialog['loginthankyou']);
			instName = $heap.loginui[pos.form].Load(pos);
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'New', target: {id: 'loginthankyou'}});
			}
		}
		finally {
			if (show) { $heap.loginui[pos.form].Show(pos); }
			$k.instance.setbyelemid(instName);
			
			return instName;
		}
	},
	Menu: function(cmd) {
	},
    Load: function(pos) {
		var widgTarget = "", instID = "", options, props, styles, defPos;
		try {
			
			if (!KERNEL.enabled) return;		
			if (pos && pos.target) { FORMS.Target = pos.target; }
			if (App.Vars.running == false) { App.Vars.running = true; }
			if (App.target) { App.target = FORMS.Target; }
			
			 
			styles = ( null );
			defPos = {target: 'desktop' + DESKTOP.currentDesktop, dock:'RRRR', left:'-999', top:'-999', width:'709', height:'503'};
			pos = $k.instance.validatepos(pos, defPos);
			instID = $f.surface('loginthankyou',pos.left,pos.top,709,503,styles);
			$f.hide('loginthankyou');
				props = [{"name":"event-activate","value":"login.thankyou.maximize"},{"name":"body.version","value":"v5.0"},{"name":"autosize","value":"false"},{"name":"disabled","value":false},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"clipmenu","value":"true"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"flattenonpull","value":"true"},{"name":"ignorezorder","value":"false"},{"name":"output","value":"normal"},{"name":"shadow","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-form"},{"name":"toggleonflip","value":"true"},{"name":"useastheme","value":"false"},{"name":"watch","value":"false"}];
				$f.setprop('loginthankyou','', props);
				styles = [{"name":"color","value":"#eeeeee"},{"name":"background-color","value":"transparent"},{"name":"font-size","value":""},{"name":"font-family","value":"inherit"},{"name":"font-weight","value":"normal"},{"name":"visibility","value":"visible"},{"name":"displaymode","value":""},{"name":"font-style","value":"normal"},{"name":"pointer-events","value":"auto"},{"name":"z-index","value":"2"}];
				$f.setstyle('loginthankyou','', styles);
			
			
			$f.add('loginthankyou','label1','label','','0','0','105','1');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginthankyou"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginthankyou','label1', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"14px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginthankyou','label1', styles);
			$f.add('loginthankyou','frmlogin','div','','74','91','546','350');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginthankyou"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":""},{"name":"ctype","value":"frame"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-frame"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginthankyou','frmlogin', props);
				styles = [{"name":"color","value":"#000000"},{"name":"border-spacing","value":"1px"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#ffffff"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"absolute"},{"name":"border","value":"none"},{"name":"display","value":"inline-block"},{"name":"left","value":"calc(50% - 280px)"},{"name":"overflow","value":"visible"},{"name":"padding","value":"20px 20px 20px 20px"},{"name":"position","value":"absolute"},{"name":"top","value":"calc(50% - 160px)"},{"name":"visibility","value":"visible"},{"name":"border-radius","value":"7px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"box-sizing","value":"border-box"},{"name":"font-size","value":"14px"},{"name":"max-height","value":"350px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"center"}];
				$f.setstyle('loginthankyou','frmlogin', styles);
			$f.add($f.getinstname('loginthankyou','frmlogin'),'infotitle','label','','0','0','105','46');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginthankyou"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"THANK YOU!"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginthankyou','infotitle', props);
				styles = [{"name":"color","value":"#000000"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"bold"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"24px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"25px 0px 15px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginthankyou','infotitle', styles);
			$f.add($f.getinstname('loginthankyou','frmlogin'),'info','label','','0','0','105','622');
				props = [{"name":"disabled","value":false},{"name":"form","value":"loginthankyou"},{"name":"dock","value":"TTFF"},{"name":"title","value":""},{"name":"caption","value":"Thank you for your support. You should be receiving an email with details and receipt of your purchase."},{"name":"json","value":"{}"},{"name":"extend","value":"<LB>'react':'<LF>'<RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"scaletype","value":"false"},{"name":"sizeable","value":"false"},{"name":"theme","value":"nimble-label"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-height","value":"!!!!"},{"name":"lock-pos","value":"!!!!"},{"name":"lock-width","value":"!!!!"},{"name":"scale-cpl","value":"25"}];
				$f.setprop('loginthankyou','info', props);
				styles = [{"name":"color","value":"#5a5a5a"},{"name":"background-color","value":"transparent"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"block"},{"name":"display","value":"table"},{"name":"height","value":"calc(100% - 170px)"},{"name":"padding","value":"0px 0px"},{"name":"visibility","value":"visible"},{"name":"border-style","value":"solid"},{"name":"border-width","value":"0px"},{"name":"font-size","value":"18px"},{"name":"pointer-events","value":"inherit"},{"name":"text-align","value":"left"},{"name":"caption.display","value":"table-cell"},{"name":"caption.line-height","value":"145%"},{"name":"caption.position","value":"relative"},{"name":"caption.vertical-align","value":"middle"},{"name":"caption.width","value":"auto"},{"name":"div.display","value":"block"},{"name":"div.margin","value":"0px 0px 35px 0px"},{"name":"div.overflow-y","value":"auto"},{"name":"div.padding","value":"20px 20px 20px 20px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginthankyou','info', styles);
			$f.add($f.getinstname('loginthankyou','frmlogin'),'btnagree','button','','0','0','150','45');
				props = [{"name":"event-click","value":"login.thankyou.agree.click"},{"name":"disabled","value":false},{"name":"form","value":"loginthankyou"},{"name":"dock","value":"FFFF"},{"name":"title","value":""},{"name":"caption","value":"Home"},{"name":"json","value":"{}"},{"name":"extend","value":"<LB><RB>"},{"name":"bind","value":"false"},{"name":"donottheme","value":"false"},{"name":"dragable","value":"false"},{"name":"sizeable","value":"false"},{"name":"tag","value":"-"},{"name":"theme","value":"nimble-button"},{"name":"watch","value":"false"},{"name":"xdragrange","value":"-1; -1"},{"name":"ydragrange","value":"-1; -1"},{"name":"lock-pos","value":"!!!!"}];
				$f.setprop('loginthankyou','btnagree', props);
				styles = [{"name":"color","value":"#ffffff"},{"name":"border-width","value":"0px"},{"name":"background-color","value":"#224488"},{"name":"font-style","value":"normal"},{"name":"font-family","value":"verdana, geneva, sans-serif"},{"name":"font-weight","value":"normal"},{"name":"displaymode","value":"inline-block"},{"name":"background","value":"linear-gradient(90deg, rgba(1,64,89,1) 0%, rgba(60,160,210,1) 100%);"},{"name":"border","value":"0.5px solid #000"},{"name":"padding","value":"2px 7.5px"},{"name":"visibility","value":"visible"},{"name":"border-color","value":"#bbb"},{"name":"border-radius","value":"30px"},{"name":"box-shadow","value":"rgba(80,80,80,.40) 3px 8px 18px 0px"},{"name":"font-size","value":"14px"},{"name":"max-width","value":"150px"},{"name":"pointer-events","value":"inherit"},{"name":"caption.position","value":"absolute"},{"name":"caption.text-align","value":"center"},{"name":"caption.top","value":"calc(50% - 0.6em)"},{"name":"caption.width","value":"calc(100% - 15px)"},{"name":"div.display","value":"inline-block"},{"name":"div.margin","value":"-10px 5px -5px 5px"},{"name":"div.padding","value":"0px 0px 0px 0px"},{"name":"div.pointer-events","value":"inherit"},{"name":"div.position","value":"relative"}];
				$f.setstyle('loginthankyou','btnagree', styles);
			$f.setprop('loginthankyou','','dock',pos.dock);
			
			widgTarget = instID;
			$k.instance.setbyelemid(widgTarget);
			
			// Attach DATABIND Events ----------------
			if ( $f.model('loginthankyou').enabled ) { $f.model('loginthankyou').create('loginthankyou'); }
			$nim.React.build('loginthankyou');
			$f.refresh('loginthankyou');
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Load', target: {id: 'loginthankyou'}});
			}
		}
		finally {
			try {
				// Attach Form Events --------------------
				
				var itm, evnt, evtArr = [
						['info', 'onclick', 'info_OnClick'],['btnagree', 'onclick', 'login.thankyou.agree.click']
				];
				for (var i = 0; i < evtArr.length; i++) {
					itm = evtArr[i]; 
					$f.setevent('loginthankyou', itm[0], itm[1], $nim.fn.findEvent('loginui', 'loginthankyou', evtArr[i]));
				}
				
				if (App.InstName == "") { App.InstName = instID; }
				App.Dialog['loginthankyou'].isLoaded = 1;
				App.Dialog['loginthankyou'].isActivated = 0;
				$f.hide('loginthankyou');
			}
			catch (err) {
				if ($k.errhandler) {
					$k.errhandler(err, {type: 'Attach Events', target: {id: 'loginthankyou'}});
				}
			}
			finally {
				// Attach WIDGETS To Dialog ----------------
				var list = $nim.Load32.Clear();
				$nim.Load32.onComplete(function() {
					var styles, props;
					$k.instance.setbyelemid(widgTarget);
					if ('') $f.alter.view.set('loginthankyou','', false, true);
				
					props = [{"name":"body.version","value":"v5.0"}];
					$f.setprop('loginthankyou','', props);
					styles = [{"name":"body.background-color","value":"TRANSPARENT"},{"name":"body.box-sizing","value":"border-box"},{"name":"body.color","value":"#eeeeee"},{"name":"body.text-align","value":"center"},{"name":"body.vertical-align","value":""}];
					$f.setstyle('loginthankyou','', styles);
					
					var ctrls = [];
					ctrls.forEach(function(itm) {
						if (itm.widget) { $f.hide(itm.name); } else { $f.hide('loginthankyou', itm.name); }
					});
				
					$f.events('loginthankyou', 'Load')(widgTarget, widgTarget.resolveName());
					$nim.Load32.Clear(true);
					$k.instance.setbyelemid(widgTarget);
					if ($f.getprop('loginthankyou','','forceshow').toLowerCase() == 'true') $heap.loginui['loginthankyou'].Show(pos);
					return;
				});
				if ($nim.Load32.list[list].length > 0) {
					$nim.Load32.ArrayLoad(list, 0);
					return instID;
				} else { $nim.Load32.Load_Complete(list); }
				
				$k.instance.setbyelemid(widgTarget);
				return instID;
			}
		}
    },
	Activate: function() {
		var instID = $k.instance.save('loginthankyou');
		try {
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Activate', target: {id: 'loginthankyou'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			$f.events('loginthankyou', 'Activate')(instID, instID.resolveName());
			App.Dialog['loginthankyou'].isActivated = 1;
			$k.instance.restore();
		}
	},
	BeforeUnload: function() {
		var blCancel = false;
		var instID = $k.instance.save('loginthankyou');
		try {
			if ($k.islastform('loginthankyou')) { $k.app.unloadwidget('loginthankyou'); }
			
			var itm, evtArr = [
					['info', 'onclick'],['btnagree', 'onclick']
			];
			for (var i = 0; i < evtArr.length; i++) {
				itm = evtArr[i]; $f.setevent('loginthankyou', itm[0], itm[1], null);
			}
			
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'BeforeUnload', target: {id: 'loginthankyou'}});
			}
		}
		finally {
			$k.instance.setbyelemid(instID);
			blCancel = $f.events('loginthankyou', 'QueryUnload')(instID, instID.resolveName());
			$k.instance.restore();
		}
		return blCancel;
	},
	UnloadAll: function() {
		try {
			$k.instance.save('loginthankyou');
			if (App) {
				var dlgItem = App.Dialog['loginthankyou'], 
					dlgCount = App.Dialog['loginthankyou'].count; 
					
				for (var x = dlgCount; x >= 0; x--) {
					KERNEL.formInst = x;
					dlgItem.Unload();
				}
			}
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'UnloadAll', target: {id: 'loginthankyou'}});
			}
		}
		finally {
			App.Dialog['loginthankyou'].count = 0;
			$k.instance.restore();
			KERNEL.formInst = 0;
		}
	},
	Unload: function() {
		var blCancel = false;
		try {
			var instID = $k.instance.save('loginthankyou');
			blCancel = $f.events('loginthankyou', 'QueryUnload')();
			if (blCancel) {
				return blCancel;
			}
			
			$k.instance.save('loginthankyou');
			$k.instance.restore();
			$f.events('loginthankyou', 'Unload')(instID, instID.resolveName());
		}
		catch (err) {
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Unload', target: {id: 'loginthankyou'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!blCancel) {
				FORMS.sysUnload("loginthankyou");
				App.Dialog['loginthankyou'].isLoaded = 0;
				App.Dialog['loginthankyou'].isActivated = 0;
				
				if (App) {
					$k.instance.setbyelemid(KERNEL.curId);
					var elem, dlgName = "";
					
					if (!$k.isanyformloaded()) {
						if (!App.App.exiting) { App.End(); }
					}
				}
			}
		}
	},
    Show: function(pos) {
		var retval = "";
		try {
			if (!KERNEL.enabled) return;
			var instID = $k.instance.save('loginthankyou');
			if ($k.isformloaded('loginthankyou') == false) {
				retval = $f.events('loginthankyou', 'Load')(pos);
			}
			
			$k.instance.restore();
			$f.show("loginthankyou");
			
			// Pull DataModel. 
			$k.instance.save('loginthankyou');
			if ($f.model('loginthankyou').enabled) { $f.model('loginthankyou').pull(); }
		}
		catch(err) { 
			if ($k.errhandler) {
				$k.errhandler(err, {type: 'Show', target: {id: 'loginthankyou'}});
			}
		}
		finally {
			$k.instance.restore();
			if (!App.Dialog['loginthankyou'].isActivated) {
				$f.events('loginthankyou', 'Activate')();
			}
			return retval;
		}
	},
	Code: { 
	},
	Widgets: { },
	Views: { }, 
	Events: {
		form_Activate: function(event, item) { 
			// Your Code Here.. ---
			// -------------------- 

		},
		info_OnClick: function(e, itm) { 
			
		}//-INFO_ONCLICK
    }
};
$k.wrapallfunctions($heap.loginui['loginthankyou'].Code, 'loginthankyou');
 
// Create New App Instance -----------------------------
var _config = {
	namespace: 'loginui',
	login: {id: 'ef127044-689ebd75', email: 'tye.lee@nimble-ide.com'},
	
	multiple: false,
	postbox: false,
	mvc: true,
	
	theme: 'v4.0',
	size: 362388,
	canvas: {width: 2048, height: 1101},
	productname: 'nimble App',
	copyright: '(c) 2024',
	compiledon: '01/18/2025 07:51 pm',
	version: '1.0',
	description: 'Created with nimble-ide v5 for Javascript.',
	author: '(Your Name Here)',
	email: 'nimblejs@gmail.com',
	homepage: 'https://www.nimble-ide.com',
	startform: 'loginmain',
	palette: '"color50":"#e1f5fe","color100":"#b3e5fc","color200":"#81d4fa","color300":"#4fc3f7","color400":"#29b6f6","color500":"#03a9f4","color600":"#039be5","color700":"#0288d1","color800":"#0277bd","color900":"#01579b","colora100":"#80d8ff","colora200":"#40c4ff","colora400":"#00b0ff","colora700":"#0091ea","b50":"#fafafa","b100":"#f5f5f5","b200":"#eeeeee","b300":"#e0e0e0","b400":"#bdbdbd","b500":"#9e9e9e","b600":"#757575","b700":"#616161","b800":"#424242","b900":"#212121","br50":"#efebe9","br100":"#d7ccc8","br200":"#bcaaa4","br300":"#a1887f","br400":"#8d6e63","br500":"#795548","br600":"#6d4c41","br700":"#5d4037","br800":"#4e342e","br900":"#3e2723","bg50":"#eceff1","bg100":"#cfd8dc","bg200":"#b0bec5","bg300":"#90a4ae","bg400":"#78909c","bg500":"#607d8b","bg600":"#546e7a","bg700":"#455a64","bg800":"#37474f","bg900":"#263238"',
	
	// METHODS
	dialog: {
		'loginconfirm': $k.instance.newobject($heap.loginui['loginconfirm']),
		'loginforgot': $k.instance.newobject($heap.loginui['loginforgot']),
		'loginlicense': $k.instance.newobject($heap.loginui['loginlicense']),
		'loginmain': $k.instance.newobject($heap.loginui['loginmain']),
		'loginmsg': $k.instance.newobject($heap.loginui['loginmsg']),
		'loginpolicy': $k.instance.newobject($heap.loginui['loginpolicy']),
		'loginregister': $k.instance.newobject($heap.loginui['loginregister']),
		'loginreset': $k.instance.newobject($heap.loginui['loginreset']),
		'loginthankyou': $k.instance.newobject($heap.loginui['loginthankyou']),
	},
	onStartup: function(pos) {
		$heap.loginui[pos.form].Load(pos);
	},
	onLoadLibs: function() {
// --------------------------------------
// Include Custom Javascript Libraries //
// --------------------------------------

    /*VALIDATE*/
$nim.Load32.Add ('validate', $nim.home_server + 'js/_libs/validate/validate.min.js', 'js');
    /*~VALIDATE*/
    /*ICON*/
$nim.Load32.Add('fa4_css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', 'css');
    /*~ICON*/
    // --------------------------------------

	},
	onClose: function(dlgname) {
	},
	onListeners: function(self) {
		self = self || {};
		/**
		* App Listeners
		* version: 5.0
		**/
		self.KeyPress = function(dlg_name) {
		};
		self.KeyUp = function(dlgname) {
			if (DESKTOP.switching) { return; }
			if (KEYBOARD.isAlt && DESKTOP.currentDesktop != KEYBOARD.Char) {
				if (KEYBOARD.Char >= '0' && KEYBOARD.Char <= defaults.preload.workspaces) {
					DESKTOP.Code.SlideDesktop(DESKTOP.currentDesktop, Number(KEYBOARD.Char));
				}
			}
		};
		self.DragStart = function(dlg_name) {
		};
		self.Drag = function(dlg_name) {
		};
		self.Move = function(dlg_name) {
		};
		self.Minimize = function(dlg_name) {
		};
		self.Maximize = function(dlg_name) {
		};
		self.Restore = function(dlg_name) {
		};
		self.Resize = function(dlg_name) {
			try {
			
			} catch(e) {
			
			} finally {
				$k.app.resizewidgets(dlg_name);
			}
		};
		self.OrientationChange = function() {
			
		};
		self.Orientation = function(event) {
			
		};
		return self;
	},
	onDataModel: function() {
		return [{"form":"loginforgot","ctrl":"user","bind":"user"},{"form":"loginforgot","ctrl":"email","bind":"email"},{"form":"loginmain","ctrl":"username","bind":"username"},{"form":"loginmain","ctrl":"password","bind":"password"},{"form":"loginregister","ctrl":"username","bind":"username"},{"form":"loginregister","ctrl":"email","bind":"email"},{"form":"loginregister","ctrl":"password","bind":"password"},{"form":"loginregister","ctrl":"confirm","bind":"confirm"},{"form":"loginreset","ctrl":"code","bind":"code"},{"form":"loginreset","ctrl":"password","bind":"password"},{"form":"loginreset","ctrl":"confirm","bind":"confirm"}];
	},
	onBindLists: function() {
		return [];
	}
};
AppInst = $k.app.createapp(_config, _config.onListeners);
if (AppInst && AppInst.App.id == -1) {
	AppInst.App.isLoaded = true;
	AppInst.App.isWidget = false;
	AppInst.App.id = $k.instance.getappid();
	AppInst.App.guid = '6d4bb3ae-5a95';
	AppInst.App.name = 'loginui';
	AppInst.App.startfrm = _config.startform;
	AppInst.App.query = _config.query || {};
	AppInst.App.icon = 'media/icons/app.gif';
	AppInst.New();
	if (!DESKTOP.Code) { DESKTOP.Code = $heap.loginui.Code; }
}
