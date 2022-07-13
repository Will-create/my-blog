exports.install =function(){

	CORS();
    ROUTE('/', home);
    ROUTE('/services', services);
    ROUTE('/about', about);
    ROUTE('/contact', contact);
    ROUTE('/portfolio', portfolio);
    ROUTE('/blog', blog);
    ROUTE('/blog/{id}/', read_post);
    ROUTE('/references', references);
}


function home(){
    var self = this;
    NOSQL('socials').find().callback(function(err,res){


        self.view('index',{socials : res || []});
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

function blog(){
    var self = this;
	NOSQL('posts').find().callback(function (err,res){
		self.view('pages/blog',{articles : res});
	})

}

function references(){
    var self = this;

    self.view('pages/references');
}

function read_post(){
	var self = this;
	//var id = self.params.id;


		self.view('/pages/page404',{message : '@(404: Page not found)'});



}