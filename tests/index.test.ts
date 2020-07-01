import { strict as assert } from 'assert';
import Rangr, { inputRange } from '../src/';

describe('rangr', () => {
    describe('constructor', () => {
        describe('called without any arguments', () => {
            it ('should initialize empty range', () => {
                const range: Rangr = new Rangr();
                assert.deepStrictEqual(range.toArray(), []);
            });
        });

        describe('called with an array of range', () => {
            const input:inputRange[] = [[1, 2], [3, 4]];
            it ('should initialize the range', () => {
                const range: Rangr = new Rangr(input);
                assert.deepStrictEqual(range.toArray(), input)
            });
        });

        describe('called with overlapping ranges', () => {
            const input: inputRange[] = [[1, 3], [2, 4]];
            it ('should merge the range', () => {
                const range: Rangr = new Rangr(input);
                assert.deepStrictEqual(range.toArray(), [[1, 4]])
            });
        });
    });

    describe('add', () => {
        let range: Rangr;
        beforeEach(() => {
            range = new Rangr([[1,4]]);
        });
        describe('called with subset of existing ranges', () => {
            it ('should not have any effect', () => {
                const before = range.toArray();
                range.add([[2, 3]]);
                const after = range.toArray();
                assert.deepStrictEqual(before, after);
            });
        });
        describe('called with new non-overlapping ranges', () => {
            it ('should not have any effect', () => {
                const before = range.toArray();
                range.add([[8, 9]]);
                const after = range.toArray();
                assert.notDeepStrictEqual(before, after);
                assert.deepStrictEqual(after, [[1, 4], [8, 9]])
            });
        });

        describe('called with overlapping ranges', () => {
            it ('should not merge the ranges', () => {
                const before = range.toArray();
                range.add([[8, 9], [3, 6]]);
                const after = range.toArray();
                assert.notDeepStrictEqual(before, after);
                assert.deepStrictEqual(after, [[1, 6], [8, 9]])
            });
        });
    });

    describe('toArray', () => {
        it('should return range in array form', () => {
            let range: Rangr = new Rangr([[1, 2]]);
            assert(Array.isArray(range.toArray()));
            assert.deepStrictEqual(range.toArray(), [[1, 2]]);
        });
    });

    describe('toIterable', () => {
        it('should return range in iterable form', () => {
            let range: Rangr = new Rangr([[1, 2]]);
            const iterator:IterableIterator<inputRange> = range.toIterable();
            let elem = iterator.next();
            assert.deepStrictEqual(elem.value, [1, 2]);
            assert.deepStrictEqual(elem.done, false);
            elem = iterator.next();
            assert.deepStrictEqual(elem.value, undefined);
            assert.deepStrictEqual(elem.done, true);

        });
    });

    describe('toString', () => {
        it('should return valid representation', () => {
            let range: Rangr = new Rangr([[1, 2], [5, 6]]);
            assert.deepStrictEqual(range.toString(), '[1,2],[5,6]')
        });
    });
});