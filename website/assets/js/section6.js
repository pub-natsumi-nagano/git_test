
for(let i=1; i < 101 ; i++){
    console.log(i);
};

let dazai ="広い門の下には、この男のほかに誰もいない。ただ、所々丹塗にぬりの剥はげた、大きな円柱まるばしらに、蟋蟀きりぎりすが一匹とまっている。羅生門が、朱雀大路すざくおおじにある以上は、この男のほかにも、雨やみをする市女笠いちめがさや揉烏帽子もみえぼしが、もう二三人はありそうなものである。それが、この男のほかには誰もいない。";

if (dazai.length > 100) {
    while (dazai.length > 100) {
        dazai = dazai.slice(0, -1);
    }
    for (let i = 1; dazai.length > 0; i++) {
        console.log(i);
        dazai = dazai.slice(0, -1);
    }
};

// 配列を引数として受け取る関数findMaxを定義します
const findMax =(arr) => { 
    // 配列の最初の要素を最大値として初期設定します
    // この例では arr[0] は 12 になります
    let max = arr[0]; 

    // arr.lengthは配列の要素数を表します
    // この使用例では[12, 6, 25, 8, 17]の5つの要素があるため
    // arr.lengthは5となります
    // つまりforループは i=1から4まで4回実行されます
    for (let i = 1; i < arr.length; i++){
        // 現在の要素が保存されている最大値より大きい場合
        // 25が見つかった時点で max は 25 に更新され、
        // 以降の8や17は25より小さいため更新されません
        if(arr[i] > max){
            // その値を新しい最大値として更新します
            max = arr[i];
        }
    }
    // 最終的な最大値25をコンソールに出力します
    console.log(max);
};

// 関数の使用例: [12, 6, 25, 8, 17]という配列を引数として渡します
// この配列の長さ(arr.length)は5です
// 結果として25が出力されます
findMax([12, 6, 25, 8, 17]); 


//-------------------------------------------------------------------------

// Personクラスを定義します
class Person {
    // constructorメソッド: インスタンス作成時に自動的に呼ばれる特別なメソッドです
    // nameとageパラメータを受け取り、インスタンスの初期設定を行います
    constructor(name, age){
        // this.nameでインスタンスのnameプロパティに値を設定
        this.name = name;
        // this.ageでインスタンスのageプロパティに値を設定
        this.age = age;
    }

    // sayHiメソッド: 英語で挨拶を出力します
    // このメソッドはインスタンスに対して呼び出すことができます
    sayHi(){
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }
    
    // celebrateBirthdayメソッド: 年齢を1つ増やし、お祝いメッセージを出力します
    // このメソッドはインスタンスの状態（age）を変更できます
    celebrateBirthday(){
        this.age += 1;
        console.log(`お誕生日おめでとう！${this.name}さんは${this.age}歳になりました！`);
    }
    
    // introduceInJapaneseメソッド: 日本語で自己紹介を出力します
    // このメソッドは単純に情報を表示するだけで、インスタンスの状態は変更しません
    introduceInJapanese(){
        console.log(`はじめまして、${this.name}です。${this.age}歳です。`);
    }
}

// Personクラスのインスタンスを作成し、person1変数に代入
const person1 = new Person("John", 30);

// 各メソッドの呼び出し例
person1.sayHi();  // 英語での挨拶を出力
person1.introduceInJapanese();  // 日本語での自己紹介を出力
person1.celebrateBirthday();  // 誕生日のお祝いと年齢の更新

//-------------------------------------------------------------------------

