'use client'

import { Dispatch, SetStateAction, createContext, useState } from 'react';

export type Feedback = {
    text: string,
    status: 'error' | 'success'
}

type FeedbackContext = {
    feedback: Feedback | null
    setFeedback: Dispatch<SetStateAction<Feedback | null>>
}

export const FeedbackContext = createContext<FeedbackContext>({ feedback: null, setFeedback: () => null });


export default function FeedbackProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [feedback, setFeedback] = useState<Feedback | null>(null);

    return (
        <FeedbackContext.Provider value={{ feedback, setFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
} 
