//2つの整数を受け取り、大きい方の数を返す関数を作成してください。
const comparingNumbers = (num1, num2) => (num1 > num2 ? num1 : num2);

//文字列を受け取り、文字列の長さが5以下の場合はそのまま返し、6以上の場合は最初の5文字のみを返す関数を作成してください。

//俺の回答 不正解｡展開演算子が使えないとのこと｡
const StringComparison = (String) =>
  String.length < 5 ? String : String.length(...5);

//答え
const truncateString = (str) => (str.length <= 5 ? str : str.slice(0, 5));

//配列を受け取り、配列内の重複した値を削除した新しい配列を返す関数を作成してください。

//俺の回答 全くの間違いだった｡map関数で1つづつ値を調べて重複を探すというおかしなことをしていた｡
const arrayEqualizer = (array) => {
  array.map((value) => (value === array.value ? array.filter(value) : array));
};

//答え
const arrayEqualizer2 = (array) => {
  const uniqueValues = [...new Set(array)];
  const newArray = uniqueValues.length === 1 ? array : uniqueValues;
  return newArray;
};

//数字の配列を受け取り、配列内の最大値と最小値の差を計算する関数を作成してください。

//A.
const betweenMaxandSmall = (array) => {
  const maxValue = Math.max.apply(Math, array);
  const minValue = Math.min.apply(Math, array);
  const valueDiff = maxValue - minValue;
  return Math.abs(valueDiff);
};

/**
 * 問題: 与えられた整数を各桁の数値に分解し、それらの数値の合計を返す関数digitSumを作成してください。例えば、 digitSum(123)は6を返します(1 + 2 + 3 = 6)。

制約:

    与えられる整数は正の整数であり、0以下の値は与えられないものとします。

ヒント:

    整数を文字列に変換すると、各桁の数値を配列の要素として取り出すことができます。
    配列要素を数値に変換する方法には、Number()関数を使用することができます。
    合計を返すには、配列の要素をループして総和を計算することができます。
 */

const digitSum = (num) => {
  num.toString.length.map;
};
