/**
 * Код для определения остатка оплаты для студента буткемпа
 */

// принимаем ли мы платежи
const canPayment = true;

// имя студента
const studentName = 'your name';

// стоимость курсов
const price = 120000;

// взнос за первую половину обучения
const firstPayment = 50000;

// скидка в %
const discount = 22;

// формула расчета остатка платежа
const totalPrice = price - (price / 100) * discount;

// оставшаяся сумма для оплаты курсов
const remainingPayment = totalPrice - firstPayment;

if(canPayment) {
  //условие если оставшаяся сумма для оплаты курсов равна 0
  if (remainingPayment === 0) {
    console.log(`Ты оплатил учебу полностью.`);

    //условие если оплачен только взнос
  } else {
    const message = `
  ${studentName}, ты оплатил ${firstPayment} руб. 
  К оплате осталось еще ${remainingPayment} руб.
  Твоя скидка: ${discount}%
  `;

    //вывести сообщение об остатке
    console.log(message);
  }
} else {
  console.log(`Мы сейчас не можем принять платеж`);
}
