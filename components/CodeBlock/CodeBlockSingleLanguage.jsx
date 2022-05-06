import CodeContent from "./CodeContent";
import CopyButton from "./CopyButton";
import styles from "./CodeBlockSingleLanguage.module.scss";

export default function CodeBlockSingleLanguage({ lang, content }) {
    return (
        <>
            <div className={styles.copyButtonHeader}><CopyButton content_to_copy={content} /></div>
            <CodeContent lang={lang} data={content} />
        </>
    )
}
