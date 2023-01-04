import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ph from "../libs/data.json";
import Card from "../components/card";

export default function Home() {
  // TODO: Need to do this as getStaticProps!!!!
  const phones = ph.phones;
  console.log(phones);
  return (
    <>
      <Head>
        <title>Next Phones!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.h1}>Next Phones</h1>
        <div className={styles.description}>
          <p>Lots of good phones at good and totally not-made-up prices :)</p>
        </div>

        <div className={styles.grid}>
          {phones.map((p) => (
            <Card id={p.id} model={p.model} price={p.price} key={p.id} />
          ))}
        </div>
      </main>
    </>
  );
}
