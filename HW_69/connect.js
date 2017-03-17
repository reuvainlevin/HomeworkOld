const app = require('connect')();

/*app.use((req, res, next) => {
    res.end(' hello nothing');
    next();
});*/
app.use('/', (req, res, next) => {
    res.end(' hello connect hello again');
    next();
});
app.use('/foo', (req, res, next) => {
    res.end(' hello foo');
});

app.listen(80);