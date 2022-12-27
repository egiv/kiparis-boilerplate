import React, { FC } from "react";

import Hello from "assets/icons/svg.svg?sprite";
import photo from "assets/images/telegram.jpg";

import styles from "./index.module.scss";

const Main: FC = () => {
    return (
        <div className={styles.container}>
            <Hello className={styles.svg} />
            <p className={styles.greeting}>
                Кепарисс-бойлерплейт для реакта от Егора.
            </p>
            <p className={styles.greeting}>
                Перед использованеим, ознакомьтесь с README-md файлом.
            </p>
            <img alt="t.me/egoriv" src={photo} />
            <span>Поддержите подпиской на мой (<a href="https://t.me/egoriv">telegram</a>-канал.)</span>
        </div>
    );
};

export default Main;
