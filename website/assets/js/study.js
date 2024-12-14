//alert("Hell World!");

//---------------------------------------
//宣言＋変数 緑色:宣言
//---------------------------------------

const foo = 1 + 1;
console.log(foo);

const bar = () => {
    const foo =1 +1;
    console.log(foo);
}

let hoge ="hoge";
    console.log(hoge);


//---------------------------------------
//演算
//---------------------------------------

const minus = 5 - 1;
console.log(minus);

const multiplication = 2 * 10;
console.log(multiplication);///掛け算

const division = 80 / 8;//割り算
console.log(division);

const remainder = 82 % 8;//割り算の余り
console.log(remainder);

const exponentiation = 2 ** 10;//べき乗
console.log(exponentiation);

//---------------------------------------
//配列 array groups
//---------------------------------------

const array = ["bara", "Shohu" , "Rena"];
console.log(array[0]);
console.log(array[2]);
//インデックスは０から始まる
//配列がもつ値の数だけ同様の処理を実行するなどができる。
const groups = [
    ["Senku","Gen"],
    ["Ryusui","Ukyo"],
    ["Kohaku","Ruri","Suika"]
];
console.log(groups["0"]);

//---------------------------------------
//7 if(条件文)｛
    //条件が真の場合に実行される処理
//｝
//---------------------------------------

dummyNumber = 2;
//dummyNumberは数値を持つ変数
if(dummyNumber === 0){alert("Hell World!")}//dummyNumberが0のとき
if(dummyNumber !== 2){alert("Hell World!")}//dummyNumberが0でないとき
if(dummyNumber >= 0) {alert("2")}//dummyNumberが0以上のとき
if(dummyNumber <= 0) {alert("Hell World!")}//dummyNumberが0以下のとき
if(dummyNumber < 0)  {alert("Hell World!")}//dummyNumberが0より下のとき

//論理演算子
//if(isLogin && dummyNumber > 0){ }//isLoginがture,かつ、dummyNumber が0より大きい場合、の意味
//if(isLogin || dummyNumber > 0){ }//isLoginがture,または、dummyNumber が0より大きい場合、の意味

//else
//if(条件式){
    //条件式が当てはまった場合の処理
//}else{
    //条件式が当てはまらなかった場合の処理
//};
//---------------------------------------
//8ループ文 for(初期値; 条件式; 増減式){}
//---------------------------------------
//const questions = [
//    "現在の日本の総理大臣の名前は？",
//    "令和6年は西暦何年？",
//    "2番目に小さい都道府県は？",
//];

//---------------------------------------

//---------------------------------------
//関数の宣言（のみ実行はされない）
const changeDarkMode = () => {
   if(new Date().getHours() < 20 ){
    document.body.style.backgroundColor = "#333"
   }
};

//呼び出し
changeDarkMode();


//20時//9 関数以降、または0-5時
const changeDarkMode2 = () => {
    if(new Date().getHours() > 20 || new Date().getHours() < 5 ){
     document.body.style.backgroundColor = "#99eedd"
    }
 };
 changeDarkMode2();
console.log(document.body.style.backgroundColor);

//引数


const changeDarkMode3 = (time = 22, color ="#eee") => {
    if(new Date().getHours() > time){
        document.body.style.backgroundColor = color;
    }
};

changeDarkMode3();

const changeDarkMode4 = (obj) => {
    if(new Date().getHours() > obj.time){
        document.body.style.backgroundColor = obj.color;
    }
};

changeDarkMode4({time: 20, color: "#eeeeee"})



//戻り値
//3～5月春、6～8月夏、9～11月秋


const changeDarkMode5 = (time, color = "#444" ) => {
    if(new Date().getHours() >= time){
        document.body.style.backgroundColor = color;
    }
}

const getSeason =() =>{
    const month =new Date () .getMonth() +1;
    if(month >= 3 && month <=5){
        return "spring";
    } else if (month > 6 && month <= 8){
        return "summer";
    } else if (month > 9 && month <=11){
        return "autumn";
    } else {
        return "winter"
    }
};

const season = getSeason(); //seasonにはspring, summer, autumn, winterのいずれかがはいる
if(season === "winter"){
    changeDarkMode5 (24);
} else {
    changeDarkMode5(22);
};

const names = ["Yamada","Taro"];
console.log(names.join(" ").toUpperCase());


// getElementsByClassName()はHTMLCollectionを返すため、
// DOMが完全に読み込まれる前にスクリプトが実行されると要素が見つからない可能性があります。
// DOMContentLoadedイベントを使用して、DOMの読み込み完了後に実行するようにします。

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName("JsTest")[2].innerText = "HelloWorld";
});

const isLogin = true;
if(isLogin){
    console.log("Login: Success!");
} else {
    console.log("Login: Failed!");
};
for (let i = 0; i < 3; i++) {
    console.log(i)
};

const sample_func1 = () => {
    console.log("Hello world");
}
sample_func1()


function sample_func2() {
    console.log("Hello world");
}
sample_func2();

const sample_func = (arg) => {
    console.log ("Hello " + arg);
};

