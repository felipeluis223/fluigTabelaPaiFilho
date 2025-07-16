# 📦 Modelo Fluig - Formulário de Despesas de Entrega

Este repositório contém um modelo funcional de formulário ECM para o **Fluig**, desenvolvido para registrar despesas de entrega por loja. O objetivo é fornecer uma base reutilizável com cálculos automáticos, tabela dinâmica e integração com datasets internos.

---

## 🧠 Objetivo

Este projeto serve como referência para:

- Criação de formulários customizados no Fluig ECM
- Implementação de cálculo automático em tabelas pai-filho
- Integração com datasets para preenchimento de dados
- Controle e validação de campos dinâmicos

---

## ⚙️ Funcionalidades

- ✅ Seleção de loja com preenchimento automático dos dados de gerente
- ✅ Adição de múltiplos tipos de entrega em tabela dinâmica
- ✅ Cálculo automático por linha (`quantidade × valor unitário`)
- ✅ Cálculo do valor total geral atualizado em tempo real
- ✅ Busca automática de dados de fornecedor
- ✅ Toasts de erro/validação com `FLUIGC.toast()`

---

## 🔢 Como funciona o cálculo

### 🧮 Por linha:

```bash
total = quantidade × valor unitário
```

## Estrutura do projeto e os scripts:
```bash
📦 despesas-entrega-modelo/
├── index.html         # Estrutura do formulário
├── script.js          # Lógica de cálculo, datasets e eventos
├── style.css          # Estilos personalizados (opcional)
├── anexos.css         # Estilos adicionais (se usar anexos customizados)
└── README.md          # Documentação
```