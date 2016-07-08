$(function(){
   setTimeout(function() {
      $("#splash").fadeOut("slow", function() {
         $("#content").show();
      });
   }, 8000);
});

var questionCounter = 0;
var answersArray = [];
var quiz = $("#quiz");
var index = 0;

var questions2 = {
  question: "What are the best birth control options for player 1?",
  bcArray: ["the pill (combination)", "mini pill", "the patch", "the implant", "Nuvaring", "Depo shot", "IUD"]
}

bcArray = questions2.bcArray;

  var questions = [
    // question 1
    {
      question: "What gender do you identify as?",
      answersArray: ["female", "male"]
    },
    // question 2
    {
      question: "I am comfortable taking birth control with hormones",
      answersArray: ["yes", "I'm not sure", "no"]
    },
    // question 3
    {
      question: "I would like a birth control with less hormones",
      answersArray: ["yes", "I'm not sure", "no"]
    },
    // question 4
    {
      question: "I want to take birth control every",
      answersArray: ["day", "week", "month", "year"]
    },
    // question 5
    {
      question: "I am a smoker",
      answersArray: ["yes", "no"]
    },
    // question 6
    {
      question: "I want to skip monthly periods",
      answersArray: ["yes", "I'm not sure", "no"]
    },
    // question 7
    {
      question: "I want my birth control to be private and unable to be seen by others",
      answersArray: ["yes", "I'm not sure", "no"]
    },
    // question 8
    {
      question: "I want a birth control that is more effective than others",
      answersArray: ["yes", "no"]
    },
    // question 9
  ]

  // Display first question
  function makeQuestionEl(index) {

    // create question div
    var questionEl = $("<div>", {
      id: "question"
    });

    // append question to div
    var question = questions[index].question;
    questionEl.append(question);

    $("#container").append(questionEl);

    var radioButtons = createRadio(index);
    questionEl.append(radioButtons);
  }

  makeQuestionEl(index);

  // display answers
  function createRadio(index) {
    var radioList = $("<ul>");
    var item;
    var input = "";
    var itemText;
    for(var i = 0; i < questions[index].answersArray.length; i++) {
      item = $("<li>");
      input = "<input type='radio' name='answer' class='radioId' value=" + i + " />";
      itemText = questions[index].answersArray[i];
      item.append(input);
      item.append(itemText);
      radioList.append(item);
    }
    $("#question").append(radioList);

    $(".radioId").on("click", function() {
      console.log($(this).parent());
      answersArray.push($(this).parent().text());
      $(".radioId").off("click");
      $(".radioId").on("click", function() {
        answersArray.pop();
        answersArray.push($(this).parent().text());
      })
    })
  }

  // display Next function
  $("#next").click(function(){
    // event listener for next button
    $("#question").fadeOut(500, function() {
      $("#question").remove();
      index++
      if (index <= 7) {
        makeQuestionEl(index);
      } else {
        // alert(winLogic());
        alert(winLogic());
        // displayQuizAnswers();
        makeQuestionEl2();
        // // display choices for user 2 to guess
        // // "user 2 answer"
        // // append li with answer
        //
        //  // user 2
        // $("li").click(function() {
        //   var guess = $(this).text()
        //   if resultsArray.indexOf(guess) != - 1 {
        //     // win
        //   } else {
        //     // lose
        //   }
        //
      }
    })
  });

  var resultsArray = [];

  function winLogic () {
  //[                               "1",    "2",  "3",  "4",   "5",  "6",   "7"   "8"] ||

    if (
    answersArray.toString() === ["female", "yes", "no", "day", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "day", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "day", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "day", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "day", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "day", "no", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "day", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "day", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "day", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "day", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "day", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "day", "no", "no", "no", "yes"].toString() ||

    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "no", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "no", "no", "no", "yes"].toString())
    {
      resultsArray.push("combination pill");
    }
    if (
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "no", "no", "yes"].toString() ||

    answersArray.toString() === ["female", "yes", "yes", "day", "yes", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "yes", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "yes", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "yes", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "yes", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "yes", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "yes", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "yes", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "yes", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "yes", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "yes", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "yes", "no", "no", "yes"].toString() ||

    answersArray.toString() === ["female", "yes", "yes", "day", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "day", "no", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "day", "no", "no", "no", "yes"].toString() ||

    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "yes", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "yes", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "yes", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "yes", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "yes", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "day", "yes", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "yes", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "yes", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "yes", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "yes", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "yes", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "day", "yes", "no", "no", "yes"].toString())
    {
      resultsArray.push("mini pill");
    }
    if (
    answersArray.toString() === ["female", "yes", "no", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "week", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "week", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "week", "no", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "week", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "week", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "week", "no", "no", "no", "yes"].toString() ||

    answersArray.toString() === ["female", "yes", "yes", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "no", "no", "yes"].toString() ||
//
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "no", "no", "yes"].toString() ||

    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "yes", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "no", "no", "yes"].toString())
    {
      resultsArray.push("the patch");
    }
    if (
    answersArray.toString() === ["female", "yes", "yes", "year", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "year", "no", "yes", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "year", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "year", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "year", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "year", "no", "no", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "year", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "year", "no", "yes", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "year", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "year", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "year", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "year", "no", "no", "yes", "yes"].toString() ||

    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "yes", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "no", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "year", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "year", "no", "yes", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "year", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "year", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "year", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "year", "no", "no", "yes", "yes"].toString())
    {
      resultsArray.push("the implant");
    }
    if (
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "yes", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "week", "no", "no", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "yes", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "week", "no", "no", "yes", "yes"].toString() ||

    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "yes", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "week", "no", "no", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "yes", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "yes", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "week", "no", "no", "yes", "yes"].toString())
    {
      resultsArray.push("Nuvaring");
    }
    if (
        //[                          "1",    "2",  "3",  "4",   "5",  "6",   "7"   "8"] ||
    answersArray.toString() === ["female", "yes", "no", "month", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "month", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "month", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "no", "month", "no", "no", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "month", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "month", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "month", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "no", "month", "no", "no", "yes", "yes"].toString() ||

    answersArray.toString() === ["female", "yes", "I'm not sure", "month", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "month", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "month", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "month", "no", "no", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "month", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "month", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "month", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "month", "no", "no", "yes", "yes"].toString())
    {
      resultsArray.push("Depo shot");
    }
    if (
        //[                          "1",    "2",  "3",  "4",   "5",  "6",   "7"   "8"] ||
    answersArray.toString() === ["female", "yes", "yes", "year", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "year", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "year", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "yes", "year", "no", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "year", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "year", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "year", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "yes", "year", "no", "no", "no", "yes"].toString() ||

    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "no", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "year", "no", "I'm not sure", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "year", "no", "I'm not sure", "no", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "year", "no", "no", "I'm not sure", "yes"].toString() ||
    answersArray.toString() === ["female", "yes", "I'm not sure", "year", "no", "I'm not sure", "yes", "yes"].toString() ||
    answersArray.toString() === ["female", "I'm not sure", "I'm not sure", "year", "no", "no", "no", "yes"].toString())
    {
      resultsArray.push("IUD");
    }
    // if (
    //
    //
    //
    //
    //
    //
    // {
    //   resultsArray.push("non-hormonal IUD");
    // }
    return resultsArray;
  }


  // display player 1's answers
  // function displayQuizAnswers() {
  //   var $quizAnswers = $("<p>");
  //
  //   $quizAnswers.append(answersArray);
  //   $('body').append($quizAnswers)
  // }





  // Display question for player 2
  function makeQuestionEl2() {
    // create question div
    var questionEl2 = $("<div>", {
      id: "question2"
    });

    questionEl2.append("Player 1's quiz results are below. Please select the best birth control options for them." + "<br /><br />");


    for (var i = 0; i < answersArray.length; i++) {
    questionEl2.append(questions[i].question + "<br />");
    questionEl2.append(answersArray[i] + "<br />");
    }
    // for loop
    // {
    // questions[i].question
    // answersArray[i]
    // }

    // append question to div
    var question2 = questions2.question;
    questionEl2.append(question2);
    $("#container").append(questionEl2);

    var radioButtons2 = createRadio2();
    questionEl2.append(radioButtons2);
  }

  // user 2 plays card
  function createRadio2(index) {
    var radioList2 = $("<ul>");
    var item2;
    var input2 = "";
    var itemText2;
    for(var i = 0; i < questions2.bcArray.length; i++) {
      item2 = $("<li>");
      input2 = "<input type='radio' name='answer2' class='radioId2' value=" + i + " />";
      itemText2 = questions2.bcArray[i];
      item2.append(input2);
      item2.append(itemText2);
      radioList2.append(item2);
    }
    $("#question2").append(radioList2);

    $(".radioId2").on("click", function() {
      console.log($(this).parent());
      var user2guess = $(this).parent().text();
      console.log(user2guess);
      console.log(resultsArray);
      for(var i = 0; i <= resultsArray.length; i++) {
        if (user2guess === resultsArray[i]) {
          alert("You win!");
          return;
        }
      }
      alert("You lose");
    })
  }

  function winLogic2() {
    if (bcArray.toString() === resultsArray.toString()) {
      alert("You are correct!");
    } else {
      alert("ur wrong dummy");
    }
  }
