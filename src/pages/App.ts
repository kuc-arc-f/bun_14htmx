import renderLayout from './renderLayout';
//
export default function Page(props: any) { 
  //
  const htm = `
  <h1 className="text-4xl font-bold">hello</h1>
  `;
  return renderLayout({children: htm, title: "Home"});
}
