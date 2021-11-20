function validateForm() {
    // Event Validation script.

    const eventGMInput = document.getElementById('Game_Master');
    const eventDateInput = document.getElementById('Date');
    const eventGameActivityIdInput = document.getElementById('Game_Activity_Id');
    const eventCharacterIdInput = document.getElementById('Character_Id');

    const errorGM = document.getElementById('errorGame_Master');
    const errorDate = document.getElementById('errorDate');
    const errorGameActivityId = document.getElementById('errorGame_Activity_Id');
    const errorCharacterId = document.getElementById('errorCharacter_Id');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([eventGMInput, eventDateInput, eventGameActivityIdInput, eventCharacterIdInput],
        [errorGM, errorDate, errorGameActivityId, errorCharacterId], errorsSummary);

    let valid = true;

    //GM
    if (!checkRequired(eventGMInput.value)) {
        valid = false;
        setError(eventGMInput, errorGM, "Field is required!");
    } else if (!checkTextLengthRange(eventGMInput.value, 2, 30)) {
        valid = false;
        setError(eventGMInput, errorGM, "Wrong length! (2-30) ");
    }

    //Date
    let nowDate = new Date(),
        nowMonth = '' + (nowDate.getMonth() + 1),
        nowDay = '' + nowDate.getDate(),
        nowYear = '' + nowDate.getFullYear();

    if (nowMonth.length < 2) {
        nowMonth = '0' + nowMonth;
    }

    if (nowDay.length < 2) {
        nowDay = '0' + nowDay;
    }

    const nowDateString = [nowYear, nowMonth, nowDay].join('-');

    if (!checkRequired(eventDateInput.value)) {
        valid = false;
        setError(eventDateInput, errorDate, "Field is required");
    } else if (!checkDate(eventDateInput.value)) {
        valid = false;
        setError(eventDateInput, errorDate, "Wrong format!");
    } else if (!checkDateIfAfter(eventDateInput.value, nowDateString)) {
        valid = false;
        setError(eventDateInput, errorDate, "It's a date from the future");
    }

    //GameActivityId
    if (!checkRequired(eventGameActivityIdInput.value)) {
        valid = false;
        setError(eventGameActivityIdInput, errorGameActivityId, "Field is required!");
    }

    //CharacterId
    if (!checkRequired(eventCharacterIdInput.value)) {
        valid = false;
        setError(eventCharacterIdInput, errorCharacterId, "Field is required!");
    }

    if (!valid) {
        errorsSummary.innerText = "Check provided data!";
    }

    return valid;
}