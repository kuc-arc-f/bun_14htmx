import renderLayout from './renderLayout';
//
export default function Page(props: any) {
  const htm = `
  <div>
    <h1>Htmx3.tsx</h1>
    <form
    hx-post="/api/test/test"
    hx-trigger="submit"
    hx-target="#h2"
    hx-on--before-request=""
    hx-on--after-request="alert('OK, post send')"
    >
      <input type="text" name="name" />
      <button type="submit">Add</button>
    </form>
    <hr />
    <h3 id="h2">ここに表示</h3>
  </div>
  `;
  //
  return renderLayout({children: htm, title: "Htmx3"});
}
/*
*/
