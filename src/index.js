module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;
    let arr = str.split("");
    let newarr = bracketsConfig.flat();

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < newarr.length; j++) {
            if (arr[i] === newarr[j] && arr[i + 1] === newarr[j + 1]) {
                // console.log('было' + arr);

                arr.splice(i, 2);
                i = i - 2;
                // console.log('стало' + arr);
            }
        }
    }
    return arr.length === 0 ? true : false;
};
