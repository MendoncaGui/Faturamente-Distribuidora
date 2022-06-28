var sp = 67836.43;
var rj = 36678.66;
var mg = 29229.88;
var es = 27165.48;
var outros = 19849.53;

var total = sp + rj + mg + es + outros;

var percentSp = (sp/total)*100;
var percentRj = (rj/total)*100;
var percentMg = (mg/total)*100;
var percentEs = (es/total)*100;
var percentOutros = (outros/total)*100;

document.write("O valor total de faturamento é " + total + "</br>");
document.write("SP representou: " + percentSp.toFixed(2) + "% do valor total mensal da distribuidora </br>");
document.write("RJ representou: " + percentRj.toFixed(2) + "% do valor total mensal da distribuidora </br>");
document.write("MG representou: " + percentMg.toFixed(2) + "% do valor total mensal da distribuidora </br>");
document.write("ES representou: " + percentEs.toFixed(2) + "% do valor total mensal da distribuidora </br>");
document.write("Outros representaram: " + percentSp.toFixed(2) + "% do valor total mensal da distribuidora </br>");