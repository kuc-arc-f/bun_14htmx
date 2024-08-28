import renderLayout from './renderLayout';
//
export default function Page(props: any) {
  const htm = `
  <div>
    <h1 class="text-4xl font-bold">Htmx3 </h1>
    <hr class="my-2" />
    <form
    hx-post="/api/test/test"
    hx-trigger="submit"
    hx-target="#h2"
    hx-on--before-request=""
    hx-on--after-request="alert('OK, post send')"
    >
      <input type="text" name="name" class="input_text" />
      <button type="submit" class="btn my-2">Add</button>
    </form>
    <hr class="my-2" />
    <h3 id="h2">ここに表示</h3>
  </div>
  `;
  //
  return renderLayout({children: htm, title: "Htmx3"});
}
/*
*/
