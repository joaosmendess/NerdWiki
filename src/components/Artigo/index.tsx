import axios from "axios";
import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";


interface ArticleProps {
  id: number;
  titulo: string;
  conteudo: string;
}
const Artigos = () => {
  const [artigos, setArtigos] = useState<ArticleProps[]>([]);
  const [search, setSearch] = useState ('');
  console.log('renderizou');

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
  };
  
  // function to fetch data ("artigos") using axios
  const fetchArtigos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Artigos");
      setArtigos(response.data);
    } catch (error) {
      console.log("Error fetching Articles:", error);
    }
  };
  

  const filteredArticles = search.length > 0 
  ? artigos.filter(artigo=> artigo.titulo.includes(search))
  : [];

  useEffect(() => {
    fetchArtigos();
  }, []);

  return (
    <main className="flex justify-center  flex-col  items-center sm:p-6 mt-5">
      <h1 className='mb-5'>Hello NerdWiki!</h1>
     <Input className="md:w-96 w-60 sm: h-11" placeholder="Digite aqui o artigo que você procura"
     onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
     value={search}

     
     />
{search.length > 0 ? (
  <div className="flex justify-center flex-col items-center"> 
    {filteredArticles.map(artigo => {
      return (
<div key={artigo.id} className="">
<Card key={artigo.id} className="md:w-96 h-96  mt-14 cursor-pointer sm: max-h-96 w-80 ">
          <CardHeader>
            <CardTitle>{artigo.titulo}</CardTitle>
 
          
          </CardHeader>

          <CardContent>
            <p>{truncateText(artigo.conteudo, 290)}</p>
          </CardContent>
          <CardFooter className="mb-8">
            <p>Texto retirado da internet</p>
          </CardFooter>
        </Card>

</div>
      )
    })}
  </div>
) : (


    
    <div className=" justify-end items-end mt-14 grid md:grid-cols-2 gap-10 grid-cols-1">
      {artigos.map((artigo) => (
        <Card key={artigo.id} className=" md:w-96 h-96 h-max-auto max-w-xs cursor-pointer">
          <CardHeader>
            <CardTitle>{ artigo.titulo}</CardTitle>

            <CardDescription> </CardDescription>
          </CardHeader>

          <CardContent>
            <p>{truncateText(artigo.conteudo, 260)}</p>
          </CardContent>
          <CardFooter className="">
            <p>Texto retirado da internet</p>
          </CardFooter>
        </Card>
      ))}
    </div>
    )}
    </main>
    
  );
};

export default Artigos;
