function enableFields(form)
{
   var atividade = getValue('WKNumState');

   // Função que desabilita os campos em bloco
	function desabilitarCampos(campos) {
		campos.forEach(function(campo) {
			form.setEnabled(campo, false);
		});
	}
  
  	//Função para desabilitar varios campos 
	function desabilitarCamposTabelaPaiFilho(nomeTabela , campos)  
	{
		var cardData = form.getChildrenFromTable(nomeTabela); //pega todos os campos filhos
		var keys = cardData.keySet().toArray(); //Cria um array de todas as kyes
	
		for (var key in keys) //Fazendo um for com todas as keys
		{
		  var field = keys[key];
			for(var campo in campos) //Fazendo um for com todos os campos
			{
				if(field.indexOf(campos[campo] + "___") > -1) //Pega todos os campos que tenham ___ e retorna o indice, se o indice forem > -1 entre no escopo e desabilite todos os fields que forem passados como parametro
				{
					desabilitarCampos([field]);
				}
			}
		}
	}

	var camposSolicitante = ["loja_atual", "tbEntrega", "totalTodasEntregas", "obs_solic"];
	var gerenteDeLoja = ["dt_aprovacao_2", "status_2_aprov", "observacao_gerente"];
	var financeiro = ["dt_aprovacao_1", "status_1", "fornecedor", "natureza", "valor", "vencimento", "observacao_financeiro"];
	var solicNf = ["dt_aprovacao_3", "fnAnexo", "observacao_solic"];
	// var verifFinanceiro = ["dt_aprovacao_4", "verificacao"];

  //Gerente de Loja
  if(atividade == 17)
		{
		desabilitarCampos(camposSolicitante);
			var camposDesabilitados = new Array('tiposEntrega', 'quantidade','valorUnitario', 'valorTotal');
			desabilitarCamposTabelaPaiFilho("tbEntrega", camposDesabilitados);  
		form.setVisibleById("addRowButton", false);
		form.setEnabled("dt_aprovacao_2", false);
	}

  //Financeiro
  if(atividade == 2)
		{
		desabilitarCampos(camposSolicitante);
		desabilitarCampos(gerenteDeLoja);
			var camposDesabilitados = new Array('tiposEntrega', 'quantidade','valorUnitario', 'valorTotal');
			desabilitarCamposTabelaPaiFilho("tbEntrega", camposDesabilitados);  
		form.setVisibleById("addRowButton", false);
	}

//Solicitante correção
if(atividade == 5)
  {
	desabilitarCampos(gerenteDeLoja);
	desabilitarCampos(financeiro);
  }

  //Solic 
  if(atividade == 24)
		{
		desabilitarCampos(camposSolicitante);
		desabilitarCampos(gerenteDeLoja);
		desabilitarCampos(financeiro);
			var camposDesabilitados = new Array('tiposEntrega', 'quantidade','valorUnitario', 'valorTotal');
			desabilitarCamposTabelaPaiFilho("tbEntrega", camposDesabilitados);  
		form.setVisibleById("addRowButton", false);
		form.setEnabled("dt_aprovacao_3", false);
	}

  //Financeiro
  if(atividade == 27)
		{
		desabilitarCampos(camposSolicitante);
		desabilitarCampos(gerenteDeLoja);
		desabilitarCampos(financeiro);
		desabilitarCampos(solicNf);
			var camposDesabilitados = new Array('tiposEntrega', 'quantidade','valorUnitario', 'valorTotal');
			desabilitarCamposTabelaPaiFilho("tbEntrega", camposDesabilitados);  
		form.setVisibleById("addRowButton", false);
		form.setEnabled("dt_aprovacao_4", false);
	}


}