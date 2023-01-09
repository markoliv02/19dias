import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>DESAFIO DOS 19 DIAS</title>
        <meta
          name="description"
          content="Página de vendas do ebook desafio 19 dias de emagrecimento"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Marcos Oliveira " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <div className="flex justify-center flex-wrap p-5">
          <h1 className="md:text-5xl text-3xl text-center font-bold text-[#FF0000] w-full">
            QUER SER A PROXIMA A SECAR DE 5 A 10KG COM O DESAFIO DOS 19 DIAS?
          </h1>

          <video
            className="my-5 md:w-[800px]"
            controls
            preload="metadata"
            src={"/video01.mp4"}
          />

          <h1 className="md:text-5xl text-3xl text-center font-bold text-black w-full">
            E o melhor de tudo você terá acesso ao{" "}
            <span className="text-[#03A00A]">Grupo VIP</span> para você ficar
            cada vez mais motivada
          </h1>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://go.hotmart.com/K78235305X?ap=75b4"
            className="bg-[#03A00A] p-3 flex justify-center items-center text-white text-3xl font-bold rounded-md w-80 my-5"
          >
            EU QUERO
          </a>

          <div className="flex  justify-center w-full text-center my-2">
            <div className="">✅</div>
            Cronograma Alimentar preparado por Coach de emagrecimento
          </div>
          <div className="flex justify-center w-full text-center my-2">
            <div className="">✅</div>
            Exercícios focados na queima de gorduras
          </div>

          <div className="flex justify-center w-full text-center my-2">
            <div className="">✅</div>O famoso Super Chá Seca Barriga
          </div>
        </div>
        <div className=" flex justify-center flex-wrap bg-black text-white">
          <h1 className="md:text-5xl text-3xl text-center font-bold text-yellow-400 w-full">
            VEJA ALGUNS DEPOIMENTOS
          </h1>

          <div className="grid grid-cols-2 gap-2 p-3 w-full">
            <img src="/depoimento01.jpeg" alt="" />
            <img src="/depoimento02.jpeg" alt="" />
          </div>
          <div className="p-3">
            <video
              className="my-5 md:w-[800px]"
              controls
              preload="metadata"
              src={"/video02.mp4"}
            />
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          <h1 className="md:text-5xl text-3xl text-center font-bold text-black w-full my-5">
            NÃO PERCA TEMPO E ADQUIRA AGORA PELO
            <span className="text-[#03A00A]">VALOR PROMOCIONAL DE R$47,00</span>
          </h1>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://go.hotmart.com/K78235305X?ap=7c92"
            className="bg-[#FFE600] p-3 flex justify-center items-center text-black text-3xl font-bold rounded-md w-80 my-5 text-center"
          >
            COMPRAR COM DESCONTO
          </a>
        </div>
      </main>
    </>
  );
}
