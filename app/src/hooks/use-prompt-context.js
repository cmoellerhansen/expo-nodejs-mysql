import { useContext } from 'react';

import { PromptContext } from '../contexts/Prompt';

export default function usePromptContext() {
    const context = useContext(PromptContext);
    if (!context) throw new Error('usePromptContext must be used within a PromptProvider');

    return context;
}