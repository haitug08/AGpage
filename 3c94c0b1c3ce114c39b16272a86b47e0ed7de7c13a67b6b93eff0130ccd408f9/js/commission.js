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
  const rows = 4; // 行数
  let totalPremium = 0;
  let totalCommission = 0;

  // 継続期間の取得
  const continuityPeriod = parseInt(document.querySelector('select[name="continuation-period"]').value, 10) || 12; // デフォルトは12か月
  
  let continuityCommission = 0;
  let continuityCommissionTax = 0;

  for (let i = 1; i <= rows; i++) {
    const premium = parseInt(document.getElementById(`premium-result${i}`).textContent.replace(/[^0-9]/g, ""), 10) || 0;
    const count = parseInt(document.getElementById(`count${i}`).value, 10) || 0;
    const classValue = document.getElementById(`class${i}`).value;
    const planValue = document.getElementById(`plan${i}`).value;

    let rowCommission = 0;

    // 区分が個人事業主の場合
    if (classValue === "1") {
      if (planValue === "1") {
        rowCommission = count * 5000; // ライト: 1件5000円
      } else if (planValue === "2") {
        rowCommission = count * 10000; // スタンダード: 1件10000円
      }
    } else {
      // 他の区分の場合は保険料 × 30%
      rowCommission = premium * count * 0.3;
    }

    const rowTotal = premium * count;

    // 非表示フィールドに計算結果を設定
    document.getElementById(`total${i}`).value = rowTotal;

    // 保険料の合計を加算
    totalPremium += rowTotal;

    // 手数料の合計を加算
    totalCommission += rowCommission;

    // 継続期間の手数料計算
    if (classValue === "1") {
      continuityCommission += rowCommission * continuityPeriod; // 個人事業主
    } else {
      const perMonthPremium = premium * count;
      const perMonthCommission = perMonthPremium * 0.3;
      continuityCommission += perMonthCommission * continuityPeriod; // 法人
    }
  }

  // 消費税を計算
  const taxRate = 0.1; // 消費税10%
  const totalCommissionTax = totalCommission * (1 + taxRate);

  // 保険料合計を表示
  document.getElementById("total-premium").textContent = totalPremium > 0 ? `${totalPremium.toLocaleString()}円` : "---";

  // 手数料合計を表示
  document.getElementById("total-commission").textContent = totalCommission > 0 ? `${totalCommission.toLocaleString()}円` : "---";

  // 手数料合計（税込）を表示
  document.getElementById("total-commission-tax").textContent = totalCommissionTax > 0 ? `${totalCommissionTax.toLocaleString()}円` : "---";

  // 継続期間の手数料合計（税込）を表示
  continuityCommissionTax = continuityCommission * (1 + taxRate);
  document.getElementById("continuation-commission-tax").textContent = continuityCommissionTax > 0 ? `${continuityCommissionTax.toLocaleString()}円` : "---";
}
