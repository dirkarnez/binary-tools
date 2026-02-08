// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

(async (appContainer: HTMLDivElement) => {
  if (!appContainer) {
    return;
  }

  const ul = document.createElement("ul");
  
  Array
  .from({ length: (1 << 5) })
  .map((_, i) => ({
    value: i,
    bin: i.toString(2)
  }))
  .forEach(({value, bin}) => {
    const li = document.createElement("li");
    li.innerText = `value: ${value}, bin: ${`${bin}`.padStart(5, "0")}`;
    if (value == 0) {
      li.style.color = "red";
    }
    ul.appendChild(li);
  })
  appContainer.appendChild(ul);
})(document.querySelector<HTMLDivElement>('#app')!);
