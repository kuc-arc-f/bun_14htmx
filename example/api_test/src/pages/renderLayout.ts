
let PATH__FAVICON = "/favicon.ico";
let PATH__ENTRY_CLIENT = "/static/entry-client.js";
let PATH__CSS_GLOBAL = "/static/index.css";
//
export default function Compo(props: any) {
console.log("renderLayout.env.VITE_APP_NAME=", process.env.VITE_APP_NAME);
  if(process.env.NODE_ENV === "production") {
    PATH__FAVICON = "/public/favicon.ico";
    PATH__ENTRY_CLIENT = "/public/static/entry-client.js";
    PATH__CSS_GLOBAL = "/public/static/index.css";
  }
  //
  const html = `<!DOCTYPE html><html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${props.title}</title>
    <link href="${PATH__CSS_GLOBAL}" rel="stylesheet" /> 
    <script
    src="https://unpkg.com/htmx.org@1.9.10"
    integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
    crossOrigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- head_wrap -->
    <div>
      <a href="/">[ home ]</a>
      <a href="/htmx2">[ htmx2 ]</a>
      <a href="/htmx3">[ htmx3 ]</a>
      <!-- 
      <a href="/login">[ Login ]</a>
      -->
      <a href="/testapi">[ TestApi ]</a>
    </div>
    <hr />   
    <!-- layout.value -->
    <input type="hidden" id="layout_app_name" value="${process.env.VITE_APP_NAME}" />     
    ${props.children}
    <!-- script -->
    <script src="${PATH__ENTRY_CLIENT}"></script>
  </body></html>
  `
  return html;
}