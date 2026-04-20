import fs from "fs";
import path from "path";
import matter from "front-matter";
import Markdown from "markdown-to-jsx";

export default function Home() {
  const filePath = path.join(process.cwd(), "src/pages/index.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { body } = matter(fileContent);

  return (
    <div style={{ padding: 20 }}>
      <Markdown>{body}</Markdown>
    </div>
  );
}