$(document).ready(function () {
    let clickCount = 0;
    let timeRemaining = 60;
    let timer;

    // Start Game
    $("#start-btn").click(function () {
        clickCount = 0;
        timeRemaining = 60;
        $("#click-count").text(clickCount);
        $("#time-remaining").text(timeRemaining);
        
        timer = setInterval(function () {
            timeRemaining--;
            $("#time-remaining").text(timeRemaining);
            if (timeRemaining <= 0) {
                clearInterval(timer);
                alert(`Time's up! You clicked ${clickCount} times.`);
            }
        }, 1000);
    });

    // Count Clicks
    $("#click-game").click(function () {
        if (timeRemaining > 0) {
            clickCount++;
            $("#click-count").text(clickCount);
        }
    });
});

// Função para enviar e-mail (a ser implementada)
function sendEmail() {
    // Adicione a lógica para enviar o e-mail
    alert("Email sent!");
}
