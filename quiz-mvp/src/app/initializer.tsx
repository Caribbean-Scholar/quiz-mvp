"use client";
import { useEffect } from "react";
import quizzes from "@/quizzes";
import { createNewQuizAttempt } from "./util";

export default function Initializer() {
  useEffect(() => {
    quizzes.keys().forEach((key) => {
      let attemptString = localStorage.getItem(key);
      if (!attemptString) {
        let quiz = quizzes.get(key) as Quiz;
        let newAttempt = createNewQuizAttempt(quiz);
        localStorage.setItem(key, JSON.stringify(newAttempt));
      }
    });
  }, []);
  return null;
}
