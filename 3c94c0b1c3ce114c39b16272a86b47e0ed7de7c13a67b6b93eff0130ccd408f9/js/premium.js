function calculate() {
  // 各選択肢の値を取得
  const classValue = document.getElementById("class1").value;
  const planValue = document.getElementById("plan1").value;
  const timesValue = document.getElementById("times1").value;

  // 保険料と保険金額を初期化
  let premium = 0; // 保険料
  let legalConsultationCoverage = 0; // 法律相談料保険金
  let attorneyFeeCoverage = 0; // 弁護士費用保険金

  // パターン別に保険料と保険金額を設定
  if (classValue === "1") { // 個人事業主
    if (planValue === "1") { // ライトプラン
      premium = timesValue === "1" ? 3000 : 35000; // 月払か年払
      legalConsultationCoverage = 300000;
      attorneyFeeCoverage = 700000;
    } else if (planValue === "2") { // スタンダードプラン
      premium = timesValue === "1" ? 5000 : 58000;
      legalConsultationCoverage = 1000000;
      attorneyFeeCoverage = 2000000;
    }
  } else if (classValue === "2") { // 法人A
    if (planValue === "1") {
      premium = timesValue === "1" ? 10000 : 120000;
      legalConsultationCoverage = 1500000;
      attorneyFeeCoverage = 3500000;
    } else if (planValue === "2") {
      premium = timesValue === "1" ? 15000 : 180000;
      legalConsultationCoverage = 3000000;
      attorneyFeeCoverage = 7000000;
    }
  } else if (classValue === "3") { // 法人B
    if (planValue === "1") {
      premium = timesValue === "1" ? 7000 : 80000;
      legalConsultationCoverage = 1000000;
      attorneyFeeCoverage = 2000000;
    } else if (planValue === "2") {
      premium = timesValue === "1" ? 12000 : 140000;
      legalConsultationCoverage = 2000000;
      attorneyFeeCoverage = 5000000;
    }
  } else if (classValue === "4") { // 法人C
    if (planValue === "1") {
      premium = timesValue === "1" ? 5000 : 60000;
      legalConsultationCoverage = 500000;
      attorneyFeeCoverage = 1500000;
    } else if (planValue === "2") {
      premium = timesValue === "1" ? 8000 : 90000;
      legalConsultationCoverage = 1500000;
      attorneyFeeCoverage = 3500000;
    }
  }

  // 結果を表示
  const premiumResult = document.getElementById("premium-result");
  const legalConsultationResult = document.getElementById("legal-consultation-result");
  const attorneyFeeResult = document.getElementById("attorney-fee-result");

  if (premium) {
    premiumResult.textContent = `¥${premium.toLocaleString()}`;
    legalConsultationResult.textContent = `¥${legalConsultationCoverage.toLocaleString()}`;
    attorneyFeeResult.textContent = `¥${attorneyFeeCoverage.toLocaleString()}`;
  } else {
    premiumResult.textContent = "---";
    legalConsultationResult.textContent = "---";
    attorneyFeeResult.textContent = "---";
  }
}

