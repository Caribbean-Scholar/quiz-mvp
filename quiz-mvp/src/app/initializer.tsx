"use client";
import { useEffect } from "react";
import quizzes from "@/quizzes";

export default function Initializer() {
  useEffect(() => {
    quizzes.keys().forEach((key) => {
      let attemptString = localStorage.getItem(key);
      if (!attemptString) {
        let newAttempt: (string | null)[] = new Array(
          quizzes.get(key)!.questions.length
        ).fill(null);
        localStorage.setItem(key, JSON.stringify(newAttempt));
      }
    });
  }, []);
  return null;
}
