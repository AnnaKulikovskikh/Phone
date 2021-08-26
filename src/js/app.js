// TODO: write your code here
export default class Validator {
  // validateUsername(name) {
  //   const c = /\w/.test(name); // только буквы, цифры, _ и -
  //   const a = /^[^\d-_]/.test(name); // в начале не цифра, _ или -
  //   const b = /[^\d-_]$/.test(name); // в конце не цифра, _ или -
  //   const d = /\d{4,}/g.test(name); // проверка идет ли более 3 цифр подряд
  //   return a && b && c && !d;
  // }

  validatePhone(phone) {
    const regexp = /\d/g;
    const a = phone.match(regexp).join('');
    if (a.length === 11 && /^\8/.test(phone)) {
      return `+7${a.slice(1)}`; // меняем 8 на +7
    }
    if (a.length === 11 && /^\+/.test(phone)) {
      return `+${a}`; // возвращаем +
    }
    if (a.length === 10) {
      return `+7${a}`; // добавляем +7
    }
    throw new Error('invalid number');
  }
}
