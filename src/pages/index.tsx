import Head from "next/head";
import type { NextPage } from "next";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

import { database } from "../../services/firebase";
import { FormEvent, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descricao, setDescricao] = useState("");

  //console.log(nome, email, telefone, descricao);

  function gravar(event: FormEvent) {
    event.preventDefault(); //Previne que a página seja recarregada

    const ref = database.ref("contatos"); //Criando uma referência constante no banco de dados

    const dados = {
      nome,
      email,
      telefone,
      descricao,
    };

    ref.push(dados); //Insere no banco de dados as informações do formulário
  }

  return (
    <>
      <main className={styles.container}>
        <form onSubmit={gravar}>
          <input
            type="text"
            placeholder="Nome"
            onChange={(event) => setNome(event.target.value)}
          ></input>
          {/*onChange usando o event com o useState para capturar os dados */}
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <input
            type="tel"
            placeholder="Telefone"
            onChange={(event) => setTelefone(event.target.value)}
          ></input>
          <textarea
            placeholder="Observações"
            onChange={(event) => setDescricao(event.target.value)}
          ></textarea>
          <button type="submit">Salvar</button>
          {/* <input type="submit" value='salvar' /> funciona utilizando tanto button quanto submit*/}
        </form>
        <div className={styles.box}>
          <input type="text" placeholder="Buscar" />
          <div className={styles.contacts}>
            <div className={styles.boxtitle}>
              <p className={styles.nome}>Nome Da Pessoa</p>
              <div>
                <a href="">Edit</a>
                <a href="">Delete</a>
              </div>
            </div>
            <div className={styles.info}>
              <p>Email Da Pessoa</p>
              <p>Telefone Da Pessoa</p>
              <p>Descrição</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
