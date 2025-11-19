const buttons = document.querySelectorAll('.dayBox');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const day = button.dataset.day;
        window.location.href = `days/day${day}.html`;
    });
});

const questions = [
    //1
    {question:"Mitä joulu alun perin juhlistaa?",
        answers: [
            {text:"Kevään tuloa", correct: false},
            {text:"Jeesuksen syntymää", correct: true},
            {text:"Talven loppua", correct:false}
        ]
    },//2
    {question:"Missä joulupukin koti sijaitsee Suomessa?",
        answers:[
            {text:"Lapissa, Korvatunturilla", correct: true},
            {text:"Helsingissä", correct: false},
            {text:"Kuusamo", correct: false}
        ]
    },//3
    {question:"Kuka oli Joulupukin tarinan esikuva?",
        answers: [
            {text:"Pyhä Nikolaus", correct: true},
            {text:"Pyhä Johannes", correct: false},
            {text:"Talven loppua", correct:false}
        ]
    },//4
    {question:"Mikä on yksi tontun tehtävistä?",
        answers: [
            {text:"Pelotella lapsia", correct: false},
            {text:"Valvoa, että lapset ovat käyttäytyvät kiltisti", correct: true},
            {text:"Jakaa lahjoja jouluaattona  ", correct:false}
        ]
    }, //5
    {question:"Mikä eläin vetää joulupukin rekeä?  ",
        answers: [
            {text: "Hevonen", correct: false},
            {text: "Porot", correct: true},
            {text: "Koira ", correct:false}
        ]
    },//6
    {question:"Mitä lapset usein kirjoittavat ennen joulua?",
        answers: [
            {text: "Kirje joulupukille", correct: true},
            {text: "Koulu testit", correct: false},
            {text: "Viestit kavereille", correct:false}
        ]
    }, //7   
     {question:"Mikä on joulukalenterin tarkoitus?",
        answers: [
            {text: "Laskea päiviä jouluun", correct: true},
            {text: "Opettaa matematiikkaa", correct: false},
            {text: "Korvata joululahjat", correct:false}
        ]
    },  //8-1
      
    {question:"Missä maasa lapset jättävät kengät oven eteen 6. joulukuuta saadakseen lahjoja Pyhältä Nikolaus-piispalta?",
        answers: [
            {text: "Ranska", correct: false},
            {text: "Italia", correct: false},
            {text: "Saksa", correct:true}
        ]
    }, //9-2 
    {question:"Missä maassa joulua vietetään kesällä, ja ihmiset kokoontuvat rannalle grillaamaan ja laulamaan joululauluja shortseissa?",
        answers: [
            {text: "Kanada", correct: false},
            {text: "Australia", correct: true},
            {text: "Etelä-Afrikka", correct:false}
        ]
    },  //10-3
    {question:"Missä maassa lahjat jaetaan usein vasta loppiaisena, 6. tammikuuta, kolmen tietäjän kunniaksi",
        answers: [
            {text: "Norja", correct: false},
            {text: "Ranska", correct: false},
            {text: "Espanja", correct:true}
        ]
    }, //11-4
    {question:"Missä maassa jouluaattoa vietetään 24. joulukuuta ja perinteisiin kuuluu haudoilla käynti?",
        answers: [
            {text: "Suomi", correct: true},
            {text: "Ranska", correct: false},
            {text: "Espanja", correct: false}
        ]
    }, //12-5
     {question:"Missä maassa juhlitaan Las Posadas -perinnettä, jossa kuljetaan ovelta ovelle kuin Maria ja Joosef? ",
        answers: [
            {text: "Chile", correct: false},
            {text: "Meksiko", correct: true},
            {text: "Brasilia", correct: false}
        ]
    },//13-6
    {question:"Missä maassa naimattomat naiset heittävät jouluaattona kengän olkansa yli ennustaakseen avioliittoa?",
        answers: [
            {text: "Slovakia", correct: false},
            {text: "Unkari", correct: false},
            {text: "Tšekki", correct: true}
        ]
    }, //14-7
    {question:"Missä maassa joulun aikaan piilotetaan luudat, jotta noidat eivät pääse lentämään niillä?",
        answers: [
            {text: "Norja", correct: true},
            {text: "Islanti", correct: false},
            {text: "Ruotsi", correct: false}
        ]
    }, //15-1
     {question:"Missä maassa jouluna syödään perinteisesti paistettua kanaa KFC:stä?",
        answers: [
            {text: "Etelä-Korea", correct: false},
            {text: "Japani", correct: true},
            {text: "Kiina", correct: false}
        ]
    }, //16-2
    {question:"Missä maassa joulupöytään kuuluu usein seitsemän erilaista kala-annosta? ",
        answers: [
            {text: "Portugalli", correct: false},
            {text: "Italia", correct: true},
            {text: "Ranska", correct: false}
        ]
    },//17-3

 {question:"Missä maassa jouluruokaan kuuluu usein “hallaca” – maissitaikinasta tehty täytetty nyytti, joka kääritään banaaninlehteen?",
        answers: [
            {text: "Venezuela", correct: true},
            {text: "Kolumbia", correct: false},
            {text: "Ecuador", correct: false}
        ]
    },//18-4

    {question:"Missä maassa joulun aikaan nautitaan “pierogi”-nyyttejä ja punajuurikeittoa nimeltä “barszcz”? ",
        answers: [
            {text: "Slovakia", correct: false},
            {text: "Puola", correct: true},
            {text: "Venäjä", correct: false}
        ]
    },//19-5
     {question:"Missä maassa nautitaan panettonea, makea hedelmäkakkua?",
        answers: [
            {text: "Venezuela", correct: false},
            {text: "Iso-Britannia", correct: false},
            {text: "Italia", correct: true}
        ]
    },//20-6
     {question:"Missä maassa joulupöydän klassikko on joulukinkku, laatikot ja riisipuuro? ",
        answers: [
            {text: "Ruotsi", correct: false},
            {text: "Suomi", correct: true},
            {text: "Tanska", correct: false}
        ]
    },//21-7
     {question:"Mikä on suomalainen makea, hedelmäinen leivonnainen, jota nautitaan usein joulun aikaan?",
        answers: [
            {text: "Joulutähti", correct: false},
            {text: "Korvapuusti", correct: false},
            {text: "Joulutorttu", correct: true}
        ]
    },//22-1
     {question:"Minkä niminen hahmo ilmestyy ruotsalaisessa Lucia-juhlassa kynttiläkruunu päässään ja tuo valoa pimeyteen? ",
        answers: [
            {text: "Lucia-neito", correct: true},
            {text: "Valonhaltija", correct: false},
            {text: "Talvikeiju", correct: false}
        ]
    },//23-2
     {question:"Minkä niminen hahmo esiintyy hollantilaisessa jouluperinteessä ja saapuu laivalla Espanjasta tuomaan lahjoja? ",
        answers: [
            {text: "Sinterklaas", correct: false},
            {text: "Pietari Pyhä", correct: true},
            {text: "Nikolaus Mereltä", correct: false}
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
        btn.classList.add("btn"); 
        btn.classList.add("answer-btn");
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



