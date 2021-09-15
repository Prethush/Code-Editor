
import React, { useState, useEffect } from "react";
import Editor from "./Editor";

function App() {

  const [html, setHtml] = useState(`<center>
  <img src="https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg" />
  <h1>I am</h1>
  <h2>Hello</h2>
</center>`);

  const [css, setCss] = useState(`h1 {
    font-family: sans-serif,
    color: blue
}
h2 {
    color: red
}
img {
    width: 200px;
    height: auto;
    border-radius: 20px;
}`);
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}<body>
          <style>${css}<style>
        <html>
      `)
    }, 250)
    return () => clearTimeout(timeOut);
  }, [html, css])

  return (
    <>
      <main className="pt-12 px-8 sm:px-20 pb-24 bg-blue-400 min-h-screen">
        <h1 className="text-center text-4xl font-bold mb-4">Code Editor</h1>
        <h5 className="text-center text-xl">You can write and preview HTML and CSS!</h5>
        <section className="flex my-8 flex-col items-center lg:flex-row lg:justify-between lg:items-stretch">
          <div className="w-big lg:w-small mx-8">
            < Editor language="xml" displayName="html" value={html} onChange={setHtml} />
            < Editor language="css" displayName="css" value={css} onChange={setCss} />
          </div>
          <div className="w-big lg:w-small">
            <div className="bg-gray-500 text-white py-2 flex justify-between px-4 rounded-t-lg">
              <div className="flex items-center">
                <div className="mx-1 w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="mx-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="mx-1 w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h4 className="font-semibold uppercase">Output</h4>
            </div>
            < iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
              className="bg-gray-300 rounded-b-lg text-left pl-4 py-2"
            />
          </div>
        </section>
      </main>
    </>
  )
}


export default App;