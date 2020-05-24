    //1.Save クリックイベント

    $('#save').on('click',function(){
      const name = $('#name').val();
      const number = [$('#number').val(),$('#email').val()];

      // console.log(name);
      // console.log(number);
      // console.log(email);

      // alert('保存しました！')

    localStorage.setItem(name, JSON.stringify(number));
  
  
    const html = `
    <li>
      <div>名前：${name}</div>
      <div>電話番号：${number[0]}</div>
      <div>EMAI：${number[1]}</div>

    </li>`

    $("#list").append(html);
    
  });

  //2.clear クリックイベント
  $('#clear').on('click', function(){
      localStorage.clear();
      $("#list").empty();
      // alert("削除しました");
      $('#name').val('');
    $('#number').val(''); 
    $('#email').val(''); 
  });

  for (let i = 0; i < localStorage.length; i++) {
    // 保存されたデータのkeyを取得
    const name = localStorage.key(i);
    // const keyの中身をみている
    console.log(name)
    // getItemのKeyを使って保存されたデータを全部取得、getItem(name)の値を取得
    const number = JSON.parse(localStorage.getItem(name));
    //  const valueの中身をみている
    // console.log(number)
    const html = `
    <li>
      <div>名前：${name}</div>
      <div>電話番号：${number[0]}</div>
      <div>EMAI：${number[1]}</div>
    </li>`
    

    // $("#list").empty();
    $("#list").append(html);
  }
