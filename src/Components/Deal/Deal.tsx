import React from "react";
import styles from "./Deal.module.scss";

const Deal: React.FC<{header: String}> = ({header}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{header}</h1>
            <div className={styles.banner}></div> 
        </div>
    )
}

export default Deal;