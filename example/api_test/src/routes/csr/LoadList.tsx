//
function Compo(props :any){
//console.log(props.items);
  let htm = ""; 
  props.items.forEach((item: any, index: number) => {
    htm += `<!-- LoadList -->
    <div key="${index}">
      <h3 class="text-3xl font-bold">${item.title}</h3>
      <span>ID: ${item.id}, ${item.createdAt}</span>
      <a href="/testapishow/${item.id}">
        <button
        class="ms-2 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded"
        >Show</button>
      </a>
      <hr />      
    </div>
    `;
  });
  return htm;
}
export default Compo;