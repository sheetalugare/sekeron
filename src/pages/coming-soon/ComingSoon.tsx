import React, { useEffect, useState } from "react";
import styles from "./ComingSoon.module.css";
import ImageAssets from "../../assets";

const ComingSoon = () => {
  const [showAnimatedGif, setShowAnimatedGif] = useState(true);

  const switchImages = () => {
    setShowAnimatedGif(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(switchImages, 3000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles["container"]}>
      {showAnimatedGif ? (
        <img
          src={ImageAssets.gif_sekeron_logo}
          alt="Static-pic"
          className={styles["gif-image"]}
        />
      ) : (
        <div className={styles["static-container"]}>
          <img
            src={ImageAssets.ic_original_sekeron_logo}
            alt="Static-pic"
            className={styles["sekeron-logo"]}
          />
          <p>Coming soon</p>
        </div>
      )}
    </div>
  );
};

export default ComingSoon;
