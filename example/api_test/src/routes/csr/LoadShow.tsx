
let pageItem: any = {};
//
function Compo(props :any){
  pageItem = props.item;
  //
  return (
  <div>
    <h1 className="text-4xl font-bold">{pageItem.title}</h1>
    <span>ID: {pageItem.id} , {pageItem.createdAt}</span>
    <hr />
    <div>{pageItem.content}</div>
  </div>
  );
}
export default Compo;