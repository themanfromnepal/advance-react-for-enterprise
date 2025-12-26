import React from 'react';
import { FontSize } from '@akashalfaris/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = `dse-text dse-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as T };
//# sourceMappingURL=Text-DIUDjvih.js.map
