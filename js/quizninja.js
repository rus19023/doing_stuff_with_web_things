const quiz = [
    { name: "Superman", realName: "Clark Kent" },
    // { name: "Wonder Woman", realName: "Diana Prince" },
    // { name: "Batman", realName: "Bruce Wayne" },
    // { name: "Flash", realName: "Barry Allen" },
    // { name: "Cyborg", realName: "Victor Stone" },
    // { name: "IronMan", realName: "Tony Stark" },
    // { name: "Catwoman", realName: "Selena Kyle" },
    // { name: "Riddler", realName: "Edward Nygma" },
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),

    render(target,content,attributes) {
        for(const key in attributes) {
          target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
  };

  // Game Object
  const game = {
    start(quiz) {
      this.score = 0;
      this.questions = [...quiz];
      // main game loop
      this.qnum = this.questions.length;
      this.qcount = 0;
      console.log(this.qnum, this.qcount)
      for(const question of this.questions) {
        this.question = question;
        this.ask();
        this.qcount++;
      }
      // end of main game loop
      this.gameOver();
    },

    ask() {
      const question = `What is ${this.question.name}'s real name?`;
      view.render(view.question, question);
      const response =  prompt(question).toLowerCase();
      this.check(response);
    },

    check(response) {
      const answer = this.question.realName.toLowerCase();
      if(response === answer) {
        view.render(view.result,'Correct!',{'class':'correct'});
        alert('Correct!');
        this.score = this.score + 10;
        view.render(view.score,this.score);
      } else {
        view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        alert(`Wrong! The correct answer was ${answer}`);
      }
    },

    gameOver() {
      // add bonus for all questions answered correctly
      if (qcount = qnum) {
        let bonus = this.score * qnum;
        console.log(qnum, qcount, bonus)
        view.render(view.info,`Game Over, you answered all questions correctly, so your bonus was ${bonus} and your total score is ${this.score} point${this.score > 1 ? 's' : ''}`);
      } else {
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score > 1 ? 's' : ''}`);
      }
    }
  }
  game.start(quiz);