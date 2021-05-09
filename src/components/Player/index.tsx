import styles from './styles.module.scss';

//sem o export "default" o vscode fica mais responsivo com imports. Aqui nao é necessário colocar
// porém, atenção que para os .tsx definidos em pages, é necessário usar o "default"
export function Player() {

    return(
        <div className={styles.playerContainer}>
            
        </div>
    )
}