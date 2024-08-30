import renderLayout from './renderLayout';
//
export default function Page(props: any) {
console.log("Login.process.env=", process.env.NODE_ENV);
  //
  const htm = `
  <div class="container_base">
    <h1 class="text-4xl font-bold my-2">Login</h1>
    <form
    hx-post="/api/common/user_login"
    hx-trigger="submit"
    hx-target="#resulte_form1"
    hx-on--before-request=""
    hx-on--after-request="Login.afterPostForm1()"
    >
      <label class="text-2xl font-bold my-2">Email:</label>
      <input type="text" id="email" name="email"
      class="input_text" /> 
      <hr class="my-2" />
      <label class="text-2xl font-bold my-2">Password:</label>
      <input type="text" id="password" name="password"
      class="input_text" /> 
      <hr class="my-2" />
      <button type="submit" class="btn btn-purple">Login</button>
    </form>
    <hr />
    <h3 id="resulte_form1" class="d-none"></h3>
  </div>
  `;
  // 
  return renderLayout({children: htm, title: "Login"});
}
/*
*/
