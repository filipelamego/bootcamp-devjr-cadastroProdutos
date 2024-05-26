//Máscaras
$("#inputPrice").mask('000.000.000.000.000,00', { reverse: true });

var products = [
    {
        id: 1,
        name: "Computador M1-TX",
        description: "Intel I7, 16GB, SSD 256, HD 1T",
        price: 4900,
        category: 1,
        promotion: true,
        new: true
    },
    {
        id: 2,
        name: "Computador M2-TX",
        description: "Intel I7, 32GB, SSD 512, HD 1T",
        price: 5900,
        category: 2,
        promotion: false,
        new: true
    },
    {
        id: 3,
        name: "Computador M1-T",
        description: "Intel I5, 16GB, HD 1T",
        price: 2900,
        category: 3,
        promotion: false,
        new: false
    },
];

var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { id: 3, name: "Importado" }
];

//No carregamento da página
loadProducts();

//Carrega todos os produtos
function loadProducts() {
    for (let product of products) {
        addNewRow(product);
    }
}

//Salva os dados digitados no formulário
function save() {

    var product = {
        id: products.length + 1,
        name: document.getElementById("inputName").value,
        description: document.getElementById("inputDescription").value,
        price: document.getElementById("inputPrice").value,
        category: document.getElementById("selectCategory").value,
        promotion: document.getElementById("checkboxPromotion").checked,
        new: document.getElementById("checkboxNewProduct").checked,
    };

    addNewRow(product);
    products.push(product);

    document.getElementById("formProduct").reset();
}

//Adiciona nova linha
function addNewRow(product) {
    var table = document.getElementById("productsTable");

    var newRow = table.insertRow();

    //Insere o Id do Produto na Tabela
    var idNode = document.createTextNode(product.id);
    newRow.insertCell().appendChild(idNode);

    //Insere o nome do Produto na Tabela
    var nameNode = document.createTextNode(product.name);
    newRow.insertCell().appendChild(nameNode);

    //Insere a descrição do produto na Tabela
    var descNode = document.createTextNode(product.description);
    newRow.insertCell().appendChild(descNode);

    //Insere o preço do produto na Tabela

    var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    var priceNode = document.createTextNode(formatter.format(product.price));
    newRow.insertCell().appendChild(priceNode);

    //Insere a categoria do produto na Tabela
    var categNode = document.createTextNode(categories[product.category - 1].name);
    newRow.insertCell().appendChild(categNode);

    //Insere se é promoção e/ou lançamento na tabela.
    var opcao = '';
    if (product.promotion) {
        opcao = '<span class="badge bg-success me-1">P</span>';
    }

    if (product.new) {
        opcao += '<span class="badge bg-primary">L</span>';
    }

    newRow.insertCell().innerHTML = opcao;

}