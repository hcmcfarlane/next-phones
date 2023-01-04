import Link from "next/link";
import styles from "../styles/Home.module.css";
type CardProps = { id: number; model: string; price: number };

//TODO: Add an image

export default function Card({ id, model, price }: CardProps) {
  return (
    <Link href={`/posts/${id}`}>
      <div className={styles.card}>
        <img
          className={styles.phoneImg}
          src="https://m.media-amazon.com/images/I/614Gij3tGwL._AC_SX679_.jpg"
        />
        <h2>{model}</h2>
        <p>£{price}</p>
      </div>
    </Link>
  );
}
