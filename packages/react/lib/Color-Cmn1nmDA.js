import React from 'react';
import { Spacing } from '@akashalfaris/foundation';

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm, }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return React.createElement("div", { className: className, style: { backgroundColor: hexCode } });
};

export { Color as C };
//# sourceMappingURL=Color-Cmn1nmDA.js.map
