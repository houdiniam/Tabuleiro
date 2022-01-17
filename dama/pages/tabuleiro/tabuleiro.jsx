import Quadrado from '../../components/Quadrado'
import styles from './tabuleiro.module.css'

export default function tabuleiro() {
    return (
        <div className={styles.tabuleiro}>
            <Quadrado tam={8} bool={false}/>
        </div>
    )
}