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
const questions = [
    "現在の日本の総理大臣の名前は？",
    "令和6年は西暦何年？",
    "2番目に小さい都道府県は？",
    "1年のうち5番目にくる祝日は？"
];

for(let i = 0; i< questions.length; i++){
    alert(questions[i]);
};



