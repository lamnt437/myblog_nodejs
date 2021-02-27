exports.index = function(req, res, next) {
    res.render('users', {
        title: 'Users'
    })
};