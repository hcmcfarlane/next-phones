import styles from "../styles/Home.module.css";

export default function CommonHeader() {
  return (
    <>
      <h1 className={styles.h1}>Next Phones</h1>
      <div className={styles.description}>
        <p>Lots of good phones at good and totally not-made-up prices :)</p>
      </div>
      <div className={styles.headerBorder}></div>
    </>
  );
}
