'use strict';

let cMonth = document.querySelector('#month');
let cYear = document.querySelector('#year');
let bStart = document.querySelector('#bStart');
let addText = document.querySelector('#Otvet');

let one_years = +12, month = +0;
let dividend_income = +0;
let total_stock = +0;
let total_dividents = +0;
let add_every_month = +0;
let numbering = +0;

bStart.onclick = function () { // При нажатии на кнопку
let total = +document.querySelector('#inMonth').value;
let every_month = +document.querySelector('#inMonth').value;
let number_of_times = +document.querySelector('#numberYearMonth').value;
let percent = +document.querySelector('#percent').value;
let percent_years = +document.querySelector('#percent').value;
let stock_value = +document.querySelector('#stockPrice').value;
let dividents_value = +document.querySelector('#dividentsPrice').value;
    
if (cMonth.checked){
     while (numbering < number_of_times)
        {
            add_every_month = (total / 100) * percent;
            
            if (numbering >= 1)
            {
                total = total + every_month + add_every_month;
            }else{
                total = every_month + add_every_month;
            }
            numbering++;

            if (numbering % 12 == 0) // Считает прибыль в конце года, и кол-во акций и дивидентов
            {
                total_stock = total / stock_value; 
                total_dividents = total_stock;
                dividend_income = total_dividents * dividents_value;
                total = total + dividend_income;
                
                addText.innerHTML = addText.value + numbering + ": Банк: " + Math.round(total) +". Количество акций: " +Math.round(total_stock) +". Прибыль с дивидентов: "+ Math.round(dividend_income) + '\n';
                
                // Выводит NaN в 12 строке, словно значение переменных парсит в string
                
                console.log(typeof(total)) // Пытался понять ошибку
                console.log(typeof(total_stock))
                console.log(typeof(dividend_income))
                 console.log(typeof(addText + "2"))
            }else{
                addText.innerHTML = addText.value + numbering + ": Банк: " + Math.round(total) + "\n";
                console.log(typeof(addText + "1"))
                
            }
        }
}
    return false;
}