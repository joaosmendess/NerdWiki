import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useOutlet, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/card'
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";



interface ArticleProps {
  id: number;
  titulo: string;
  conteudo: string;
}
const ArtigosDetalhes = () => {
  const [artigo, setArtigo] = useState<ArticleProps >();
  const navigate = useNavigate();
  const outlet = useOutlet();
  const { id } = useParams();
  
  console.log('renderizou');


  
  // function to fetch data ("artigos") using axios
  const fetchArtigos = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/Artigos/${id}`);
      setArtigo(response.data);
    } catch (error) {
      console.log("Error fetching Articles:", error);
    }
  };
  

  useEffect(() => {
    fetchArtigos();
  }, []);

  const handleBackClick = () => {
    
    navigate(`/`);

    
    if (outlet) {
return <div>{outlet} </div>
    }
  };

  return (
    <main className="flex justify-center  flex-col  items-center sm:p-6 mt-5">
    
<div className=" flex  min-w-80  md:min-w-96 mr-64 ">

    <Button variant="outline" size="icon" onClick={() => handleBackClick()}>
      <ChevronLeft className="h-4 w-4" />
    </Button>
</div>

    
    <div className="  mt-14 ">
     
        <Card key={artigo?.id} className="  h-max h-max-auto max-w-xs  md:max-w-screen-sm cursor-pointer " >
          <CardHeader>
            <CardTitle>{ artigo?.titulo}</CardTitle>

            <CardDescription> </CardDescription>
          </CardHeader>

          <CardContent>
            <p>{artigo?.conteudo}</p>
          </CardContent>
          <CardFooter className="">
            <p>Texto retirado da internet</p>
          </CardFooter>
        </Card>
     
    </div>
    
    </main>
    
  );
};

export default ArtigosDetalhes;
