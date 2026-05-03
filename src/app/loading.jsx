import { Spinner } from '@heroui/react';
import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted">Extra Large</span>
      </div>
        </div>
    );
};

export default Loading;