const Error= require('../config/Error');
const indexRouter = require('../routes/index');
const authRouter = require('../routes/auth');
const usersRouter = require('../routes/users');



module.exports=function(app){

    app.use('/', indexRouter);
    app.use('/auth', authRouter);
    app.use('/users', usersRouter);


//404 not found
    app.use(Error.notFound());
// error handler
    app.use(Error.ErrorHandler());

};