F.onLocale = function(req) {
	var lang = req.cookie('_lang'); // retrieve language cookie value

	if (!lang){
		// set French as default language
		return 'fr';
	}

	return lang;
};


MIDDLEWARE('middleware1', function($) {
    var cookie = $.req.cookie('_lang');
    if (!cookie){
      $.next();
        return;
      }
    if(cookie == 'en'){
      var url = $.controller.url;
      //$.controller.plain(split);
      if($.req.split[$.req.split.length -1] != 'en'){
      $.controller.redirect(url == '/' ?'/en' : url+'en' );
      return;
      }
      $.next();
    }else{
  
      $.next();
    }
      // or
      // $.next(false);
  });
  
  ON('controller',function($){
      var self = $;
      PREF.language = self.req.language;
      var cookie = self.cookie('_lang');
      if (!cookie){
          self.cookie('_lang',$.req.language,'5 days');
  
      }
  });
  