import styles from '../Cardapio/Cardapio.module.scss';
import logo from 'assets/logo.svg';
import Buscador from './Buscador';
import Filtros from './Filtros';
import { useState } from 'react';

export function Cardapio(){
  const [busca,  setBusca] = useState("");
  return(
      <main>
          <nav className={styles.menu}>
              <img src={logo} alt="Logo" />
          </nav>
          <header className={styles.header}>
              <div className={styles.header__text}>
                  "A casa do codigo e da massa"
              </div>
          </header>
          <section className={styles.cardapio}>
              <h3 className={styles.cardapio__titulo} >Cardapio</h3>
              <Buscador busca={busca} setBusca={setBusca} />
              <div className={styles.cardapio__filtros}>
                <Filtros/>
              </div>
          </section>
      </main>
  );
}
