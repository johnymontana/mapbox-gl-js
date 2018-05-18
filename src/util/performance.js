// @flow

// Wraps performance.getEntriesByName to facilitate testing
// Not incorporated into browser.js because the latter is poisonous when used outside the main thread
const performanceExists = typeof performance !== 'undefined';
const exported = {
    getEntriesByName: (url: string) => {
        if (performanceExists && performance && performance.getEntriesByName)
            return performance.getEntriesByName(url);
        else
            return false;
    },
    mark: (name: string) => {
        if (performanceExists && performance && performance.mark)
            return performance.mark(name);
        else
            return false;
    },
    measure: (name: string, startMark: string, endMark: string) => {
        if (performanceExists && performance && performance.measure)
            return performance.measure(name, startMark, endMark);
        else
            return false;
    },
    clearMarks: (name: string) => {
        if (performanceExists && performance && performance.clearMarks)
            return performance.clearMarks(name);
        else
            return false;
    },
    clearMeasures: (name: string) => {
        if (performanceExists && performance && performance.clearMeasures)
            return performance.clearMeasures(name);
        else
            return false;
    }
};

export default exported;
