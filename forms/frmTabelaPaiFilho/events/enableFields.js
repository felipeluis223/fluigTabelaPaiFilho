function enableFields(form) {
    var atividade = getValue("WKNumState");
  
    // Função que desabilita os campos em bloco
    function desabilitarCampos(campos) {
      campos.forEach(function (campo) {
        form.setEnabled(campo, false);
      });
    }

  //Função para desabilitar varios campos --- NOVO
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

  
    var camposSolic = ["dt_venda", "valor_venda", "modo_pg", "loja", "obs"];
    
    var confPagamento = ["status_1","fnAnexo", "justificativa"];

    // var verificacaoSolic = ["verificacao"];

      //Conf de pagamento
      if (atividade == 10) {
        desabilitarCampos(camposSolic);
        // ---novo!
      var camposDesabilitados = new Array('matricula','nome','cargo');
			desabilitarCamposTabelaPaiFilho("tbitens", camposDesabilitados);  
		form.setVisibleById("addActivityButton", false);
      }

      //Verificacao solic
      if (atividade == 6) {
        desabilitarCampos(camposSolic);
      var camposDesabilitados = new Array('matricula','nome','cargo');
			desabilitarCamposTabelaPaiFilho("tbitens", camposDesabilitados);  
		form.setVisibleById("addActivityButton", false);
        desabilitarCampos(confPagamento);
      }
  }