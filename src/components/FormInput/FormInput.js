function FormInput(props) {
  return (
      <>
        <span className="auth-form__caption">{props.caption}</span>
        <input
            className="auth-form__input"
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="40"
            id="nickname-input"/>
      </>
  );
}

export default FormInput;
