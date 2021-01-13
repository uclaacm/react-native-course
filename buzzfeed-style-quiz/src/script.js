//Big thanks to tgallimore for graciously providing the
//groundwork for this code skeleton!
let questions = {
  //This should be changed!
  'Q1':  {'a':1,'b':2,'c':3,'d':4},
  'Q2':  {'a':2,'b':3,'c':4,'d':1},
  'Q3':  {'a':2,'b':4,'c':1,'d':3},
  'Q4':  {'a':3,'b':1,'c':2,'d':4},
  'Q5':  {'a':1,'b':2,'c':3,'d':4},
  'Q6':  {'a':1,'b':2,'c':3,'d':4}
}

function calculateAnswer(results){
  let oneScore = results[1]
  let twoScore = results[2]
  let threeScore = results[3]
  let fourScore = results[4]
  let result = "hello" //this shoud be changed!

  //Start with some if statments!
  return "hello"
}


let Quiz = function(){
  let myQuiz = this;
  this.init = function(){
    $('.quiz-answer').on('click', function(){
      let selectedAnswer = $(this);
      pickAnswer(selectedAnswer);

      if ( myQuiz._isComplete() ) {
        scrollToAnswerSection();
        myQuiz._showResult( myQuiz._calcResult() );
        deactivateQuiz();
      }
    });
  }
  this.catagoryCounts = {1:0, 2:0, 3:0, 4:0}

  this._calcResult = function(){
    let chosenAnswers = getAllChosenAnswers()
    console.log(chosenAnswers)

    for(let i = 0; i < chosenAnswers.length; i++){
      let answer = chosenAnswers[i]
      let questionNumber = getQuestionNumber(i);
      let catagory = questions[questionNumber][answer]
      this.catagoryCounts[catagory] += 1
    }
    return calculateAnswer(this.catagoryCounts)
  }

  this._isComplete = function(){
    let answersComplete = getNumberCompleteAnswers();
    if ( answersComplete >= 6 ) {
      return true;
    }
    else {
      return false;
    }
  }

  this._showResult = function(result){
    renderResult(result);
    highlightResultGreen();
  }
}

/*
 * More magic that makes things work behind the scenes!
 * We've moved most of the complex logic into these
 * helper functions so you won't have to worry about
 * it (and so the above code reads more like English).
 * You don't have to touch any of the code below this
 * comment, and messing with it might break your quiz.
 * If you're curious, however, feel free to see if you
 * can understand what's going on here!
 */
function getNumberCompleteAnswers() {
  let numCompleteAnswers = 0;
  $('ul[data-quiz-question]').each(function(){
    if ( $(this).find('.quiz-answer.chosen').length ) {
      numCompleteAnswers++;
    }
  });
  return numCompleteAnswers;
}

function pickAnswer(selectedAnswer){
  let allPossibleAnswers = selectedAnswer.closest('ul[data-quiz-question]');
  allPossibleAnswers.find('.quiz-answer').removeClass('chosen');
  selectedAnswer.addClass('chosen');
}

function scrollToAnswerSection(){
  $('html, body').animate({
    scrollTop: $('.quiz-result').offset().top
  });
}

function deactivateQuiz() {
  $('.quiz-answer').off('click');
}

function getAllChosenAnswers() {
  let chosenAnswers = [];
  $('ul[data-quiz-question]').each(function(questionNumber, question){
    let chosenAnswer = $(question).find('.quiz-answer.chosen').data('quiz-answer')
    chosenAnswers.push(chosenAnswer);
  });
  return chosenAnswers;
}

function renderResult(result) {
  $('.quiz-result').html(result);
}

highlightResultGreen = () => { $('.quiz-result').addClass('good') }
highlightResultOrange = () => { $('.quiz-result').addClass('mid') }
highlightResultRed = () => { $('.quiz-result').addClass('bad') }

getQuestionNumber = (i) => {return `Q${i+1}`}

let quiz = new Quiz();
quiz.init();
