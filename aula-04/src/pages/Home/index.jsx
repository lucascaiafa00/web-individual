import { useParams } from "react-router-dom";

export default function Home() {
  const {nome} = useParams()
  return (
    <>
      <h1>Home</h1>
      <h2>{nome == undefined ? "sei la" : `Olá ${nome}`}</h2>
    </>
  );
}
