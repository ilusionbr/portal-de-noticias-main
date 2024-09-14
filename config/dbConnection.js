var mysql = require('mysql');

//var con = mysql.createConnection({
var connMysql = function (){
	return mysql.createConnection({
      	host: 'mysql-29dbe785-projeto-inicial-aprendizado.c.aivencloud.com',
		port: '25414',
      	user: 'avnadmin',
      	password: 'AVNS_nf4rRFpA36GcmuCoyC1',
      	database: 'portal_noticias',
	});
}


module.exports = function () {
	return connMysql;
}
