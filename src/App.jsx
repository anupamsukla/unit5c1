import { useState } from "react";

function App() {
  const [score, setScore] = useState(76);
  const [wicket, setWicket] = useState(2);
  const [over, setOver] = useState(50);
  const [winmessage, setWinmessage] = useState("");

  function handle(value, key) {
    if (key === "score" && score > 100) {
      setWinmessage("India Won");
      return;
    } else if (key === "score" && wicket < 11) {
      setScore(score + value);
    }
    if (key === "wicket" && score < 100 && wicket < 11) {
      setWicket(wicket + value);
    }
    if (key === "over" && score < 100 && wicket < 11) {
      setOver(over + value);
    }
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{score}
          <h1 className="scoreCount">
            {
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{over}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1"
          onClick={() => {
            handle(1, "score");
          }}
        >
          Add 1
        </button>
        <button
          className="addScore4"
          onClick={() => {
            handle(4, "score");
          }}
        >
          Add 4
        </button>
        <button
          className="addScore6"
          onClick={() => {
            handle(6, "score");
          }}
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
          onClick={() => {
            handle(1, "wicket");
          }}
        >
          Add 1 wicket
        </button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            handle(0.1, "over");
          }}
        >
          Add 1
        </button>
      </div>

      <h1>{winmessage}</h1>
    </div>
  );
}

export { App };
