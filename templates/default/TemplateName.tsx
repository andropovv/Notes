// @ts-nocheck
import React, { FC } from "react";
import styles from "./TemplateName.module.scss";

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = () => {
  return <div className={styles.templateName}> TemplateName Component</div>;
};

export default TemplateName;
