import React from "react";
import QuestionList from "../components/questionList";
import {useSearchParams } from "react-router-dom";
import AskNav from "../components/askNav";
import '../assets/layout.css'

export default function Home() {

    let [searchParams] = useSearchParams();
    let queryTitle = searchParams.get("title");

    return (
        <div className="home--section section">
            <AskNav />
            <QuestionList queryTitle={queryTitle} />
        </div>
    );
}