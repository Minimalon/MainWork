////let one_years = 12, month;
////let total;
////let dividend_income;
////let total_stock;
////let stock_value;
////let total_dividents;
////let dividents_value ;
////let every_month;
////let add_every_month;
////let number_of_times;
////let numbering = 0;
////let percent;
////let percent_years;
//
////let addText = document.querySelector('#Otvet');
////let inMonth = document.querySelector('#inMonth').value;
////let numberYearMonth = document.querySelector('#numberYearMonth').value;
////let cMonth = document.querySelector('#month').value;
////let cYear = document.querySelector('#year').value;
////let percent = document.querySelector('#percent').value;
////let stockPrice = document.querySelector('#stockPrice').value;
////let dividentsPrice = document.querySelector('#dividentsPrice').value;
////let bStart = document.querySelector('#bStart');
//
//const cMonth = document.querySelector('#month');
//const cYear = document.querySelector('#year');
//const bStart = document.querySelector('#bStart');
//const addText = document.querySelector('#Otvet');
//
//const total = document.querySelector('#inMonth');
//const every_month = document.querySelector('#inMonth');
//const number_of_times = document.querySelector('#numberYearMonth');
//const percent = document.querySelector('#percent');
//const percent_years = document.querySelector('#percent');
//const stock_value = document.querySelector('#stockPrice');
//const dividents_value = document.querySelector('#dividentsPrice');
//
//let one_years = 12, month = 0;
//let dividend_income = 0;
//let total_stock = 0;
//let total_dividents = 0;
//let add_every_month = 0;
//let numbering = 0;
//
//bStart.onclick = function () { // При нажатии на кнопку
//
//let total = document.querySelector('#inMonth').value;
//let every_month = document.querySelector('#inMonth').value;
//let number_of_times = document.querySelector('#numberYearMonth').value;
//let percent = document.querySelector('#percent').value;
//let percent_years = document.querySelector('#percent').value;
//let stock_value = document.querySelector('#stockPrice').value;
//let dividents_value = document.querySelector('#dividentsPrice').value;
//    
//if (cMonth.checked){
//     while (numbering < number_of_times)
//        {
//            if (numbering >= 1)
//            {
//                add_every_month = ((total / 100) * percent);
//                total += every_month + add_every_month;
//            }else{
//                add_every_month = ((total / 100) * percent);
//                total = every_month + add_every_month;
//            }
//            numbering++;
//
//            if (numbering % 12 == 0) // Считает прибыль в конце года, и кол-во акций и дивидентов
//            {
//                total_stock = total / stock_value; 
//                total_dividents = total_stock;
//                dividend_income = total_dividents * dividents_value;
//                total = total + dividend_income;
//
//                addText.innerHTML = addText.value + numbering + ": Банк: " + Math.round(total) + ". Количество акций: " + Math.round(total_stock) + ". Прибыль с дивидентов: " + Math.round(dividend_income) + '\n';
//            }else{
//                addText.innerHTML = addText.value + numbering + ": Банк: " + Math.round(total) + "\n";
//            }
//        }
//}
//    return false;
//}