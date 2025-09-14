import { Card } from '../../components/Card/card';
import { Header } from '../../components/Header/header';
import styles from './home.module.css';
export function Home() {
  return (
    <>
      <Header />
      <main className={styles.CardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
}
