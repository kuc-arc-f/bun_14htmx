
console.log("entry-client.ts");
//
//
const Util = {
  /**
  *
  * @param
  *
  * @return
  */
  clearErrorsItem: function(items : any): void 
  {
      try{
          const idList: any[] = items;
          idList.forEach((id) => {
              const inputElement = document.querySelector(`#${id}`) as HTMLElement;
              if (inputElement) {
                inputElement.innerHTML = "";
              }                
          });
      } catch (e) {
        console.error(e);
        throw new Error('Error , clearErrorsItem');
      }
  },  
  /**
  *
  * @param
  *
  * @return
  */  
  setInnerHTMLById: function(idName: string, value: string){
    try{    
      const elem = document.getElementById(idName) as HTMLElement;
      if(elem) {
        elem.innerHTML = value;
      }
    } catch (e) {
      console.error(e);
      throw new Error("Error, setInnerHTMLById");
    }
  }, 
  /**
  *
  * @param
  *
  * @return
  */
  getInputValue: function(idName: string){
    try{
      let ret = "";    
      const elem = document.getElementById(idName) as HTMLElement;
      if(elem) {
        ret = elem.value;
      }
      return ret;
    } catch (e) {
      console.error(e);
      throw new Error("Error, getInputValue");
    }
  },
  /**
  *
  * @param
  *
  * @return
  */
  dialogShow: function(idName: string){
    try{    
      const dlg = document.getElementById(idName);
      if(dlg) {
        //@ts-ignore
        dlg.showModal();
        //btn
        const btn = document.getElementById(`button_${idName}`);
        btn?.addEventListener('click', async () => {
          //@ts-ignore
          dlg.close();
        });  
      }
    } catch (e) {
      console.error(e);
      throw new Error("Error, dialogShow");
    }
  },

}
// 
const Zod ={
  /**
  *
  * @param
  *
  * @return
  */   
  afterPostForm1: function()  {
    try{
      console.log("#startProc: Login");
      const resulte_form1 = document.querySelector('#resulte_form1');
      if(!resulte_form1){
        return;
      }
      const htm = resulte_form1.innerHTML;
      const obj = JSON.parse(htm);
      console.log(obj);
      //console.log("resulte_code=", obj.success);
      if(!obj.success) {
        console.log(obj.errors);  
        let s = "";
        if(obj.errors.title){
          s += "title: " + obj.errors.title + "\n";
        }
        if(obj.errors.content){
          s += "content: " + obj.errors.content + "\n";
        }
        alert(s);
      }else{
        alert("OK");
      }
    } catch (e) {
      console.error(e);
    }
  }
}
//
const TestApi ={
    //beforePostForm1
    beforePostForm1: function()  {
      try{
        console.log("#startProc: Login");
        Util.clearErrorsItem([
          'error_message_title', 'error_message_content'
        ]);
      } catch (e) {
        console.error(e);
      }
    },
    /**
    *
    * @param
    *
    * @return
    */   
    afterPostForm1: function()  {
      try{
        console.log("#startProc: Login");
        Util.clearErrorsItem([
          'error_message_title', 'error_message_content'
        ]);
        const resulte_form1 = document.querySelector('#resulte_form1') as HTMLElement;
        if(!resulte_form1){
          return;
        }
        const htm = resulte_form1.innerHTML;
        const obj = JSON.parse(htm);
        console.log(obj);
        //console.log("resulte_code=", obj.success);
        if(obj.ret !== "OK" && obj.errors) {
          Util.dialogShow(ERROR_DIALOG_NAME1);
          console.log(obj.errors);  
          let s = "";
          if(obj.errors.title){
            const s = "title: " + obj.errors.title + "\n";
            Util.setInnerHTMLById("error_message_title", s);
          }
          if(obj.errors.content){
            const s = "content: " + obj.errors.content + "\n";
            Util.setInnerHTMLById("error_message_content", s);
          }
          //alert(s);
        }else{
  //        Util.dialogShow(DIALOG_NAME1);
          alert("OK, save");
          location.reload();
        }
      } catch (e) {
        console.error(e);
        alert("Error, Save");
      }
    }
  }

const Login ={
  /**
  *
  * @param
  *
  * @return
  */
  validLogin : async function() : Promise<any>
  {
console.log("#AuthCommon.startProc");
    let ret = false;
    const parsedUrl = new URL(window.location.href);
    if(
        !(
          parsedUrl.pathname === '/login' ||
          parsedUrl.pathname === '/user/create'
        )
    )
    {
console.log("LibLayout.pathname=", parsedUrl.pathname);
      const name = Util.getInputValue("layout_app_name") + "_auth";
      //console.log(name);
      const authValue = localStorage.getItem(name);
      console.log(authValue);
      if(!authValue){
        location.href = '/login';
        return;
      }
    }
    return ret;
  },
  /**
  *
  * @param
  *
  * @return
  */
  beforePostForm1: function()  {
    try{
      console.log("#startProc: Login");
      Util.clearErrorsItem([
        'error_message_title', 'error_message_content'
      ]);
    } catch (e) {
      console.error(e);
    }
  },
  /**
  *
  * @param
  *
  * @return
  */   
  afterPostForm1: function()  {
    try{
      console.log("#startProc: Login");
      Util.clearErrorsItem([
        'error_message_title', 'error_message_content'
      ]);
      const resulte_form1 = document.querySelector('#resulte_form1') as HTMLElement;
      if(!resulte_form1){
        return;
      }
      const htm = resulte_form1.innerHTML;
      const obj = JSON.parse(htm);
      console.log(obj);
      console.log("ret=", obj.ret);
      if(obj.ret && obj.ret !== 200) {
        alert("Error, login");
      }else{
        const key = obj.config.appName;
        localStorage.setItem(key + "_auth", '1');
        alert("OK, Login");
        location.href= "/";
      }
    } catch (e) {
      console.error(e);
      alert("Error, Save");
    }
  }
}
Login.validLogin();
