export type inputRange = [ number, number ];

class Rangr {
    private ranges: inputRange[] = [];
    constructor (ranges?: inputRange[]) {
        if (ranges) {
            if (!Array.isArray(ranges)) {
                throw new Error('Invalid ranges');
            }
            this.ranges = generateRange(ranges);
            return this;
        }
    }

    add (ranges: inputRange[]) {
        if (ranges) {
            this.ranges = generateRange(this.ranges.concat(ranges));
        }
    }

    toString (): string {
        let str = this.ranges.map(r => `[${r.toString()}]`);
        return str.toString();
    }

    toIterable (): IterableIterator<inputRange> {
        return this.ranges[Symbol.iterator]();
    }

    toArray (): inputRange[] {
        return this.ranges;
    }
}
export default Rangr;

function generateRange(ranges: inputRange[]): inputRange[] {
    const START = 0;
    const END = 1;
    const sortedIntervals = ranges.sort((a, b) => {
        if (a[START] < b[START]) return -1;
        else if (a[START] > b[START]) return 1;
        else return 0;
    });

    let currentInterval = sortedIntervals[0];
    const mergedIntervals: inputRange[] = [];
    for (let i = 1; i < sortedIntervals.length; i++) {
        if (currentInterval[END] >= sortedIntervals[i][START]) {
            if (currentInterval[END] < sortedIntervals[i][END])
                currentInterval[END] = sortedIntervals[i][END];
        }
        else {
            mergedIntervals.push(currentInterval);
            currentInterval = sortedIntervals[i];
        }
    }
    if (currentInterval) mergedIntervals.push(currentInterval);
    return mergedIntervals;

}
