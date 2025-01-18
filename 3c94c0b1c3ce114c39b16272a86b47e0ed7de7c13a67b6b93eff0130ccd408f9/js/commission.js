function calculate(index) {
  // 各選択肢の値を取得
  const classValue = document.getElementById(`class${index}`).value;
  const planValue = document.getElementById(`plan${index}`).value;
  const timesValue = document.getElementById(`times${index}`).value;

  // 保険料の設定用オブジェクト
  const premiums = {
    "1": { // 個人事業主
      "1": { "1": 4500, "2": 54000 }, // ライトプラン
      "2": { "1": 11700, "2": 140400 } // スタンダードプラン
    },
    "2": { // 法人A
      "1": { "1": 26500, "2": 318000 },
      "2": { "1": 63900, "2": 766800 }
    },
    "3": { // 法人B
      "1": { "1": 22000, "2": 264000 },
      "2": { "1": 52800, "2": 633600 }
    },
    "4": { // 法人C
      "1": { "1": 10000, "2": 120000 },
      "2": { "1": 22800, "2": 273600 }
    }
  };

  // 保険料を取得
  const premium = premiums[classValue]?.[planValue]?.[timesValue] || 0;

  // 結果を表示
  const premiumResult = document.getElementById(`premium-result${index}`);
  if (premium) {
    premiumResult.textContent = `${premium.toLocaleString()}円/${timesValue === "1" ? "月" : "年"}`;
  } else {
    premiumResult.textContent = "---";
  }
}

function updateTotal() {
  // 各行の保険料単価と獲得件数を取得して計算
  const rows = 4; // 行数
  let totalPremium = 0;

  for (let i = 1; i <= rows; i++) {
    const premium = parseInt(document.getElementById(`premium-result${i}`).textContent.replace(/[^0-9]/g, ""), 10) || 0;
    const count = parseInt(document.getElementById(`count${i}`).value, 10) || 0;
    const rowTotal = premium * count;

    // 非表示フィールドに計算結果を設定
    document.getElementById(`total${i}`).value = rowTotal;

    // 合計を加算
    totalPremium += rowTotal;
  }

  // 合計を表示
  document.getElementById("total-premium").textContent = totalPremium > 0 ? `${totalPremium.toLocaleString()}円` : "---";
}

