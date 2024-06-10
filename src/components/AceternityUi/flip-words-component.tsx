import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["front-end", "web-designer", "UX/UI", "design"];

  return (
    <div className="h-full flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <FlipWords words={words} /> <br />
            new ways of making web applications
      </div>
    </div>
  );
}
