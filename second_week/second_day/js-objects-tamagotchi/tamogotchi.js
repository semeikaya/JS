const tamogotchi = {
    name: 'шлепа',
    meal: 5,
    energy: 5,
    mood: 5,
    getStatus: function () {

        if (this.meal > 3 && this.energy > 3 && this.mood > 3 ) {
            console.log('Балдеж 😁');
        }
        else if (this.meal <=0 || this.energy <=0  || this.mood <=0 ) {
            console.log(this.name +  ' умер :(');
        }
        else if (this.meal < 3 && this.energy < 3 && this.mood < 3) {
            console.log(`Имя: ${this.name}, Еда: Я голоден, Энергия: Я хочу спать, Настроение: Мне скучно`);
        }
        else if (this.meal < 3 && this.energy < 3 && this.mood >= 3) {
            console.log(`Имя: ${this.name}, Еда: Я голоден, Энергия: Я хочу спать, Настроение: ${this.mood}`);
        }
        else if (this.meal < 3 && this.energy >= 3 && this.mood < 3){
            console.log(`Имя: ${this.name}, Еда: Я голоден, Энергия: ${this.energy}, Настроение: Мне скучно`);
        }
        else if (this.meal >= 3 && this.energy < 3 && this.mood < 3){
            console.log(`Имя: ${this.name}, Еда: ${this.meal}, Энергия: Я хочу спать, Настроение: Мне скучно`);
        }
        else if (this.meal < 3 && this.energy >= 3 && this.mood >= 3){
            console.log(`Имя: ${this.name}, Еда: Я голоден, Энергия: ${this.energy}, Настроение: ${this.mood}`);
        }
        else if (this.meal >= 3 && this.energy < 3 && this.mood >= 3){
            console.log(`Имя: ${this.name}, Еда:  ${this.meal}, Энергия: Я хочу спать, Настроение: ${this.mood}`);
        }
        else if (this.meal >= 3 && this.energy >= 3 && this.mood < 3){
            console.log(`Имя: ${this.name}, Еда:  ${this.meal}, Энергия: ${this.energy}, Настроение: Мне скучно`);
        }
        
    },
    setName: function (character){
        this.name = character
    },
    setEat: function () {
        if (this.meal < 5) {
            this.meal += 1;
            this.mood -= 1
        }else{
            this.mood -=1
        }
    },
    setSleep: function () {
        if (this.energy < 5) {
            this.energy += 1;
            this.meal -= 1
        }else{
            this.meal -=1
        }
    },
    setPlay: function () {
        if (this.mood < 5) {
            this.mood += 1;
            this.energy -= 1
        }else{
            this.energy -=1
        }
    }

}

tamogotchi.getStatus()
