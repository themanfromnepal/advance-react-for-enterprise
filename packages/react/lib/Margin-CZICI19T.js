import React from 'react';

const Margin = ({ space, children }) => {
    const classNmae = `dse-margin-${space}`;
    return React.createElement("div", { className: classNmae }, children);
};

export { Margin as M };
//# sourceMappingURL=Margin-CZICI19T.js.map
