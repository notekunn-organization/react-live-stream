module.exports = function({ app, express }) {
    app.use(express.static('public'))
    app.set('view engine', 'ejs');
    app.set('views', 'views');
}
