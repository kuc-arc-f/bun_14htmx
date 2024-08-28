import renderLayout from './renderLayout';
//
export default function Page(props: any) {
  const htm = `
  <div>
    <h1>HTMX</h1>
    <button
      hx-get="https://jsonplaceholder.typicode.com/users/1"
      hx-target="#h2"
    >
      Click
    </button>
    <h3 id="h2">ここに表示</h3>
  </div>
  `;
  //
  return renderLayout({children: htm, title: "Htmx2"});
}
/*
*/
