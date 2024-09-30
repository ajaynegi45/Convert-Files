import styles from "./page.module.css";

export default function Home() {
  return (
    <>
        <header>
            <div id={styles.bgGrid}>
                <div id={styles.blurGrid}></div>
            </div>
        </header>
        <div className={styles.page}>
            <h1 id={styles.heading}>Convert Files - Secure & Fast</h1>
            <p className={styles.info}>Fast and secure file converter that transforms any file type into compatible formats directly on your device. Powered by WebAssembly, your files stay safe as nothing is uploaded to a server. Enjoy hassle-free, offline file conversions tool that keeps your data private.</p>
        </div>
    </>
  );
}
