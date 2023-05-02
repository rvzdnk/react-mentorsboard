import React from "react";
import PropTypes from "prop-types";
import { MutatingDots } from "react-loader-spinner";

const PageLoader = ({
    color = "#FFF",
    secondaryColor= "#f8ff75",
    horizontalAlignment = "center",
    verticalAlignment = "center",
    children,
}) => {
    return (
        <>
            <MutatingDots 
                max-height="100"
                width="100"
                color={color}
                secondaryColor= {secondaryColor}
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{
                    display: "flex",
                    justifyContent: horizontalAlignment,
                    alignItems: verticalAlignment,
                    height: "200px",
                }}
                visible={true}
            >
                {children}
            </MutatingDots>
        </>
    );
};

PageLoader.propTypes = {
    horizontalAlignment: PropTypes.oneOf([
      "start",
      "end",
      "left",
      "right",
      "center",
    ]),
    verticalAlignment: PropTypes.oneOf([
        "start",
        "end",
        "center",
        "stretch"
    ]),
};

export default PageLoader;