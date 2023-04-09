import useInput from "../hooks/use-input-basic-form";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
    isValueValid: firstNameIsValid,
  } = useInput((value) => value.trim().length > 0);

  const {
    enteredValue: enteredLastName,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
    isValueValid: lastNameIsValid,
  } = useInput((value) => value.trim().length > 0);

  const {
    enteredValue: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
    isValueValid: emailIsValid,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      value.includes("@") &&
      value.includes(".") &&
      value.length >= 5
  );

  let isFormValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    isFormValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (firstNameHasError || lastNameHasError || emailHasError) {
      return;
    }

    console.log(
      "First name: " +
        enteredFirstName +
        "\n\nlast name: " +
        enteredLastName +
        "\n\ne-mail: " +
        enteredEmail
    );

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const inputStyleValidation = (isValid) => {
    return `form-control ${!isValid ? "" : "invalid"}`;
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={inputStyleValidation(firstNameHasError)}>
          <label htmlFor="first-name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="first-name"
            value={enteredFirstName}
          />
          {firstNameHasError && <p>Please input a valid first name.</p>}
        </div>

        <div className={inputStyleValidation(lastNameHasError)}>
          <label htmlFor="last-name">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            type="text"
            id="last-name"
          />
          {lastNameHasError && <p>Please input a valid last name.</p>}
        </div>
      </div>

      <div className={inputStyleValidation(emailHasError)}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="email"
          id="email"
        />
        {emailHasError && <p>Please input a valid email.</p>}
      </div>

      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
