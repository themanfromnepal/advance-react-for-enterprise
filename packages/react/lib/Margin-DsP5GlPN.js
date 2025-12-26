import React from 'react';

const Margin = ({ space = "md", children }) => {
    const classNmae = `dse-margin-${space}`;
    return React.createElement("div", { className: classNmae }, children);
};

export { Margin as M };
//# sourceMappingURL=Margin-DsP5GlPN.js.map
