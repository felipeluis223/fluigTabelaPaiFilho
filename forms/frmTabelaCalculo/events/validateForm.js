function validateForm(form)
{
  var atividade = getValue('WKNumState');

  if(atividade == 0 || atividade == 1)
  {

      if(form.getValue('loja_atual') == null || form.getValue('loja_atual') == "")
      {
         throw "Você precisa informar de qual loja você é";
      }

    var cardData = form.getChildrenFromTable("tbEntrega"); //A função getChildrenIndexes retorna os índices dos registros (linhas) contidos em um Pai Filho a partir do seu tablename.
    var keys = cardData.keySet().toArray();

    for (var key in keys) { // percorre os campos Pai x Filho

      var field = keys[key];
          {
        if (field.indexOf("tiposEntrega___") > -1 && (form.getValue(field) == null || form.getValue(field) == '')) {
          throw "O campo matrícula é obrigatório!";
        }
      
        if (field.indexOf("quantidade___") > -1 && (form.getValue(field) == null || form.getValue(field) == '')) {
          throw "O campo nome é obrigatório!";
        }
      
        if (field.indexOf("valorUnitario___") > -1 && (form.getValue(field) == null || form.getValue(field) == '')) {
          throw "O campo cpf é obrigatório!";
        }

        if (field.indexOf("valorTotal___") > -1 && (form.getValue(field) == null || form.getValue(field) == '')) {
          throw "O campo VALOR TOTAL é obrigatório!";
        }
      }
    }
     }
  
  //Gerente de Loja
  if(atividade == 17)
    {
      if(form.getValue('status_2_aprov') == null || form.getValue('status_2_aprov') == "")
      {
         throw "Você precisa informar o STATUS";
      }

          if(form.getValue("status_2_aprov") == "R")
        {
          if (form.getValue("observacao_gerente") == null || form.getValue("observacao_gerente") == "")
          {
            throw "Você precisa justificar o motivo da recusa";
          }
        }
  }

  //Financeiro
  if(atividade == 2)
    {
      if(form.getValue('status_1') == null || form.getValue('status_1') == "")
      {
         throw "Você precisa informar o STATUS";
      }

          if(form.getValue("status_1") == "A")
        {
          if (form.getValue("fornecedor") == null || form.getValue("fornecedor") == "")
          {
            throw "Você precisa informar o fornecedor";
          }
        }

        if(form.getValue("status_1") == "A")
        {
          if (form.getValue("natureza") == null || form.getValue("natureza") == "")
          {
            throw "Você precisa informar a natureza";
          }
        }
          
        if(form.getValue("status_1") == "A")
        {
          if (form.getValue("valor") == null || form.getValue("valor") == "")
          {
            throw "Você precisa informar o valor total de todas as entregas";
          }
        }

            if(form.getValue("status_1") == "A")
        {
          if (form.getValue("vencimento") == null || form.getValue("vencimento") == "")
          {
            throw "Você precisa informar o vencimento";
          }
        }

      if(form.getValue("status_1") == "C")
        {
          if (form.getValue("observacao_financeiro") == null || form.getValue("observacao_financeiro") == "")
          {
            throw "Você precisa informar o motivo da correção";
          }
      }
      
      if(form.getValue("status_1") == "R")
        {
          if (form.getValue("observacao_financeiro") == null || form.getValue("observacao_financeiro") == "")
          {
            throw "Você precisa informar o motivo da recusa";
          }
        }
  }

  //Solicitante
  if(atividade == 24)
    {
      if(form.getValue('fnAnexo') == null || form.getValue('fnAnexo') == "")
      {
         throw "Você precisa anexar a NOTA FISCAL";
      }
  }

  //Financeiro
  if(atividade == 30)
    {declaracao_ciencia
      if(form.getValue('verificacao') == null || form.getValue('verificacao') == "")
      {
         throw "Você precisa marcar a verificação";
      }
  }

  }