const buttons = document.querySelectorAll('.dayBox');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const day = button.dataset.day;
        window.location.href = `days/day${day}.html`;
    });
});

const questions = [

    {question:"Mitä joulu alun perin juhlistaa?",
        answers: [
            {text:"Kevään tuloa", correct: false},
            {text:"Jeesuksen syntymää", correct: true},
            {text:"Talven loppua", correct:false}
        ]
    },
    {question:"Missä joulupukin koti sijaitsee Suomessa?",
        answers:[
            {text:"Lapissa, Korvatunturilla", correct: true},
            {text:"Helsingissä", correct: false},
            {text:"Kuusamo", correct: false}
        ]
    },
    {question:"Kuka oli Joulupukin tarinan esikuva?",
        answers: [
            {text:"Pyhä Nikolaus", correct: true},
            {text:"Pyhä Johannes", correct: false},
            {text:"Talven loppua", correct:false}
        ]
    },
    {question:"Mikä on yksi tontun tehtävistä?",
        answers: [
            {text:"Pelotella lapsia", correct: false},
            {text:"Valvoa, että lapset ovat käyttäytyvät kiltisti", correct: true},
            {text:"Jakaa lahjoja jouluaattona  ", correct:false}
        ]
    }, 
    {question:"Mikä eläin vetää joulupukin rekeä?  ",
        answers: [
            {text: "Hevonen", correct: false},
            {text: "Porot", correct: true},
            {text: "Koira ", correct:false}
        ]
    },
    {question:"Mitä lapset usein kirjoittavat ennen joulua?",
        answers: [
            {text: "Kirje joulupukille", correct: true},
            {text: "Koulu testit", correct: false},
            {text: "Viestit kavereille", correct:false}
        ]
    },    
   
]

function showQuestionForDay(dayNumber) {
    const questionElement = document.getElementById("question");
    const buttonsDiv = document.getElementById("answer-buttons");
    const vastausEl = document.getElementById("vastaus");
    const backBtn = document.getElementById("back-btn");

    //clean old buttons
    buttonsDiv.innerHTML = "";
    vastausEl.innerHTML = "";

    const q = questions[dayNumber - 1];
    questionElement.textContent = q.question;

    //buttons
    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer.text;
        buttonsDiv.appendChild(btn);
    btn.addEventListener("click", () => {
        const vastausEl = document.getElementById("vastaus");
        if(answer.correct){
        vastausEl.innerHTML = '<i class="fa-solid fa-calendar-check"></i> oikein!';
            backBtn.textContent = "takaisin"
            backBtn.onclick = () => {
            window.location.href = "../index.html";
}
        } else {
            vastausEl.innerHTML = '<i class="fa-solid fa-rotate-left"></i> väärin, yritä uudestaan!';
            const backBtn = document.getElementById("back-btn");
            backBtn.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
            backBtn.onclick = () => {
             showQuestionForDay(dayNumber); // restart the same question
};        }
    });
    });
}



