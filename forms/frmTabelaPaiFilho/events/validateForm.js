function validateForm(form){

    var atividade = getValue('WKNumState');
  
    //CAMPOS SOLICITANTE
    if(atividade == 0 || atividade == 3)
    {
      var cardData = form.getChildrenFromTable("tbitens"); //A função getChildrenIndexes retorna os índices dos registros (linhas) contidos em um Pai Filho a partir do seu tablename.
    var keys = cardData.keySet().toArray();

    for (var key in keys) { // percorre os campos Pai x Filho

      var field = keys[key];
        if (field.indexOf("matricula___") > -1 && (form.getValue(field) == null || form.getValue(field) == '')) {
          throw "O campo matrícula é obrigatório!";
        }

              if (field.indexOf("nome___") > -1 && (form.getValue(field) == null || form.getValue(field) == '')) {
          throw "O campo nome é obrigatório!";
        }
                    if (field.indexOf("cargo___") > -1 && (form.getValue(field) == null || form.getValue(field) == '')) {
          throw "O campo cargo é obrigatório!";
        }
      }

      if (form.getValue('dt_venda') == null || form.getValue('dt_venda') == "")
      {
         throw "Você precisa informar a data da venda";
      }

      if (form.getValue('valor_venda') == null || form.getValue('valor_venda') == "")
        {
           throw "Você precisa informar o valor da venda";
        }

        if (form.getValue('modo_pg') == null || form.getValue('modo_pg') == "")
          {
             throw "Você precisa informar o modo de pagamento";
          }

          if (form.getValue('loja') == null || form.getValue('loja') == "")
            {
               throw "Você precisa informar a loja";
            }
    }
  
    //CONF PAGAMENTO
    if(atividade == 10)
    {
      if (form.getValue('status_1') == null || form.getValue('status_1') == "")
      {
        throw "Você precisa informar se o pagamento foi efetuado";
      }
  
      if(form.getValue("status_1") == "S")
      {
        if (form.getValue("fnAnexo") == null || form.getValue("fnAnexo") == "")
        {
          throw "Você precisa anexar o comprovante de pagamento";
        }
      }

      if(form.getValue("status_1") == "N")
        {
          if (form.getValue("justificativa") == null || form.getValue("justificativa") == "")
          {
            throw "Você precisa justificar o motivo do pagamento não ter sido efetuado";
          }
        }
    }
    //FIM CONF PAGAMENTO

      //VERIFICAÇÃO SOLICITANTE
      if(atividade == 6)
        {
          if (form.getValue('verificado') == null || form.getValue('verificado') == "")
          {
            throw "Você precisa marcar a verificação";
          }
        }
        //FIM VERIFICAÇÃO SOLICITANTE
  
  }