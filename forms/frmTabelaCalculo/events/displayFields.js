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

  //Função que oculta os campos
  function esconderCampo(campos) {
    campos.forEach(function (campo) {
      form.setVisibleById(campo, false);
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
  if (atividade == 0 || atividade == 1) {

    //var date = new Date();
    //Pega o nome completo do usuario que iniciou a solicitacao
    var nome_solicitante = fluigAPI.getUserService().getCurrent().getFullName(); 
    form.setValue("dt_solicitante", dataAtual()); //retorna a data atual
    form.setValue("nome_solicitante", nome_solicitante);
    form.setValue("email_solicitante", fluigAPI.getUserService().getCurrent().getEmail()); // Utilizar o fluigAPI para poder 
  }

  //Gerente de Loja
  if (atividade == 17) {
    mostrarCampos(["div_aprovacao_gerente"]);
    form.setValue("dt_aprovacao_2", dataAtual());
  }

  //Financeiro
  if (atividade == 2) {
    mostrarCampos(["div_aprovacao_gerente", "div_financeiro"]);
    form.setValue("dt_aprovacao_1", dataAtual());
  }

 //Solicitante Correção
 if (atividade == 5) {
  mostrarCampos(["div_aprovacao_gerente", "div_financeiro"]);
}

  //Atividades finalizadas
  if (atividade == 22) {
    mostrarCampos(["div_aprovacao_gerente"]);
  }

 //Solicitante
 if (atividade == 24) {
  mostrarCampos(["div_aprovacao_gerente", "div_financeiro", "div_aprovacao_solic"]);
  form.setValue("dt_aprovacao_3", dataAtual());
}

 //Financeiro
 if (atividade == 27) {
  mostrarCampos(["div_aprovacao_gerente", "div_financeiro", "div_aprovacao_solic", "div_aprovacao_financeiro"]);
  form.setValue("dt_aprovacao_4", dataAtual());
}


  
  //Atividades finalizadas
  if (atividade == 4) {
    mostrarCampos(["div_aprovacao_gerente", "div_financeiro", "div_aprovacao_solic", "div_aprovacao_financeiro"]);
    
  }
  
  // Exibir a tabela para todas as atividades após a submissão inicial
  if (atividade !== 1 && atividade !== 17) {
    form.setVisible("tbEntrega", true);
  }
}
