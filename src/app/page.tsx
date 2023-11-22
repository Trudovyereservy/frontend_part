import { Faq } from "@/components/Faq/Faq";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Faq />
    </main>
  );
}
