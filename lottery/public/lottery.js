  //宣告我們剛剛寫好的取亂數的function
  function getRandom(x){
    return Math.floor(Math.random()*x)+1;
};
//再來寫產生威力彩號碼的function
function getPowerNum(){
    //首先我們先宣告一個字串，用來裝要回傳的結果
    var status = '第一區號碼為：';
    //宣告一個變數用來裝隨機產生的數字
    var n = 0;
    //一注威力彩號碼有6個所以我們讓迴圈跑六次
    for(i=0;i<=5;i++){
        //用indexOf判斷該數字之前有沒有出現過
        n = getRandom(38);
        if(status.indexOf(n)>0){
        //如果有出現過就重跑一次迴圈
        i-=1;
        continue;
        }
        else{
        //沒出現過的話就寫進字串裡
        status += n + ' ';
        };
    };
    //因為威力彩有分兩區，第二區為01~08隨機一數字，所以我們在回傳時加上。
    return status + '第二區號碼為：' + getRandom(8);
};
function showPowerball(num){
    var elm=document.getElementById("powerball")
    console.log(num)            
    elm.innerHTML='<p><span style="color:blueviolet; margin-right:50px;font-weight:bold;font-size:24px">interactive Astro Component</span>威力彩:'+num+'</p>'
}