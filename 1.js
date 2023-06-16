
const num = Number.parseFloat(prompt("Введите температуру в градусах Цельсия:"));
printTemperature(num);

function printTemperature(num) {
    alert(`Цельсий: ${num}, Фаренгейт:  ${((9/5)*num+32).toFixed(0)}.`);
}
  
    