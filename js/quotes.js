const quotes = [
    {
        kor: "삶은 달걀",
        eng: "Life is an egg",
    },
    {
        kor: "현실도피자",
        eng: "Reality is also a pizza",
    },
    {
        kor: "갑자기 화가 난다",
        eng: "Suddenly artist is flying",
    },
    {
        kor: "야 너 잘 만났다",
        eng: "Nice to meet you",
    },
    {
        kor: "한동안 눈에 띄지 마라",
        eng: "Long time no see",
    },
    {
        kor: "왜요?",
        eng: "J-POP?",
    },
    {
        kor: "그런 말을 잘도 하네",
        eng: "You speak very well",
    },
    {
        kor: "니한테나 좋지",
        eng: "Good for you",
    },
    {
        kor: "두고 보자",
        eng: "See you later",
    },
    {
        kor: "비켜",
        eng: "turn on the B",
    },
    {
        kor: "듣자 듣자 하니 정말 못 들어주겠네",
        eng: "listen listen I can't listen",
    },
    {
        kor: "살다 살다 별별 사람 내가 다 보네",
        eng: "live live star star people I see",
    }
];

const kor = document.querySelector("#quote span:first-child");
const eng = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[parseInt(Math.random() *999 %quotes.length)];

kor.innerHTML = todaysQuote.kor;
eng.innerHTML = todaysQuote.eng;