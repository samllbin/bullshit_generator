// export function interact(questions) {
//   // questions 是一个数组，内容如 {text, value}
//   process.stdin.setEncoding("utf8");

//   return new Promise((resolve) => {
//     const answers = [];
//     let i = 0;
//     let { text, value } = questions[i++];
//     console.log(`${text}(${value})`);
//     process.stdin.on("readable", () => {
//       let chunk = process.stdin.read().slice(0, -1);
//       if (chunk === "\r" || chunk === "\n") {
//         chunk = "";
//       }
//       answers.push(chunk || value); // 保存用户的输入，如果用户输入为空，则使用缺省值
//       const nextQuestion = questions[i++];
//       if (nextQuestion) {
//         //如果问题还未结束，继续监听用户输入
//         process.stdin.read();
//         text = nextQuestion.text;
//         value = nextQuestion.value;
//         console.log(`${text}(${value})`);
//       } else {
//         // 如果问题结束了，结束readable监听事件
//         resolve(answers);
//       }
//     });
//   });
// }

// 用 process.stdin 实现命令行交互，需要在readable事件中多调一次process.stdin.read()方法，这看起来似乎很奇怪，代码的可读性不高。

import readline from "readline";

function question(rl, { text, value }) {
  const q = `${text}(${value})\n`;
  return new Promise((resolve) => {
    rl.question(q, (answer) => {
      resolve(answer || value);
    });
  });
}

export async function interact(questions) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let ans = [];

  for (let i = 0; i < questions.length; i++) {
    let que = questions[i];
    const answer = await question(rl, que);

    ans.push(answer);
  }
  rl.close();
  return ans;
}
