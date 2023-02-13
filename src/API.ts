//we handel the logig to fetch the data from the API

import {mix} from "./mix";

export enum Diff{
    easy="easy",
    medium="medium",
    hard="hard",
}
export type Qeustion={
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string

}
export type QuestionsState = Qeustion & { answers: string[] };

export const fetchquestions= async (amount:number,difficulty:Diff):Promise<QuestionsState[]>=>{

    const endpoint='https://opentdb.com/api.php?amount='+amount+'&difficulty='+difficulty+'&type=multiple';
    const source =await(await fetch(endpoint)).json();
    return source.results.map((question:Qeustion)=> (
        {
            //spread the array or object and get all of its properties
            ...question,
            answers: mix([...question.incorrect_answers, question.correct_answer]),

        }));
    //console.log(source);


}