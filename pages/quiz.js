import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';

function LoadingScreen() {
    return(
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>
            <Widget.Content>
                [Desafio do Loading]
            </Widget.Content>
        </Widget>
    );
}

function QuestionWidget({
    question, 
    totalQuestions,
    questionIndex, 
}) {
    return (
        <Widget>
            <Widget.Header>
                {/* <BackLinkArrow href="/" /> */}
                <h3>
                    {`Pergunta ${questionIndex} de ${totalQuestions}`}
                </h3>
            </Widget.Header>

            <img
                alt="Descrição"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',                           
                }}
                src={question.image}
            />
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>
                
                <form>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        return (
                            <Widget.Topic
                                as="label"
                                htmlFor={alternativeId}
                            >
                                <input
                                    id={alternativeId}
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}


                    <Button>Confirmar</Button>
                </form>
            </Widget.Content>
        </Widget>
    );
}

export default function QuizPage() {
    const totalQuestions = db.questions.length;
    const questionIndex = 0;
    const question = db.questions[questionIndex];

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo/>

                <QuestionWidget 
                    question={question}
                    questionIndex={questionIndex}
                    totalQuestions={totalQuestions}
                />
            </QuizContainer>
        </QuizBackground>
    );
}

