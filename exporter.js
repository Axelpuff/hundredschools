import fs from "node:fs/promises";
import { philosophers } from "./philosophers.js";

function basicCallback(err) {
  if (err) {
    console.error(err);
  }
};

for (const philosopher of philosophers) {
  const path = "./export/" + philosopher.id;
  const viewsPath = path + "/views/";
  const keyTermsPath = path + "/keyTerms/";
  if (!philosopher.id) {
    console.error(philosopher);
  }
  await fs.mkdir(path, basicCallback);
  await fs.mkdir(viewsPath, basicCallback);
  await fs.mkdir(keyTermsPath, basicCallback);
  fs.writeFile(
    path + "/description.md",
    philosopher.description || "TBA",
    basicCallback
  );
  fs.writeFile(path + "/quote.md", philosopher.quote || "TBA", basicCallback);
  fs.writeFile(path + "/quoteSource.md", "TBA", basicCallback);
  for (const viewedId in philosopher.views) {
    const viewPath = viewsPath + "/" + viewedId;
    await fs.mkdir(viewPath, basicCallback);
    fs.writeFile(
      viewPath + "/description.md",
      philosopher.views[viewedId].explanation || "TBA",
      basicCallback
    );
    fs.writeFile(
      viewPath + "/quote.md",
      philosopher.views[viewedId].quote || "TBA",
      basicCallback
    );
    fs.writeFile(viewPath + "/quoteSource.md", "TBA", basicCallback);
  }
  for (const keyTerm of philosopher.keyTerms) {
    const keyTermPath = keyTermsPath + "/" + keyTerm.id;
    await fs.mkdir(keyTermPath, basicCallback);
    fs.writeFile(
      keyTermPath + "/description.md",
      keyTerm.description || "TBA",
      basicCallback
    );
    fs.writeFile(
      keyTermPath + "/quote.md",
      keyTerm.quote || "TBA",
      basicCallback
    );
    fs.writeFile(keyTermPath + "/quoteSource.md", "TBA", basicCallback);
  }
}
