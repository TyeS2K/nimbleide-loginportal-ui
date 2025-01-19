		switch(cmd) {
			case 'cmdlogout':
              	AppEvents.login.postLogout(function() {
                  $f.hide('frmmain', 'icnadd');
                  $searchBar.refresh();
              	});
				break;
			case 'cmdlogin':
            	$f.load('loginmain');
             	$f.show('loginmain');
              	$f.setfocus('loginmain', 'username');
				break;
			default:
		}