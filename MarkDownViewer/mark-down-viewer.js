function getFile(){
    var req = new XMLHttpRequest(); // XMLHttpRrequestオブジェクトを生成
    req.open("get", "test.md", true); // アクセスするファイルを指定
    req.send(null);// HTTPリクエストの発行
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
    req.onload = function(){
      var md = marked(req.responseText);
      md = md.replace(/(<p>.*?)\n(.*?<\/p>)/im, '$1<br>$2');
      console.log(md);
      document.body.innerHTML = md;
    }
}

function test(){
  var md = marked("aaaaa\naaaaaa");
  console.log(md);
  md = md.replace(/(<p>.*?)\n(.*?<\/p>)/im, '$1<br>$2');
  console.log(md);
  document.body.innerHTML = md;
}

//window.onload = test;
window.onload = getFile;
