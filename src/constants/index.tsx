export const CATEGORIES = ['5km', '10km', 'Полумаратон', 'Маратон'] as const;

export const MIN_AGE = 16;

export const PAYMENT_SUCCESS_RATE = 0.8; 

export const TABS = {
  REGISTER: 0,
  CHECK: 1,
  CONTESTANTS: 2,
  RACES: 3,
} as const;

export const MESSAGES = {
  SUCCESS_REGISTRATION: (regNumber: string) => 
    `Успешна пријава! Ваш регистрациски број: ${regNumber}`,
  ERROR_AGE: 'Возраста мора да биде најмалку 16 години',
  ERROR_EMAIL_EXISTS: 'Е-поштата веќе е регистрирана',
  ERROR_REQUIRED_FIELDS: 'Ве молиме пополнете ги сите полиња',
  SUCCESS_PAYMENT: 'Плаќањето е успешно! Ваш стартен број е генериран.',
  ERROR_PAYMENT: 'Плаќањето не успеа. Ве молиме обидете се повторно.',
  NO_PARTICIPANT_FOUND: 'Учесникот не е пронајден',
} as const;