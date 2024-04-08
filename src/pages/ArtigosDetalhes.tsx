import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../components/ui/card';
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface ArticleProps {
  id: number;
  titulo: string;
  conteudo: string;
}



const ArtigosDetalhes = () => {
  const [artigo, setArtigo] = useState<ArticleProps>();

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id); 
  
  useEffect(() => {
    const fetchArtigos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/Artigos/${id}`);
        setArtigo(response.data);

      } catch (error) {
        console.log("Erro ao buscar detalhes do artigo ou perguntas:", error);
      }
    };
    fetchArtigos();
  }, [id]);

  
  

  return (
    <main className="flex justify-center flex-col items-center sm:p-6 mt-5">
      <div className="flex md:min-w-96 mr-64">
        <Button variant="outline" size="icon" onClick={() => navigate('/')}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-14">
        <Card key={artigo?.id} className="h-max h-max-auto max-w-xs md:max-w-screen-sm cursor-pointer">
          <CardHeader>
            <CardTitle>{artigo?.titulo}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{artigo?.conteudo}</p>
            <div>
              


            </div>
            <CardFooter>

    
         
              <div >
                <p className="text-white"></p>
                <p> </p>
         
              </div>
        
            
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ArtigosDetalhes;
