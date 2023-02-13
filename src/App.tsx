import React, {useState} from 'react';
//types
import {Diff, fetchquestions, QuestionsState} from "./API";
import Card from "./components/cards/Card";
//styles
// @ts-ignore

import {GlobalStyle, Wrapper} from "./App.styles";

// We can show all the corrct answers later
export type Answeroject={
    question:string;
    answer:string;
    correct:boolean;
    correctanswer:string;
}


const Total_Qeustions=10;
const App=()=> {
    const[loading,setloading]=useState(false);
    const [questions,setquestions]=useState<QuestionsState[]>([]);
    const [number,setnumber]=useState(0);
    const [answered,setanswered]=useState<Answeroject[]>([]);
    const [scor,setscor]=useState(0);
    const [gameover,setgameover]=useState(true);


   console.log(questions) ;



    //this will start the Quiz
    const askmeFunFacts= async ()=>{
        //when we strat the game it means we are fetching the data and we started the loadin
        setloading(true);
        setgameover(false);
        //fethcing
        const newquestion=await fetchquestions(
            Total_Qeustions,Diff.hard
        )
        //setinting up the questions
        //we should do some error handling hier
        setquestions(newquestion);
        setscor(0);
        setanswered([]);
        setnumber(0);
        setloading(false);


    };
    //this funtion will take an Mouseclick on a button to show the answer
    const checkanswer= (e: React.MouseEvent<HTMLButtonElement>) => {
        //we will get the user answer if the game is not over
        if(!gameover) {
            const answer = e.currentTarget.value;
            //we check it if it is correct this will return true or false
            const correct =questions[number].correct_answer===answer;
            //now we set the score if the answer is correct
            if(correct) setscor(prev =>prev+1 );

            //save ansewr in the array
            const answeroject={
                question:questions[number].question,
                //ES6 syntex like answer:answer
                answer,
                correct,
                correctanswer:questions[number].correct_answer,
            };
            //now we put it in the answerarray
            setanswered((prev)=>[...prev,answeroject]);
        }
    }
//this function will show us next qustion
    const next=()=>{
//show us the next questions in the game
        const nextquestion=number+1;
        if(nextquestion===Total_Qeustions){
            setgameover(true);
        }else{
            setnumber(nextquestion);
        }
    }

    // @ts-ignore
    return (
<>
    <GlobalStyle/>
    <Wrapper>
    <div className="App">
      <h1>FunFacts</h1>
        {gameover||Total_Qeustions===answered.length ? (
        <button className="start" onClick={askmeFunFacts}>Los geht's </button>
        ):null}
        {!gameover? <p className="score">Score:{scor}</p>:null}

        {loading&& <img  style={{ width: 200 }} src={require('./images/loading-gif.gif')} />
        }
        {/* you can write this also like {loading? <p>Loading.... hier we will impliment a spiner</p>:null}*/}


        {!loading&&!gameover&&(
            <Card
                questionNr={number+1}
            totalQuestions={Total_Qeustions}
            question={questions[number].question}
            answers={questions[number].answers}
            answerd={answered? answered[number]:undefined}
            callbakc={checkanswer}
            />
            )}


        {!gameover&&!loading&&answered.length===number+1&&number!==Total_Qeustions&&
            <button className="next" onClick={next}>next</button>
        }
    </div>
    </Wrapper>
</>
  );
}

export default App;
