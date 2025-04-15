
var person = {
    "SNILS 1": ["Иванов","Иван","Иванович",15,"мая",1974,"м","исполнено"],
    "SNILS 2": ["Петрова","Карина","Александровна",25,"сентября",2006,"ж","назначено"],
    "SNILS 3": ["Смирнов","Евгений","Валентинович",4,"апреля",1999,"м","медотвод"],
    "SNILS 4": ["Смирнова","Анастасия","Валерьевна",25,"ноября",1874,"ж","исполнено"],
    "SNILS 5": ["Филлипова","Карина","Сергеевна",6,"сентября",2018,"ж","назначено"],
    "SNILS 6": ["Беда","Сергей","Валентинович",17,"апреля",1989,"м","медотвод"],
    "SNILS 7": ["Иванов","Григорий","Алексеевич",19,"мая",2005,"м","исполнено"],
    "SNILS 8": ["Петрова","Ирина","Валентиновна",29,"декабря",20011,"ж","назначено"],
    "SNILS 9": ["Самсонов","Евгений","Григорьевич",8,"января",1949,"м","медотвод"],
    };
    console.log(person);
let SNILS;
var FirstFunction = function (person,SNILS) {
    SNILS=prompt("Введите SNILS пациента",SNILS );
    infoname=person[SNILS];
    //console.log(infoname);
    alert("Информация о пациенте" + infoname);
    statusPriv = person[SNILS][7];
    console.log(statusPriv);
};
    
//Извлекаем информацию о текущем статусе прививки
SecondFunction = function(statusPriv, infoname){
        
    //statusPriv = person[SNILS][7];

    //Проверяем возможность изменения статуса
    if (statusPriv === "исполнено") {
         alert("Отказано в прививке пациенту" + infoname);
    } else if (statusPriv === "медотвод") {
        alert("Отказано в прививке пациенту" + infoname);
     } else {
        alert("Исполнить прививку пациенту" + infoname);
    }
}
ForSecond = FirstFunction(person, SNILS);
SecondFunction(statusPriv, infoname);

//Предлагаем закончить или продолжить работу в этом окне
while(("Продолжить проверку прививочного статуса?"));{
    ForSecond = FirstFunction(person, SNILS);
    SecondFunction(statusPriv, infoname);
}
console.log ("Сеанс проверки прививочного статуса закончен");

