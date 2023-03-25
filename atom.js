import {
    atom,
} from 'recoil';

export const DurationTime = atom({
    key: 'DurationTime', // unique ID (with respect to other atoms/selectors)
    default: 0,
});

export const DurationCleanUp = atom({
    key: 'DurationCleanup',
    default: { cleanUpFn: '', }
})