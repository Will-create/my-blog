exports.install = function (){

	ROUTE('/language/fr/',set_french);
	ROUTE('/admin/language/fr/',set_admin_french);
	ROUTE('/language/en/',set_english);
	ROUTE('/admin/language/en/',set_admin_english);

}



// this controller sets the user language to french
function set_french(){
	var self = this;
	console.log('Set language to french');
	self.res.cookie('_lang','fr','5 days');
    var current = self.query.current;
	this.redirect(current);
};
function set_admin_french(){
	var self = this;
	console.log('Set language to french');
	self.res.cookie('_lang','fr','5 days');
	this.redirect('/admin');
};
// this controller sets the user language to english
function set_english(){
	var self = this;
	console.log('set the user language to english');
	self.cookie('_lang','en','5 days');
    var current = self.query.current;
	this.redirect(current);

};
function set_admin_english(){
	var self = this;
	console.log('set the user language to english');
	self.cookie('_lang','en','5 days');
	this.redirect('/admin');
};