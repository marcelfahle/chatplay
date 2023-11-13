type Milliseconds = number;

// Randomly returns either a short or long timeout. Used to emulate network latency.
export function randomTimeout(shortTimeoutProbability: number): Milliseconds {
    const longTimeout: Milliseconds = 3000;
    const shortTimeout: Milliseconds = 500;

    if (Math.random() > shortTimeoutProbability) {
        return longTimeout;
    } else {
        return shortTimeout;
    }
}

export function promiseWithRandomTimeout<T>(callback: () => T, shortTimeoutProbability = 1): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(callback()), randomTimeout(shortTimeoutProbability));
    });
}