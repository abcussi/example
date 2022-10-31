const bigTask = (index) => {
    const sum = new Array(index)
    .fill(0)
    .map((el, index) => el + index)
    .reduce((sum, el) => sum + el, 0);

    console.log(sum);
}
export function runner(index) {
    bigTask(index);
    return 'done'
}

export async function runnerAsync(index) {
    bigTask(index);
    return 'done'
}