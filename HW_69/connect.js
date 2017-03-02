const app = require('connect')();

app.use((req, res, next) => {
    res.end(' hello again and again connect');
});
app.listen(80);