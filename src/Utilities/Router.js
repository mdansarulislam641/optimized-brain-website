import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorElements from "../components/ErrorElements";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import QuizChart from "../components/QuizChart";
import QuizItem from "../components/QuizItem";
import Main from "./Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        loader:async ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        errorElement:<ErrorElements></ErrorElements>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'home',
                element:<Home></Home>
            },
            {
                path:'/quiz',
                element:<QuizItem></QuizItem>
            },
            {
                path:'/quiz/:quizId',
                loader: async ({params}) =>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element:<Quiz></Quiz>
            },
            {
                path:'quizChart',
                loader:async () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<QuizChart></QuizChart>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            }
        ]
    },
])