import { CardsList } from "@/components/CardsList/CardsList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <CardsList />
    </main>
  );
}
