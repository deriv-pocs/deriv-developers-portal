import styles from './ApiGuideTable.module.scss';

export default function ApiGuideTable() {
    return (
        <table className={styles.apiGuideTable} cellSpacing={0} cellPadding={0}>
            <tbody><tr>
                <th className={styles.apiGuideTableHeader}>API contract name</th>
                <th className={styles.apiGuideTableHeader}>Category on website</th>
                <th className={styles.apiGuideTableHeader}>Name on website</th>
            </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>MULTUP</td>
                    <td className={styles.apiGuideTableCell}>Multiply Up/Multiply Down</td>
                    <td className={styles.apiGuideTableCell}>Multiply Up</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>MULTDOWN</td>
                    <td className={styles.apiGuideTableCell}>Multiply Up/Multiply Down</td>
                    <td className={styles.apiGuideTableCell}>Multiply Down</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>UPORDOWN</td>
                    <td className={styles.apiGuideTableCell}>Stays Between/Goes Outside</td>
                    <td className={styles.apiGuideTableCell}>Goes Outside</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>EXPIRYRANGE</td>
                    <td className={styles.apiGuideTableCell}>Ends Between/Ends Outside</td>
                    <td className={styles.apiGuideTableCell}>Ends Between</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>ONETOUCH</td>
                    <td className={styles.apiGuideTableCell}>Touch/No Touch</td>
                    <td className={styles.apiGuideTableCell}>Touches</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>CALLE</td>
                    <td className={styles.apiGuideTableCell}>Rise/Fall Equal</td>
                    <td className={styles.apiGuideTableCell}>Higher</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>LBHIGHLOW</td>
                    <td className={styles.apiGuideTableCell}>Lookbacks</td>
                    <td className={styles.apiGuideTableCell}>High-Low</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>ASIAND</td>
                    <td className={styles.apiGuideTableCell}>Asians</td>
                    <td className={styles.apiGuideTableCell}>Asian Down</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>EXPIRYRANGEE</td>
                    <td className={styles.apiGuideTableCell} />
                    <td className={styles.apiGuideTableCell} />
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>DIGITDIFF</td>
                    <td className={styles.apiGuideTableCell}>Digits</td>
                    <td className={styles.apiGuideTableCell}>Digit Differs</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>DIGITMATCH</td>
                    <td className={styles.apiGuideTableCell}>Digits</td>
                    <td className={styles.apiGuideTableCell}>Digit Matches</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>DIGITOVER</td>
                    <td className={styles.apiGuideTableCell}>Digits</td>
                    <td className={styles.apiGuideTableCell}>Digit Over</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>PUTE</td>
                    <td className={styles.apiGuideTableCell}>Rise/Fall Equal</td>
                    <td className={styles.apiGuideTableCell}>Lower</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>DIGITUNDER</td>
                    <td className={styles.apiGuideTableCell}>Digits</td>
                    <td className={styles.apiGuideTableCell}>Digit Under</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>NOTOUCH</td>
                    <td className={styles.apiGuideTableCell}>Touch/No Touch</td>
                    <td className={styles.apiGuideTableCell}>Does Not touch</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>CALL</td>
                    <td className={styles.apiGuideTableCell}>Up/Down</td>
                    <td className={styles.apiGuideTableCell}>Higher</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>RANGE</td>
                    <td className={styles.apiGuideTableCell}>Stays Between/Goes Outside</td>
                    <td className={styles.apiGuideTableCell}>Stays Between</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>LBFLOATPUT</td>
                    <td className={styles.apiGuideTableCell}>Lookbacks</td>
                    <td className={styles.apiGuideTableCell}>High-Close</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>DIGITODD</td>
                    <td className={styles.apiGuideTableCell}>Digits</td>
                    <td className={styles.apiGuideTableCell}>Digit Odd</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>PUT</td>
                    <td className={styles.apiGuideTableCell}>Up/Down</td>
                    <td className={styles.apiGuideTableCell}>Lower</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>ASIANU</td>
                    <td className={styles.apiGuideTableCell}>Asians</td>
                    <td className={styles.apiGuideTableCell}>Asian Up</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>LBFLOATCALL</td>
                    <td className={styles.apiGuideTableCell}>Lookbacks</td>
                    <td className={styles.apiGuideTableCell}>Close-Low</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>EXPIRYMISSE</td>
                    <td className={styles.apiGuideTableCell} />
                    <td className={styles.apiGuideTableCell} />
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>EXPIRYMISS</td>
                    <td className={styles.apiGuideTableCell}>Ends Between/Ends Outside</td>
                    <td className={styles.apiGuideTableCell}>Ends Outside</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>DIGITEVEN</td>
                    <td className={styles.apiGuideTableCell}>Digits</td>
                    <td className={styles.apiGuideTableCell}>Digit Even</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>TICKHIGH</td>
                    <td className={styles.apiGuideTableCell}>highlowticks</td>
                    <td className={styles.apiGuideTableCell}>High Tick</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>TICKLOW</td>
                    <td className={styles.apiGuideTableCell}>highlowticks</td>
                    <td className={styles.apiGuideTableCell}>Low Tick</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>RESETCALL</td>
                    <td className={styles.apiGuideTableCell}>Reset Call/Reset Put</td>
                    <td className={styles.apiGuideTableCell}>Reset Call</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>RESETPUT</td>
                    <td className={styles.apiGuideTableCell}>Reset Call/Reset Put</td>
                    <td className={styles.apiGuideTableCell}>Reset Put</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>CALLSPREAD</td>
                    <td className={styles.apiGuideTableCell}>Call Spread/Put Spread</td>
                    <td className={styles.apiGuideTableCell}>Call Spread</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>PUTSPREAD</td>
                    <td className={styles.apiGuideTableCell}>Call Spread/Put Spread</td>
                    <td className={styles.apiGuideTableCell}>Put Spread</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>RUNHIGH</td>
                    <td className={styles.apiGuideTableCell}>Only Ups/Only Downs</td>
                    <td className={styles.apiGuideTableCell}>Only Ups</td>
                </tr>
                <tr>
                    <td className={styles.apiGuideTableCell}>RUNLOW</td>
                    <td className={styles.apiGuideTableCell}>Only Ups/Only Downs</td>
                    <td className={styles.apiGuideTableCell}>Only Downs</td>
                </tr>
            </tbody>
        </table>
    )
}
