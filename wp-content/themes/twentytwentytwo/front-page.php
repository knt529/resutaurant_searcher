<?php get_header(); ?>

<div class="front">
  <div class="conditions">
   <div class="box">
      <div class="ttl">
        <h3>検索条件</h3>
      </div>
     
      <div class="content">
        <button id="btn" class="location_btn">
          現在地を取得する
        </button>

        <div class="flex">
          <div class="item">
            <div class="left">
              <p>緯度</p>
            </div>
            <div class="right">
              <input type="text" name="lat" id="lat" value="">
            </div>
          </div>
  
          <div class="item">
            <div class="left">
              <p>経度</p>
            </div>
            <div class="right">
              <input type="text" name="lng" id="lng" value="">
            </div>
          </div>
  
          <div class="item">
            <div class="left">
              <p>検索範囲</p>
            </div>
            <div class="right">
              <select name="range" id="range" value="">
                  <option value="1">300m</option>
                  <option value="2">500m</option>
                  <option value="3" selected>1000m</option>
                  <option value="4">2000m</option>
                  <option value="5">3000m</option>
              </select>
            </div>
          </div>
  
          <div class="search_btn">
          <button id="search" onclick="search()">検索</button>
          </div>
        </div>
      </div>
   </div>
  </div>

  <div class="result">
    <div class="ttl">
      <h3>検索結果一覧</h3>
    </div>

    <div class="box">
      <div class="number" id="number"></div>
    
      <div class="result_content">
        <div class='shopWrap' id='shopWrap'></div>
      </div>
    </div>
  </div>
</div>


<?php get_footer(); ?>
