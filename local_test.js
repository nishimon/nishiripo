$(loaded);

function loaded() {
      showText();
  // ボタンをクリックしたときに実行するイベントを設定する
  $("#formButton").click(
    // コールバックとしてメソッドを引数にわたす
    function() {

      saveText();
      showText();
    });
    
  $("#Button").click(
      function() {
      reset();
   });    
    
}

function reset(){
localStorage.clear();
}

// 入力された内容をローカルストレージに保存する
function saveText() {
  // 時刻をキーにして入力されたテキストを保存する
  var text = $("#formText");
  var time = new Date();
  var val = escapeText(text.val());
  if(checkText(val)) { 
  localStorage.setItem(time, text.val());
  // テキストボックスを空にする
  text.val("");
  }
}


// 文字をエスケープする
function escapeText(text) {
  return $("<div>").text(text).html();
  return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return text.replace(/"/g,'&quot;').replace(/'/g,'&#39;');
   }

// 入力チェックを行う
function checkText(text) {
  // 文字数が0または20以上は不可
  if (0=== text.length || 20< text.length) {
    alert("文字数は1から20字にしてください");
    return false;
  }
  // すべてのチェックを通過できれば可
  return true;
}

// ローカルストレージに保存した値を再描画する
function showText() {
  // すでにある要素を削除する
  var list = $("#list")
  list.children().remove();
  // ローカルストレージに保存された値すべてを要素に追加する
  var key, value, html = [];

  for(var i=0, len=localStorage.length; i<len; i++) {
    key = localStorage.key(i);
    value = localStorage.getItem(key);
    html.unshift("<p>" + value + "</p>");
  }
  list.append(html.join(''));

}



