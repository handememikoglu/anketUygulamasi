// Basit Anket Uygulaması
const newArray = [];
const survey = [
    {
        question: "2+2'nin cevabı nedir?",
        answer1: 4,
        answer2: 5
    },
    {
        question: "3+3'ün cevabı nedir?",
        answer1: 6,
        answer2: 7
    },
    {
        question: "15+15'in cevabı nedir?",
        answer1: 25,
        answer2: 30
    }

];

for (let i = 0; i < survey.length; i++) {
    alert(`${survey[i].question}`);
    let num = Number(prompt(`Seçenek1: ${survey[i].answer1} \n Seçenek2: ${survey[i].answer2}`));
    const obje = {
        Cevap: num,
        cevap: num,
        cevap: num

    };
    
    newArray.push(obje);

    
}
console.log(newArray);
