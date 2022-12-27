import React from "react";

import styles from "./index.module.scss";

type IProps = {
    text: string;
};

const TestComponent: React.FC<IProps> = (props) => {
    return <div className={styles.someStyle}>{props.text}</div>;
};

export default TestComponent;
