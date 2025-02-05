import styles from './style.module.css'
import { useTLHeadScript } from "../../api/useTLHeadScript";

type SearchFormProps = {
    variant?: 'inner' | null;
}

export const SearchForm = ({ variant }: SearchFormProps) => {
    useTLHeadScript();

    const blockSearchClass = variant === "inner"
        ? styles.blockSearchInner
        : styles.blockSearch;

    return(
        <div id="block-search" className={blockSearchClass}>
            <div id="tl-search-form" className={styles.tlContainer}>
                <noindex>
                    <a
                        href="https://www.travelline.ru/products/tl-hotel/"
                        rel="nofollow"
                        target="_blank"
                    >
                        TravelLine
                    </a>
                </noindex>
            </div>
        </div>
    )
}
