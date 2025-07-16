function displayFields(form, customHTML) {
    form.setShowDisabledFields(true);
  
    var atividade = getValue("WKNumState");
    var user = getValue("WKUser");
  
    // Função que Mostra os campos em bloco
    function mostrarCampos(campos) {
      campos.forEach(function (campo) {
        form.setVisibleById(campo, true);
      });
    }
  
    function dataAtual() {
      var data = new Date();
      var dia = data.getDate();
      var mes = data.getMonth() + 1;
      var ano = data.getFullYear();
      dia = dia <= 9 ? "0" + dia : dia;
      mes = mes <= 9 ? "0" + mes : mes;
      var newData = dia + "/" + mes + "/" + ano;
      return newData;
    } // retorna a dataAtual de forma automatica
  
    //Ínicio
    if (atividade == 0 || atividade == 3) {
  
      //var date = new Date();
      //Pega o nome completo do usuario que iniciou a solicitacao
      var nome_solicitante = fluigAPI.getUserService().getCurrent().getFullName();
      form.setValue("dt_solicitante", dataAtual()); //retorna a data atual
      form.setValue("nome_solicitante", nome_solicitante);
    }
  
    //Financeiro
    if (atividade == 10) {
      mostrarCampos(["div_conf_pagamento"]);

      var statusPagamento = form.getValue("status_1");

      if(statusPagamento == "S"){
        form.setVisibleById("div_comprovante", true);
      }
      else {
        form.setVisibleById("div_comprovante", false);
      }

      if(statusPagamento == "N"){
        form.setVisibleById("div_justificativa", true);
      }
      else {
        form.setVisibleById("div_justificativa", false);
      }
    }

      //Confirmação Solicitante
      if (atividade == 6) {
        mostrarCampos(["div_conf_pagamento", "div_verificacao_solic"]);

        var statusPagamento = form.getValue("status_1");

        if(statusPagamento == "S"){
          form.setVisibleById("div_comprovante", true);
        }
        else {
          form.setVisibleById("div_comprovante", false);
        }
  
        if(statusPagamento == "N"){
          form.setVisibleById("div_justificativa", true);
        }
        else {
          form.setVisibleById("div_justificativa", false);
        }
      }
  
    //Atividade fim
    if (atividade == 8) {
      mostrarCampos(["div_conf_pagamento", "div_verificacao_solic"]);

      var statusPagamento = form.getValue("status_1");

      if(statusPagamento == "S"){
        form.setVisibleById("div_comprovante", true);
      }
      else {
        form.setVisibleById("div_comprovante", false);
      }

      if(statusPagamento == "N"){
        form.setVisibleById("div_justificativa", true);
      }
      else {
        form.setVisibleById("div_justificativa", false);
      }
    }
  }