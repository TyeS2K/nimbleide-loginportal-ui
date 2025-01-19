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

