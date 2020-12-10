//Big thanks to tgallimore for graciously providing the
//groundwork for this code skeleton!
let questions = { //This should be changed!
  1 : {'a':1,'b':2,'c':3,'d':4},
  2:  {'a':2,'b':3,'c':4,'d':1},
  3:  {'a':2,'b':4,'c':1,'d':3},
  4:  {'a':3,'b':1,'c':2,'d':4},
  5:  {'a':1,'b':2,'c':3,'d':4},
  6:  {'a':1,'b':2,'c':3,'d':4}
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
  let self = this;
  this.init = function(){
    $('.quiz-answer').on('click', function(){
      var $this = $(this)
      var $answers = $this.closest('ul[data-quiz-question]');
      self._pickAnswer($this, $answers);

      if ( self._isComplete() ) {
        // scroll to answer section
        $('html, body').animate({
          scrollTop: $('.quiz-result').offset().top
        });

        self._showResult( self._calcResult() );
        $('.quiz-answer').off('click');
      }
    });
  }
  this.questionNumber = 1
  this.catagoryCounts = {1:0, 2:0, 3:0, 4:0}

  // TODO
  //TODO
  this._pickAnswer = function($answer, $answers){
    $answers.find('.quiz-answer').removeClass('active');
    $answer.addClass('active');
  }

  this._calcResult = function(){
    let chosenAnswers = []
    $('ul[data-quiz-question]').each(function(questionNumber, question){
      var chosenAnswer = $(question).find('.quiz-answer.active').data('quiz-answer')
      chosenAnswers.push(chosenAnswer);
    });
    console.log(chosenAnswers)
    for(let i = 0; i < chosenAnswers.length; i++){
      let answer = chosenAnswers[i]
      let catagory = questions[i+1][answer]
      this.catagoryCounts[catagory] += 1
    }
    return calculateAnswer(this.catagoryCounts)
  }

  this._isComplete = function(){
    var answersComplete = getNumberCompleteAnswers();
    if ( answersComplete >= 6 ) {
      return true;
    }
    else {
      return false;
    }
  }

  this._showResult = function(result){
    $('.quiz-result').addClass('good').html(result);
  }
}

// More magic that make thing work behind the scenes!
function getNumberCompleteAnswers() {
  let numCompleteAnswers = 0;
  $('ul[data-quiz-question]').each(function(){
    if ( $(this).find('.quiz-answer.active').length ) {
      numCompleteAnswers++;
    }
  });
  return numCompleteAnswers;
}

var quiz = new Quiz();
quiz.init();
