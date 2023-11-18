import { options } from "./lib/cmd.js";
import { loadCorpus, saveCorpus } from "./lib/corpus.js";
import { generate } from "./lib/generator.js";
import { createRandomPicker } from "./lib/random.js";

const corpus = loadCorpus("corpus/data.json");
const title = options.title || createRandomPicker(corpus.title)();
const article = generate(title, { corpus, ...options });
const output = saveCorpus(title, article);

console.log(`生成成功！文章保存于：${output}`);
