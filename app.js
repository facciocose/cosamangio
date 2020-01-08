var cibo = [
    "Riso olio e parmigiano",
    "Hamburger",
    "Salsiccia e patate",
    "Cotolette di pollo",
    "Petto di pollo arrosto",
    "Merluzzo bollito",
    "Peperoni ripieni",
    "Orata al forno",
    "Frittata",
    "Tonno e patate (insalata)",
    "Insalata di riso",
    "Pasta radicchio e speck",
    "Anelli di calamari al forno",
    "Fettine di costata",
    "Insalata pomodoro mozzarella e prosciutto",
    "Parmigiana di zucca",
    "Parmigiana di zucchine",
    "Pizza",
    "Finocchi gratinati",
    "Radicchio al forno",
    "Carne alla pizzaiola"
];


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("content").innerHTML = cibo[Math.floor(Math.random() * cibo.length)];
});