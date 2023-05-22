function FieldError({error}) {
  let errorText;

  switch (error?.type) {
    case 'required':
      errorText = 'Поле обязательно';
      break;
    case 'minLength':
      errorText = 'Слишком короткое значение';
      break;
    case 'maxLength':
      errorText = 'Слишком длинное значение';
      break;
    case 'pattern':
      errorText = 'Некорректный формат';
      break;
  }

  return errorText && <span className="auth-form__error-msg">{errorText}</span>;
}

export default FieldError;
