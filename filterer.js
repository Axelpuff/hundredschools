import { philosophers } from "./philosophers.js";

for (const philosopher of philosophers) {
  delete philosopher.description;
  delete philosopher.quote;
  for (const viewedId in philosopher.views) {
    delete philosopher.views[viewedId].explanation;
    delete philosopher.views[viewedId].quote;
  }
  for (const keyTerm of philosopher.keyTerms) {
    delete keyTerm.description;
    delete keyTerm.quote;
  }
}
console.dir(philosophers, { depth: null });
