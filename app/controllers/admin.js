module.exports.formulario_inclusao_noticia = function(application, req, res){
	res.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function(application, req, res){
	var noticia = req.body;

	console.log(noticia);
	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia','Noticia é obrigatório').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
		return;
	}

	//conexao
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);
		

	//model
	//salvarNoticia

	noticiasModel.salvarNoticia(noticia, function(err, result){
		console.log(result);
		console.log(err);
		res.redirect("/noticias");
		});
}