// libraries
import PropTypes from "prop-types";
import { memo } from "react";

function MeshBackground({ numberMeshes, countColumns, size, className }) {
    const lists = Array.from({ length: numberMeshes }, (_, index) => index + 1);
    const listsNoBorderLeft = [];
    for (let i = countColumns; i <= numberMeshes; i += countColumns) {
        listsNoBorderLeft.push(i);
    }
    return (
        <div
            className={`grid absolute  ${className}`}
            style={{
                gridTemplateColumns: `repeat(${countColumns}, minmax(0, 1fr))`,
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            {lists.map((list) => {
                return (
                    <div
                        key={list}
                        className={`border-gray-700 ${
                            !listsNoBorderLeft.includes(list) && "border-l"
                        } ${list <= numberMeshes - countColumns && "border-b"}`}
                    ></div>
                );
            })}
        </div>
    );
}

MeshBackground.propTypes = {
    numberMeshes: PropTypes.number,
    countColumns: PropTypes.number,
    size: PropTypes.number,
    className: PropTypes.string,
};

export default memo(MeshBackground);
