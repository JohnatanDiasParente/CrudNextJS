import Head from "next/head";
import type { NextPage } from "next";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <form>
          <input type="text" placeholder="Nome"></input>
          <input type="email" placeholder="Email"></input>
          <input type="tel" placeholder="Telefone"></input>
          <textarea placeholder="Observações"></textarea>
          <button type="submit">Salvar</button>
        </form>
        <div className={styles.box}>
          <input type="text" placeholder="Buscar" />
          <div className={styles.contacts}>
            <div className={styles.boxtitle}>
              <p className={styles.nome}>NomeDaPessoa</p>
              <div>
                <a href="">Edit</a>
                <a href="">Delete</a>
              </div>
            </div>
            <div className={styles.info}>
              <p>EmailDaPessoa</p>
              <p>TelefoneDaPessoa</p>
              <p>Descrição</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
