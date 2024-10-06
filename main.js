var riddle = {
    question: 'Висит груша, нельзя скушать',
    correctAnswer: 'лампа',
    hints: ['это не съедобное', 'это источник света'],
    tries: 3,
    currentTries: 0,

    checkAnswer(userAnswer) {
        this.currentTries++;

        if (userAnswer === this.correctAnswer) {
            alert("Правильный ответ");
            console.log("Пользователь угадал правильный ответ.");
        } else {
            if (this.currentTries < this.tries) {
                alert("Неправильный ответ");
                console.log("Пользователь не угадал, попытка " + this.currentTries);
                
                // Предоставляем подсказки после первых двух неправильных ответов
                if (this.currentTries === 2) {
                    alert("Подсказка: " + this.hints[0]);
                } else if (this.currentTries === 3) {
                    alert("Подсказка: " + this.hints[1]);
                }
            } else {
                alert("Игра окончена");
                console.log("Пользователь исчерпал все попытки.");
            }
        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];
    var guessedAnswer = input.value.trim();

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer);
        input.value = ''; // Очищаем поле ввода после проверки
    }
}