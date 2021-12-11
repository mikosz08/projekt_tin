function validateForm() {
    // Character Validation script.

    const characterNickInput = document.getElementById('name');
    const characterClassInput = document.getElementById('char_class');
    const characterRaceInput = document.getElementById('race');
    const characterAlignmentInput = document.getElementById('aligment');
    const characterLevelInput = document.getElementById('level');

    const errorNick = document.getElementById('errorNick');
    const errorClass = document.getElementById('errorClass');
    const errorRace = document.getElementById('errorRace');
    const errorAlignment = document.getElementById('errorAlignment');
    const errorLevel = document.getElementById('errorLevel');
    const errorsSummary = document.getElementById('errorsSummary');

    // omijam Alignment bo nie jest wymagany
    resetErrors([characterNickInput, characterClassInput, characterRaceInput, characterLevelInput],
        [errorNick, errorClass, errorRace, errorLevel], errorsSummary);

    let valid = true;


    // Nick
    if (!checkRequired(characterNickInput.value)) {
        valid = false;
        setError(characterNickInput, errorNick, "Field is required");
    } else if (!checkTextLengthRange(characterNickInput.value, 2, 30)) {
        valid = false;
        setError(characterNickInput, errorNick, "Wrong length! (2-30) ");
    }

    //Class
    if (!checkRequired(characterClassInput.value)) {
        valid = false;
        setError(characterClassInput, errorClass, "Field is required");
    } else if (!checkTextLengthRange(characterClassInput.value, 2, 30)) {
        valid = false;
        setError(characterClassInput, errorClass, "Wrong length! (2-30) ");
    }

    //Race
    if (!checkRequired(characterRaceInput.value)) {
        valid = false;
        setError(characterRaceInput, errorRace, "Field is required");
    } else if (!checkTextLengthRange(characterRaceInput.value, 2, 30)) {
        valid = false;
        setError(characterRaceInput, errorRace, "Wrong length! (2-30) ");
    }

    //Alignment
    //is not required

    //Level
    level = characterLevelInput.value;
    if (!checkRequired(level)) {
        valid = false;
        setError(characterLevelInput, errorLevel, "Field is required");
    } else if (!checkNumber(level)) {
        valid = false;
        setError(characterLevelInput, errorLevel, "Wrong Format");
    } else if (!checkNumberRange(level, 1, 20)) {
        valid = false;
        setError(characterLevelInput, errorLevel, "Level range: 1-20");
    }

    if (!valid) {
        errorsSummary.innerText = "Check provided data!";
    }

    return valid;
}



