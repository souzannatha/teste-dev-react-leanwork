import styles from './header.module.css';
import logo from '../../../public/lwg.svg';
import { ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt='Logo da Leanwork Group' width={90} height={90} />
      <ShoppingBag />
    </header>
  );
}
