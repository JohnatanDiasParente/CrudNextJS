import Head from 'next/head'
import type {NextPage} from 'next'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <form>
          <input type='text' placeholder='Nome'></input>
          <input type='email' placeholder='Email'></input>
          <input type='tel' placeholder='Telefone'></input>
          <textarea  placeholder='Observações'></textarea>
          <button type="submit">salvar</button>
        </form>
        <div >
            <input type="text" placeholder='Buscar' />
        </div>
      </main>
    </>
  )
}
