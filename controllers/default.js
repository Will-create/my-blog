exports.install =function(){

    ROUTE('GET /', home);
    ROUTE('GET /services', services);
    ROUTE('GET /about', about);
    ROUTE('GET /contact', contact);
    ROUTE('GET /portfolio', portfolio);
    ROUTE('GET /blog', blog);
    ROUTE('GET /blog/{id}/', readpost);
    ROUTE('GET /references', references);
	CORS();

}
function blog(){
    var self = this;
	NOSQL('posts').find().callback(function (err,res){
		self.view('pages/blog',{articles : res});
	})
}

function services(){
    var self = this;

    self.view('pages/services');
}

function about(){
    var self = this;

    self.view('pages/about');
}


function contact(){
    var self = this;

    self.view('pages/contact');
}

function portfolio(){
    var self = this;

    self.view('pages/portfolio');
}

function home(){
    var self = this;
	    NOSQL('socials').find().callback(function(err,res){
        self.view('index',{socials : res || []});
    });

}

function references(){
    var self = this;

    self.view('pages/references');
}

function readpost(){
	var self = this;
	//var id = self.params.id;
	 var message = '@(404: Page not found)';

		self.view('/pages/errorpage',{message});
}