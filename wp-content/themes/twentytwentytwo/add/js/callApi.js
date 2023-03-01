  //apiキーの定義
  const key = "f8a7c3792c91300c";
  //初期位置(東京駅)の緯度経度を定義
  const firstLat = "35.681236";
  const firstLng = "139.767125";
  //初期表示位置のURLをテンプレートリテラルで定義
  let url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${key}&lat=${firstLat}&lng=${firstLng}&range=3&order=4&format=jsonp`;
  //初期表示位置
  $.ajax({
      url: url,
      type: 'GET',
      dataType: 'jsonp',
      jsonpCallback: 'callback'
  }).done(function(data) {
      //取得データを確認
      console.log(data);
      console.log(data.results.shop);
      //htmlを挿入する予定のエレメント
      const firstElement = document.querySelector('#shopWrap');
      //取得した店舗データをループ処理する
      for (let i = 0; i < data.results.shop.length; ++i) {
          //テンプレートリテラルでHTMLを定義
          let insertHTML =        
             `<div class="item">
                <div class="left-img">
                  <a href="${data.results.shop[i]["urls"]["pc"]}" class="value">
                  <img src="${data.results.shop[i]["photo"]["pc"]["l"]}" alt="" />
                  </a>
                </div>
                <div class="right">
                  <ul>
                    <li class="name">
                      <p class="key">店舗名</p>
                      <a href="${data.results.shop[i]["urls"]["pc"]}" class="value">${data.results.shop[i]["name"]}</a>
                    </li>
                    <li>
                      <p class="key">住所</p>
                      <a href='https://maps.google.co.jp/maps?ll=${data.results.shop[i]["lat"]},${data.results.shop[i]["lng"]}'
                      class="value">${data.results.shop[i]["address"]}</a>
                    </li>
                    <li>
                      <p class="key">アクセス</p>
                      <p class="value">${data.results.shop[i]["access"]}</p>
                    </li>
                    <li>
                      <p class="key">営業時間</p>
                      <p class="value">${data.results.shop[i]["open"]}</p>
                    </li>
                    <li>
                      <p class="key">駐車場</p>
                      <p class="value">${data.results.shop[i]["parking"]}</p>
                    </li>
                  </ul>
                </div>
              </div>`;
          firstElement.insertAdjacentHTML('beforeend', insertHTML);
      }
    }).fail(function(data) {
        console.log(data);
    });

  //検索用関数
  function search() {
      //htmlを挿入する予定のエレメント
      const number = document.querySelector('#number');
      const element = document.querySelector('#shopWrap');
      //一旦要素を削除
      while (number.firstChild) {
          number.removeChild(number.firstChild);
      }
      while (element.firstChild) {
          element.removeChild(element.firstChild);
      } 
      //入力値の取得
      let lat = document.getElementById("lat").value;
      let lng = document.getElementById("lng").value;
      let range = document.getElementById("range").value;
      //検索用URLの定義
      let searchUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${key}&lat=${lat}&lng=${lng}&range=${range}&count=20&order=4&format=jsonp`;
      //値の取得＆HTMLの挿入
      $.ajax({
          url: searchUrl,
          type: 'GET',
          dataType: 'jsonp',
          jsonpCallback: 'callback'
      }).done(function(data) {
          //取得データを確認
          console.log(data);
          console.log(data.results.shop);
          // 結果件数をテンプレートリテラルでHTMLを定義
          let num = `<p>${data.results.results_available}件見つかりました。<br class="on480"/>${data.results.shop.length}件をオススメ順に表示しています。</p>`;
          number.insertAdjacentHTML('beforeend', num);
          //取得した店舗データをループ処理する
          for (let i = 0; i < data.results.shop.length; ++i) {
              //テンプレートリテラルでHTMLを定義
              let insertHTML =        
             ` <div class="item">
                <div class="left-img">
                  <a href="${data.results.shop[i]["urls"]["pc"]}" class="value">
                    <img src="${data.results.shop[i]["photo"]["pc"]["l"]}" alt="" />
                  </a>
                </div>
                <div class="right">
                  <ul>
                    <li class="name">
                      <p class="key">店舗名</p>
                      <a href="${data.results.shop[i]["urls"]["pc"]}" class="value">${data.results.shop[i]["name"]}</a>
                    </li>
                    <li>
                      <p class="key">住所</p>
                      <a href='https://maps.google.co.jp/maps?ll=${data.results.shop[i]["lat"]},${data.results.shop[i]["lng"]}'
                      class="value">${data.results.shop[i]["address"]}</a>
                    </li>
                    <li>
                      <p class="key">アクセス</p>
                      <p class="value">${data.results.shop[i]["access"]}</p>
                    </li>
                    <li>
                      <p class="key">営業時間</p>
                      <p class="value">${data.results.shop[i]["open"]}</p>
                    </li>
                    <li>
                      <p class="key">駐車場</p>
                      <p class="value">${data.results.shop[i]["parking"]}</p>
                    </li>
                  </ul>
                </div>
               </div>`;
              element.insertAdjacentHTML('beforeend', insertHTML);
            }
        }).fail(function(data) {
            console.log(data);
            // データの取得に失敗したことを表示
          let num = `<p>データを取得できませんでした。</p>`;
          number.insertAdjacentHTML('beforeend', num);
        });
  }
