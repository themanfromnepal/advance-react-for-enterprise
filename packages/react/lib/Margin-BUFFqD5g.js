import React from 'react';

const Margin = ({ space = "xxxs", children }) => {
    const classNmae = `dse-margin-${space}`;
    return React.createElement("div", { className: classNmae }, children);
};

export { Margin as M };
//# sourceMappingURL=Margin-BUFFqD5g.js.map
