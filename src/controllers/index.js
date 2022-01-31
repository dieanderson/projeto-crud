function index(req, res){
    res.render('index', {
        title: 'Página Principal'
    })
}

module.exports = {
    index
}