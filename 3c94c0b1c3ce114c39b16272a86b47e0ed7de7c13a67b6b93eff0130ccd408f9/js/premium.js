function calculate() {
  // 各選択肢の値を取得
  const classValue = document.getElementById("class1").value;
  const planValue = document.getElementById("plan1").value;
  const timesValue = document.getElementById("times1").value;

  // 保険料と保険金額を初期化
  let premium = 0; // 保険料
  let coverage = 0; // 保険金額

  // パターン別に保険料と保険金額を設定
  if (classValue === "1") { // 個人事業主
    if (planValue === "1") { // ライトプラン
      premium = timesValue === "1" ? 3000 : 35000; // 月払か年払
      coverage = 1000000;
    } else if (planValue === "2") { // スタンダードプラン
      premium = timesValue === "1" ? 5000 : 58000;
      coverage = 3000000;
    }
  } else if (classValue === "2") { // 法人A
    if (planValue === "1") {
      premium = timesValue === "1" ? 10000 : 120000;
      coverage = 5000000;
    } else if (planValue === "2") {
      premium = timesValue === "1" ? 15000 : 180000;
      coverage = 10000000;
    }
  } else if (classValue === "3") { // 法人B
    if (planValue === "1") {
      premium = timesValue === "1" ? 7000 : 80000;
      coverage = 3000000;
    } else if (planValue === "2") {
      premium = timesValue === "1" ? 12000 : 140000;
      coverage = 7000000;
    }
  } else if (classValue === "4") { // 法人C
    if (planValue === "1") {
      premium = timesValue === "1" ? 5000 : 60000;
      coverage = 2000000;
    } else if (planValue === "2") {
      premium = timesValue === "1" ? 8000 : 90000;
      coverage = 5000000;
    }
  }

  // 結果を表示
  const premiumCell = document.querySelector("table.ta1:nth-of-type(2) tr:nth-of-type(1) td");
  const coverageCell = document.querySelector("table.ta1:nth-of-type(2) tr:nth-of-type(2) td");

  if (premium && coverage) {
    premiumCell.textContent = `¥${premium.toLocaleString()}`;
    coverageCell.textContent = `¥${coverage.toLocaleString()}`;
  } else {
    premiumCell.textContent = "---";
    coverageCell.textContent = "---";
  }
}
