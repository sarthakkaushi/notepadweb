var editor = new FroalaEditor('#example', {
    // Set the save param.
    saveParam: 'content',
    

    // Set the save URL.
    // saveURL: 'http://localhost:4000/',

    // HTTP request type.
    saveMethod: 'POST',

    // Additional save params.
    saveParams: {title:undefined},

    events: {
      'save.before': function () {
        // Before save request is made.


        
      },

      'save.after': function () {
        // After successfully save request.
      },

      'save.error': function () {
        // Do something here.
      }
    }
  })
const saveBtn = document.getElementById('saveBtn')
saveBtn.addEventListener('click',()=>{
    // console.log('Saved')
    let title= document.getElementById('title')
    if(title.value.length>2){
      saveToDatabase(title.value,editor.html.get())

    }
    // console.log(title.value)
    // editor.opts.saveParams.title = title.value

    // editor.save.save()
    // console.log(editor.opts.saveParams.title)
   
})

const saveToDatabase=(title,content)=>{
    //console.log(editor.html.get())

    axios.post('http://localhost:4000/',{
        title:title,
        content:content
    }).then(r=>{

        window.location.href = r.data.url;

    })

}


var copyTextareaBtn = document.querySelector('#copy-me');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = window.location.href
  // copyTextarea.focus();
  // copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});