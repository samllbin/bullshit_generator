// export function randomInt(min, max) {
//   const p = Math.random();
//   return Math.floor(min * (1 - p) + max * p);
// }

//将上次取到的元素放到末尾，下次就不会重复取到
//两个问题：
// 初始在数组末位的那个元素，第一次肯定不会被取到，破坏了随机性；
// 每次取完内容有个交换数组元素的操作，改变了数组本身，如果我们要用这个数组做其他操作，就可能会影响到别的操作的结果。
// export function randomPick(arr) {
//   const len = arr.length - 1;
//   const index = randomInt(0, len);
//   [arr[index], arr[len]] = [arr[len], arr[index]];
//   return arr[index];
// }

//使用高阶函数
//randomPick在被调用时可以不传入参数，和闭包有关

// export function createRandomPicker(arr) {
//   arr = [...arr]; // copy 数组，以免修改原始数据
//   function randomPick() {
//     const len = arr.length - 1;
//     const index = randomInt(0, len);
//     const picked = arr[index];
//     [arr[index], arr[len]] = [arr[len], arr[index]];
//     return picked;
//   }
//   randomPick(); // 抛弃第一次选择结果
//   return randomPick;
// }

export function randomInt(min = 0, max = 100) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

/*
  function randomPick(arrs) {
    return arr[Math.floor(arrs.length * Math.random())];
  }
  */

export function createRandomPicker(arr) {
  arr = [...arr]; // copy 数组，以免修改原始数据
  function randomPick() {
    const len = arr.length - 1;
    const index = randomInt(0, len);
    const picked = arr[index];
    [arr[index], arr[len]] = [arr[len], arr[index]];
    return picked;
  }
  randomPick(); // 抛弃第一次选择结果
  return randomPick;
}
