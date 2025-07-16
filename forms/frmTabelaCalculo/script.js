$(document).ready(function () {
    console.log("🟢 Script carregado com sucesso!");

    const lojasCash = [...Array(81)].map((_, i) => `loja_${(i + 1).toString().padStart(2, "0")}`);
    console.log('chamada...');

    $("#loja_atual").change(function () {
        const lojaSelecionada = $(this).val();
        console.log("Loja selecionada:", lojaSelecionada);

        if (!lojaSelecionada || !lojasCash.includes(lojaSelecionada)) {
            exibirMensagemErro("Você precisa selecionar uma loja válida.");
            resetarCamposGerente();
            return;
        }

        definirGerentesLoja(lojaSelecionada);
    });

    // Evento para recalcular valor ao alterar quantidade ou unitário
    $("#tbitens").on("input", 'input[name^="quantidade"], input[name^="valorUnitario"]', function () {
        console.log("🔁 Campo alterado, recalculando linha...");
        calcularLinhaTotalEntrega(this);
    });

    $("#addActivityButton").click(() => adicionarEntregaLinha());
});

// Adiciona nova linha de entrega
function adicionarEntregaLinha() {
    wdkAddChild("tbitens");
}

// Remove linha e atualiza o total geral
function removerLinhaEntrega(botao) {
    $(botao).closest("tr").remove();
    calcularValorTotalEntregas();
}

// Cálculo do total da linha
function calcularLinhaTotalEntrega(elemento) {
    console.log('🧮 chamada Calculo da linha');
    const linha = $(elemento).closest("tr");

    const qtd = parseFloat(linha.find('input[name^="quantidade"]').val()) || 0;
    const valor = parseFloat(linha.find('input[name^="valorUnitario"]').val()) || 0;
    const total = qtd * valor;

    console.log("➡️ total: " + total);
    linha.find('input[name^="total"]').val(total.toFixed(2));
    calcularValorTotalEntregas();
}

// Cálculo do valor total de todas as entregas (corrigido para evitar valores errados)
function calcularValorTotalEntregas() {
    let soma = 0;
    $('table#tbitens tbody tr').each(function () {
        const linha = $(this);
        if (linha.is(':visible')) {
            const totalStr = linha.find('input[name^="total"]').val();
            const total = parseFloat(totalStr) || 0;
            soma += total;
        }
    });
    $("#total_geral").val(soma.toFixed(2));
}

// Exibe mensagem de erro padrão
function exibirMensagemErro(mensagem) {
    FLUIGC.toast({
        title: "Erro!",
        message: mensagem,
        type: "danger"
    });
}

// Limpa campos relacionados ao gerente
function resetarCamposGerente() {
    $("#retorna_login_gerente").val("");
    $("#retorna_login_gerente_regional").val("");
    $("#retorna_login_gerente_geral").val("");
    $("#numero_loja").val("");
}

// Define dados de gerente conforme a loja
function definirGerentesLoja(loja) {
    const numero = loja.split("_")[1];
    $("#numero_loja").val(numero);
    $("#retorna_login_gerente").val(`gerente.lj${numero}`);

    const ds = DatasetFactory.getDataset("ds_gerentes_regional", null, null, null);
    if (ds?.values?.length) {
        const dados = ds.values.find(item => item.loja === loja);
        if (dados) {
            $("#retorna_login_gerente_regional").val(dados.cod_gerente_regional || "");
            $("#retorna_login_gerente_geral").val(dados.cod_gerente_geral || "");
        } else {
            exibirMensagemErro("Nenhum dado encontrado para esta loja.");
        }
    }
}

// Busca os dados do fornecedor no dataset
function buscarDadosFornecedor() {
    const codigo = $("#fornecedor").val();
    const c1 = DatasetFactory.createConstraint("FORNECEDOR", codigo, codigo, ConstraintType.MUST);
    const ds = DatasetFactory.getDataset("ds_entregas", null, [c1], null);

    if (ds?.values?.length > 0) {
        const f = ds.values[0];
        $("#fornecedor").val(f.FORNECEDOR || "");
        $("#natureza").val(f.NATUREZA || "");
        $("#valor").val(f.VALOR || "");
        $("#vencimento").val(f.VENCIMENTO || "");
    } else {
        resetarCamposFornecedor();
        FLUIGC.toast({
            title: "Sem cadastro.",
            message: "Fornecedor não encontrado.",
            type: "info"
        });
    }
}

// Limpa os campos de fornecedor
function resetarCamposFornecedor() {
    $("#fornecedor, #natureza, #valor, #vencimento").val("");
}
