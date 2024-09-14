var mysql = require('mysql');

var connMysql = function (){
	return mysql.createConnection({
      	host: 'mysql-29dbe785-projeto-inicial-aprendizado.c.aivencloud.com',
      	user: 'avnadmin',
      	password: 'AVNS_zJ5af5UGzmNfd7AbcqK',
      	database: 'portal_noticias',
      	insecureAuth: true
    });
}

module.exports = function () {
	return connMysql;
}
