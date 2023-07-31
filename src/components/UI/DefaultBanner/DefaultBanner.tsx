import { FC } from "react";
import styles from "./DefaultBanner.module.scss";

interface DefaultBannerProps {
  logo: string;
}

const DefaultBanner: FC<DefaultBannerProps> = ({ logo }) => {
  return (
    <div className={styles.defaultBanner}>
      <div>
        <img src={logo} />
      </div>

      <p>Open a note or create a new one</p>
    </div>
  );
};

export default DefaultBanner;
