function calculate1() {
  // 各選択肢の値を取得
  const classValue = document.getElementById("class1").value;
  const planValue = document.getElementById("plan1").value;
  const timesValue = document.getElementById("times1").value;

  // 保険料と保険金額を初期化
  let premium = 0; // 保険料

  // パターン別に保険料を設定
  if (classValue === "1") { // 個人事業主
    if (planValue === "1") { // ライトプラン
      premium = timesValue === "1" ? 4500 : 54000; // 月払か年払
    } else if (planValue === "2") { // スタンダードプラン
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

  // 結果を表示
  const premiumResult = document.getElementById("premium-result1");

  if (premium) {
    premiumResult.textContent = `${premium.toLocaleString()}円/${timesValue === "1" ? "月" : "年"}`;
  } else {
    premiumResult.textContent = "---";
  }
}

function calculate2() {
  // 各選択肢の値を取得
  const classValue = document.getElementById("class2").value;
  const planValue = document.getElementById("plan2").value;
  const timesValue = document.getElementById("times2").value;

  // 保険料と保険金額を初期化
  let premium = 0; // 保険料

  // パターン別に保険料を設定
  if (classValue === "1") { // 個人事業主
    if (planValue === "1") { // ライトプラン
      premium = timesValue === "1" ? 4500 : 54000; // 月払か年払
    } else if (planValue === "2") { // スタンダードプラン
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

  // 結果を表示
  const premiumResult = document.getElementById("premium-result2");

  if (premium) {
    premiumResult.textContent = `${premium.toLocaleString()}円/${timesValue === "1" ? "月" : "年"}`;
  } else {
    premiumResult.textContent = "---";
  }
}

function calculate3() {
  // 各選択肢の値を取得
  const classValue = document.getElementById("class3").value;
  const planValue = document.getElementById("plan3").value;
  const timesValue = document.getElementById("times3").value;

  // 保険料と保険金額を初期化
  let premium = 0; // 保険料

  // パターン別に保険料を設定
  if (classValue === "1") { // 個人事業主
    if (planValue === "1") { // ライトプラン
      premium = timesValue === "1" ? 4500 : 54000; // 月払か年払
    } else if (planValue === "2") { // スタンダードプラン
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

  // 結果を表示
  const premiumResult = document.getElementById("premium-result3");

  if (premium) {
    premiumResult.textContent = `${premium.toLocaleString()}円/${timesValue === "1" ? "月" : "年"}`;
  } else {
    premiumResult.textContent = "---";
  }
}

function calculate4() {
  // 各選択肢の値を取得
  const classValue = document.getElementById("class4").value;
  const planValue = document.getElementById("plan4").value;
  const timesValue = document.getElementById("times4").value;

  // 保険料と保険金額を初期化
  let premium = 0; // 保険料

  // パターン別に保険料を設定
  if (classValue === "1") { // 個人事業主
    if (planValue === "1") { // ライトプラン
      premium = timesValue === "1" ? 4500 : 54000; // 月払か年払
    } else if (planValue === "2") { // スタンダードプラン
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

  // 結果を表示
  const premiumResult = document.getElementById("premium-result4");

  if (premium) {
    premiumResult.textContent = `${premium.toLocaleString()}円/${timesValue === "1" ? "月" : "年"}`;
  } else {
    premiumResult.textContent = "---";
  }
}
