import Head from "next/head.js";
import styles from "../../styles/Home.module.css";
import { getPhoneData, getAllPhoneIds } from "../../libs/phones";
import CommonHeader from "../../components/header";

//TODO: LAYOUT:
//Don't particularly want all of 'main' to flex ...

type PhoneData = { phoneData: { id: number; model: string; price: number } };
type ParamData = { params: { id: number } };

export async function getStaticProps({ params }: ParamData) {
  const phoneData = getPhoneData(Number(params.id));
  return {
    props: { phoneData },
  };
}

export async function getStaticPaths() {
  const paths = getAllPhoneIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Phone(phoneData: PhoneData) {
  const phone = phoneData.phoneData;

  //TODO: Insert page header from index (create a component for it)
  return (
    <>
      <Head>
        <title>Buy a {phone.model} phone from Next Phones</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CommonHeader />
        <img
          className={styles.phoneDisplay}
          src="https://m.media-amazon.com/images/I/614Gij3tGwL._AC_SX679_.jpg"
        />
        <h2>{phone.model}</h2>
        <p>Price: £{phone.price}</p>
      </main>
    </>
  );
}
