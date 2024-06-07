const connection = require('../server/server');

exports.msg = (req, res) => {
    const query = 'SELECT * FROM atleta'; 

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err.stack);
            res.status(500).send('Error retrieving data');
            return;
        }

        res.render('administracion', {   results  });
    });
};