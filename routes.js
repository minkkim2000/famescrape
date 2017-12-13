module.exports = function(app){

		// Our model controllers (rather than routes)
		var apiRoutes = require('./routes/api-routes');
		var users = require('./routes/user');
		var htmlRoutes = require('./routes/html-routes');


    app.use('/', htmlRoutes);
		app.use('/api', apiRoutes);
		app.use('/user', users);

		//app.use('/pricing', pricing);
    //other routes..
}
