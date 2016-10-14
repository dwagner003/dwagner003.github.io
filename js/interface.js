
<script language="JavaScript">



var numQues = 4;

// number of choices in each question
var numChoi = 3;

var answers = new Array(4);

// Insert answers to questions
answers[0] = "Whistle";
answers[1] = "Red Card";
answers[2] = "England";
answers[3] = "Use of hands";

// this code comes from a basic example of an quiz that I found online, made suttle changes for my need
function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;
}

</script>
