class Patient {
    constructor (f, i, o, d, s, sh) {
this.F = f;
this.I = i;
this.O = o;
this.D = new Date(d);
this.S = s;
this.SH = sh;
    }
    setById () {
        document.getElementById("F").textContent =this.F;
        document.getElementById("I").textContent =this.I;
        document.getElementById("O").textContent =this.O;
        document.getElementById("Y").textContent =this.D.getFullYear();
        document.getElementById("S").textContent =this.S;
        document.getElementById("SH").textContent =this.SH;
    }
}
let Ivanov = new Patient('Иванов', 'Иван', 'Иванович', new Date(1980, 6, 10), "м", "Назначено");
let Petrova = new Patient('Петрова', 'Карина', 'Юрьевна', new Date(1974, 19, 10), "ж", "Медотвод");
let Smirnova = new Patient('Cмирнова', 'Ирина', 'Александровна', new Date(2001, 6, 5), "ж", "Исполнено");
let Stepanov = new Patient('Степанов', 'Иван', 'Сергеевич', new Date(1989, 18, 11), "м", "Медотвод");
let Osinov = new Patient('Осипов', 'Олег', 'Иванович', new Date(1990, 15, 6), "м", "Исполнено");
/*Ivanov.setById();
Petrova.setById();*/
Smirnova.setById();
/*Stepanov.setById();
Osinov.setById();*/

