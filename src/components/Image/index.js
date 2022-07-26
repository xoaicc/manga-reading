import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { forwardRef, useState } from "react";

import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

const Image = forwardRef(({src, alt, className, fallback: fb, ...props}, ref) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {setFallback(fb)};

    return (
        <img
            className={cx("wrapper", className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string
};

export default Image;