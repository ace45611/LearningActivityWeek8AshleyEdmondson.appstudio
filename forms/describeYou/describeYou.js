
rdoPersonality.onchange=function(){
    let userChoice = $("input[name=rdoPersonality]:checked").prop("value")
    
    if (rdoPersonality.value == 0)
        lblMessage.textContent = `I would agree that you are an '${userChoice}' person too!`
    else if (rdoPersonality.value == 1)
        lblMessage.textContent = `I would agree that you are a '${userChoice}' person too.`
    else if (rdoPersonality.value == 2)
        lblMessage.textContent = `I would agree that you are a '${userChoice}' person too!`
    else (rdoPersonality.value == 3)
        lblMessage.textContent = `I would agree that you are an '${userChoice}' person too.`
}

btnExerciseForm.onclick=function(){
  ChangeForm(favExercises)
}
