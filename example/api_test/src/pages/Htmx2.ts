import renderLayout from './renderLayout';
//
export default function Page(props: any) {
  const htm = `
  <div>
    <h1 class="text-4xl font-bold">HTMX</h1>
    <hr class="my-2" />
    <button
      class="btn"
      hx-get="https://jsonplaceholder.typicode.com/users/1"
      hx-target="#h2"
    >
      Click
    </button>
    <hr class="my-2" />
    <h3 id="h2">ここに表示</h3>
  </div>
  `;
  //
  return renderLayout({children: htm, title: "Htmx2"});
}
/*
*/
