import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export const quiz = {
  questions: [
    {
      question: "1. Being on a budget means:",
      choices: [
        "a. You pay bills every month at the due date",
        "b. You made a plan of your expenses to be less than or equal to your income ",
        "c. You are earning enough money to be able to live well",
        "d. Your bills are generally paid by every due date",
      ],

      correctAnswer:
        "b. You made a plan of your expenses to be less than or equal to your income ",
    },
    {
      question: "2. What is considered an excellent credit score?",
      choices: [
        "a. 700 to 850 ",
        "b. 500 to 560",
        "c. 561 to 600",
        "d. 1000 to 1500",
      ],

      correctAnswer: "a. 700 to 850 ",
    },
    {
      question: "3. Which is a method to fund your college education?",
      choices: [
        "a. Apply for financial aid using the FAFSA and TAP applications",
        "b. Seek out less expensive college alternatives",
        "c. Seek out college scholarships",
        "d. All of the above",
      ],

      correctAnswer: "d. All of the above",
    },
    {
      question: "4. What is not a method to improve your credit score?",
      choices: [
        "a. Pay all your bills on time",
        "b. Maintain your older credit cards",
        "c. Keep your credit card balances under 30% of your credit limit",
        "d. Always pay in cash and do not get any credit cards",
      ],

      correctAnswer: "d. Always pay in cash and do not get any credit cards",
    },
    {
      question: "5. What is a good way to save money?",
      choices: [
        "a. Pay yourself first",
        "b. Save your change",
        "c. Save your tax refund",
        "d. All of the above",
      ],

      correctAnswer: "d. All of the above",
    },
    {
      question: "6. Which is a method to fund your college education?",
      choices: [
        "a. Apply for financial aid using the FAFSA and TAP applications",
        "b. Seek out less expensive college alternatives",
        "c. Seek out college scholarships",
        "d. All of the above",
      ],

      correctAnswer: "d. All of the above",
    },
    {
      question: "7. Where could you get a free credit report with no annual fees?",
      choices: [
        "a. Annualcreditreport.com",
        "b. Freecreditreport.com",
        "c. From the U.S. Department of Finance",
        "d. You can’t get a free credit report",
      ],

      correctAnswer: "d. All of the above",
    },
    {
      question: "8. If your credit card is stolen and the thief runs up a total debt of $1,000, but you notify the issuer of the card as soon as you discover it is missing, what is the maximum amount that you must pay according to Federal law?",
      choices: [
        "a. $500",
        "b. $1000",
        "c. Nothing",
        "d. $50",
      ],

      correctAnswer: "d. $50",
    },
    {
      question: "9. Under which of the following circumstances would it be financially beneficial to you to borrow money to buy something now and repay it with future income?",
      choices: [
        "a. When you need to buy a car to get a much better paying job",
        "b. When you need a vacation",
        "c. When some clothes you like go on sale",
        "d. When you want to invest the money and feel you could make more than the interest you are paying",
      ],

      correctAnswer: "a. When you need to buy a car to get a much better paying job",
    },
    {
      question: "10.  If you earned a four-year college degree, how much more money/Income could you expect to earn than if you only had a high school diploma?",
      choices: [
        "a. About 10 times as much",
        "b. No more; I would make about the same either way",
        "c. A little more than 20% more",
        "d. Much more than 70% more",
      ],

      correctAnswer: "d. Much more than 70% more",
    },
    
  ],
};

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const navigate = useNavigate();
  // navigate to home page
  const navigateHome = () => {
    navigate('/');
  };
  // navigate to profile page
  const navigateProfile = () => {
    navigate('/profile');
  };

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    // Check if selected answer is correct
    const isCorrect = selectedAnswer === correctAnswer;
    // Increment counters
    const newResult = {
      ...result,
      correctAnswers: isCorrect ? result.correctAnswers + 1 : result.correctAnswers,
      wrongAnswers: isCorrect ? result.wrongAnswers : result.wrongAnswers + 1,
    };
    setResult(newResult);
    // Save result in local storage
    localStorage.setItem('quizResult', JSON.stringify(newResult));
    // Move to the next question
    setSelectedAnswer("");
    setSelectedAnswerIndex(null);
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="container">
      <Navbar />
      <main role="main" class="container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto mt-5">
              <div className="card">
                <div className="card-header">
                  <h1 className="h3 mb-0">
                    <div>
                      <span className="active-question-no">
                        {addLeadingZero(activeQuestion + 1)}
                      </span>
                      <span className="total-question">
                        /{addLeadingZero(questions.length)}
                      </span>
                    </div>
                  </h1>
                </div>
                <div className="card-body">
                  <div className="quiz-container">
                    {!showResult ? (
                      <div>
                        <h2>{question}</h2>

                        <div class="list-group list-group-light">
                          {choices.map((answer, index) => (
                            <div key={index}>
                              <label>
                                <input
                                  type="radio"
                                  name="answer"
                                  value={answer}
                                  onClick={() =>
                                    onAnswerSelected(answer, index)
                                  }
                                  checked={selectedAnswerIndex === index}
                                />
                                {answer}
                              </label>
                              <br />
                              <br />
                            </div>
                          ))}
                        </div>

                        <br />
                        <div className="flex-right">
                          <button
                            className="btn btn-primary"
                            onClick={onClickNext}
                            disabled={selectedAnswerIndex === null}
                          >
                            {activeQuestion === questions.length - 1
                              ? "Finish"
                              : "Next"}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="result">
                          <h3>Result</h3>
                          <p>
                            Total Question: <span>{questions.length}</span>
                          </p>
                          <p>
                            Total Score:<span> {result.score}</span>
                          </p>
                          <p>
                            Correct Answers:
                            <span> {result.correctAnswers}</span>
                          </p>
                          <p>
                            Wrong Answers:<span> {result.wrongAnswers}</span>
                          </p>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-8">
                          <button class="btn btn-primary" onClick={navigateHome}>Home</button>
                          </div>
                          <div class="col-4">
                          <button class="btn btn-success" onClick={navigateProfile}>Go to Profile</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
