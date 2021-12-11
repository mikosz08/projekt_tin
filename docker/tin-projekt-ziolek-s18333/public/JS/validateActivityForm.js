function validateForm() {
    // Character Validation script.


    const activityNameInput = document.getElementById('name');
    const activityExpInput = document.getElementById('experience');

    const errorName = document.getElementById('errorActivity_Name');
    const errorExp = document.getElementById('errorExperience');
    const errorsSummary = document.getElementById('errorsSummary');

    let valid = true;

    resetErrors([activityNameInput, activityExpInput],
        [errorName, errorExp], errorsSummary);

    //Name
    if (!checkRequired(activityNameInput.value)) {
        valid = false;
        setError(activityNameInput, errorName, "Field is required!");
    } else if (!checkTextLengthRange(activityNameInput.value, 2, 30)) {
        valid = false;
        setError(activityNameInput, errorName, "Wrong length! (2-30) ");
    }

    //Exp
    if (!checkRequired(activityExpInput.value)) {
        valid = false;
        setError(activityExpInput, errorExp, "Field is required");
    } else if (!checkNumber(activityExpInput.value)) {
        valid = false;
        setError(activityExpInput, errorExp, "Wrong Format");
    } else if (activityExpInput.value < 0) {
        valid = false;
        setError(activityExpInput, errorExp, "Exp cannot be negative!");
    }


    return valid;

}