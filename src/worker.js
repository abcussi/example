import { runner } from "./util";

export default () => {
    // eslint-disable-next-line no-restricted-globals
    self.onmessage = (message) => {
        const nbr = message.data;
        const sum = new Array(nbr)
        .fill(0)
        .map((el, index) => el + index)
        .reduce((sum, el) => sum + el, 0);
        console.log(sum);
        postMessage('done');
    };
};