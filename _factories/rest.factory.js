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

