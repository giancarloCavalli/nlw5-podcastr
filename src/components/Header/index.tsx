import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';

//sem o export "default" o vscode fica mais responsivo com imports. Aqui nao é necessário colocar
// porém, atenção que para os .tsx definidos em pages, é necessário usar o "default"
export function Header() {

    const currentDate = format(new Date(), "EEEEEE, d MMMM", {
        locale: ptBR
    });

    return(
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>
        </header>
    )
}