import { useEffect, useState } from "react";

const Memo = () => {
  const [inputText, setInputText] = useState("");
  //   const [displayMessage, setDisplayMessage] = useState(false);
  const [saveDate, setSaveDate] = useState<string | null>(null);

  useEffect(() => {
    let text: string;
    if (window.localStorage.getItem("text") === null) {
      text = "";
    } else {
      text = window.localStorage.getItem("text")!;
    }
    setInputText(text);
  }, []);

  //   console.log(new Date());

  const saveText = () => {
    if (inputText === "") return;
    window.localStorage.setItem("text", inputText);
    window.localStorage.setItem("time", new Date().toLocaleTimeString());

    setSaveDate(window.localStorage.getItem("time"));
    // setDisplayMessage(true);
    // setTimeout(() => {
    //   setDisplayMessage(false);
    // }, 1000);
  };

  const deleteText = () => {
    window.localStorage.setItem("text", "");
    setInputText("");
    setSaveDate(null);
  };

  return (
    <main className="w-[360px] mx-auto mt-4">
      <h1 className="font-bold text-2xl text-center my-2">メモ帳</h1>
      <textarea
        className="w-full box-border h-40 border border-black rounded p-2"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      ></textarea>
      <div className="flex items-center gap-2 mt-2">
        <span className={`text-sm mr-auto  transition-opacity duration-300`}>
          {saveDate}
        </span>
        <button
          className="py-1 px-4 border border-black rounded bg-gray-100 hover:bg-gray-200"
          onClick={deleteText}
        >
          削除
        </button>
        <button
          className="py-1 px-4 border border-black rounded bg-gray-100 hover:bg-gray-200"
          onClick={saveText}
        >
          保存
        </button>
      </div>
    </main>
  );
};
export default Memo;
