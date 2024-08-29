import renderLayout from './renderLayout';
//
export default function Page(props: any) {
  const htm = `
  <div class="container_base">
    <h1 class="text-4xl font-bold">Zod </h1>
    <hr class="my-2" />
    <form
    hx-post="/api/zod/test"
    hx-trigger="submit"
    hx-target="#resulte_form1"
    hx-on--before-request=""
    hx-on--after-request="Zod.afterPostForm1()"
    >
      <label>title</label>
      <input type="text" name="title"
      class="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" 
      /><br />
      <hr class="my-2" />
      <label>content</label>
      <input type="text" name="content"
      class="mx-2 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
      />   
      <hr class="my-2" />
      <button type="submit"
      class="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
      >Add</button>
    </form>
    <hr />
    <div id="resulte_form1" class="d-none"></div>
  </div>
  `;
  //
  return renderLayout({children: htm, title: "Htmx3"});
}
/*
*/
