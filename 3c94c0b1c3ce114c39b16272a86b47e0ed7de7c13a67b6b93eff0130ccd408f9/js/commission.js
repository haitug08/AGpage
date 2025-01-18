function calculate() {
  // テーブルの行ごとに処理
  const rows = [
    { classId: "class1-row1", planId: "plan1-row1", timesId: "times1-row1", resultId: "premium-result-row1", countId: "count-row1" },
    { classId: "class1-row2", planId: "plan1-row2", timesId: "times1-row2", resultId: "premium-result-row2", countId: "count-row2" },
    { classId: "class1-row3", planId: "plan1-row3", timesId: "times1-row3", resultId: "premium-result-row3", countId: "count-row3" },
    // 必要な行を追加
  ];

  rows.forEach(row => {
    const classValue = document.getElementById(row.classId).value;
    const planValue = document.getElementById(row.planId).value;
    const timesValue = document.getElementById(row.timesId).value;
    const countValue = parseInt(document.getElementById(row.countId).value, 10) || 0;

    // 保険料の計算
    let premium = 0;

    if (classValue === "1") { // 個人事業主
      if (planValue === "1") {
        premium = timesValue === "1" ? 4500 : 54000;
      } else if (planValue === "2") {
        premium = timesValue === "1" ? 11700 : 140400;
      }
    } else if (classValue === "2") { // 法人A
      if (planValue === "1") {
        premium = timesValue === "1" ? 26500 : 318000;
      } else if (planValue === "2") {
        premium = timesValue === "1" ? 63900 : 766800;
      }
    } else if (classValue === "3") { // 法人B
      if (planValue === "1") {
        premium = timesValue === "1" ? 22000 : 264000;
      } else if (planValue === "2") {
        premium = timesValue === "1" ? 52800 : 633600;
      }
    } else if (classValue === "4") { // 法人C
      if (planValue === "1") {
        premium = timesValue === "1" ? 10000 : 120000;
      } else if (planValue === "2") {
        premium = timesValue === "1" ? 22800 : 273600;
      }
    }

    // 行ごとの結果を更新
    const premiumResult = document.getElementById(row.resultId);
    if (premium) {
      premiumResult.textContent = `${(premium * countValue).toLocaleString()}円`;
    } else {
      premiumResult.textContent = "---";
    }
  });
}
