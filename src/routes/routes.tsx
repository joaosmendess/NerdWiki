import Artigos from "@/components/Artigo";
import ArtigosDetalhes from "@/pages/ArtigosDetalhes";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/Error";

export const router = createBrowserRouter([
{
    path: '/',
    element: <Artigos/>,
    errorElement: <ErrorPage/>,
},
{
    path: 'artigos/:id',
    element: <ArtigosDetalhes/>,
    errorElement: <ErrorPage/>

}

])