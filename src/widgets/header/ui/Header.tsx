import { LinkTo, links } from "@shared/link"
import styles from "./style.module.css"

export const Header=()=>{
    return(
        <header className={styles.header}>
            <div>
                svetlana guest house
            </div>
            <nav>
                {
                    links.map(el=>{
                        return <LinkTo name={el.name} path={el.path} key={el.path} />
                    })
                }
            </nav>
            <a href="tel:+79183160032">+7 (918) 316-00-32</a>
        </header>
    )
}