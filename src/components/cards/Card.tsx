import React from "react";
import {Answeroject} from "../../App";
//styles
import {ButtonWrapper} from "../cardstyles"

type props={
    question:string;
    answers:string[];
    callbakc:(e: React.MouseEvent<HTMLButtonElement>) => void;
    answerd:Answeroject|undefined;
    questionNr:number;
    totalQuestions:number;

}

//we make card a functional Compoment
const Card: React.FC<props>=({question,answers,callbakc,answerd,questionNr,totalQuestions
})=> (
    <div>
        <p className="number">Frage:{questionNr}/{totalQuestions}</p>
        <p dangerouslySetInnerHTML={{__html:question}}></p>
        <div>
            {answers.map(answer=>(
                // when we press this button the answer will be returned
                //for the boolean value we could write also
                //{!!answer}

                <ButtonWrapper
                    correct={answerd?.correctanswer===answer}
                    userClicked={answerd?.answer===answer}
                    key={answer}>
                    <button disabled={answerd?true:false} value={answer} onClick={callbakc}></button>
                    <span dangerouslySetInnerHTML={{__html:answer}}></span>
                </ButtonWrapper>
            ))}
        </div>
    </div>
);

export default Card;