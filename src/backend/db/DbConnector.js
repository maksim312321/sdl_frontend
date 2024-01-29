import mysql from "mysql-await";

export default class DbConnector {
    static open() {
        const connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'maksim',
            password : 'mpaaksssiwmord',
            database : 'sdl'
        });
        connection.connect();
        return connection;
    }

    static close(connection) {
        connection.end();
    }
}
