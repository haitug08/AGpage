function calculate() {
  // 各選択肢の値を取得
  const classValue = document.getElementById("class1").value;
  const planValue = document.getElementById("plan1").value;
  const timesValue = document.getElementById("times1").value;

  // 保険料と保険金額を初期化
  let premium = 0; // 保険料
  let legalConsultationText = ""; // 法律相談料保険金テキスト
  let attorneyFeeText = ""; // 弁護士費用保険金テキスト

  // パターン別に保険料と保険金額を設定
  if (classValue === "1") { // 個人事業主
    if (planValue === "1") { // ライトプラン
      premium = timesValue === "1" ? 3000 : 35000; // 月払か年払
      legalConsultationText = "30万円・2回/年";
      attorneyFeeText = "70万円・1回/年";
    } else if (planValue === "2") { // スタンダードプラン
      premium = timesValue === "1" ? 5000 : 58000;
      legalConsultationText = "100万円・3回/年";
      attorneyFeeText = "200万円・2回/年";
    }
  } else if (classValue === "2") { // 法人A
    if (planValue === "1") {
      premium = timesValue === "1" ? 10000 : 120000;
      legalConsultationText = "150万円・3回/年";
      attorneyFeeText = "350万円・2回/年";
    } else if (planValue === "2") {
      premium = timesValue === "1" ? 15000 : 180000;
      legalConsultationText = "300万円・5回/年";
      attorneyFeeText = "700万円・3回/年";
    }
  } else if (classValue === "3") { // 法人B
    if (planValue === "1") {
      premium = timesValue === "1" ? 7000 : 80000;
      legalConsultationText = "100万円・2回/年";
      attorneyFeeText = "200万円・1回/年";
    } else if (planValue === "2") {
      premium = timesValue === "1" ? 12000 : 140000;
      legalConsultationText = "200万円・4回/年";
      attorneyFeeText = "500万円・2回/年";
    }
  } else if (classValue === "4") { // 法人C
    if (planValue === "1") {
      premium = timesValue === "1" ? 5000 : 60000;
      legalConsultationText = "50万円・1回/年";
      attorneyFeeText = "150万円・1回/年";
    } else if (planValue === "2") {
      premium = timesValue === "1" ? 8000 : 90000;
      legalConsultationText = "150万円・3回/年";
      attorneyFeeText = "350万円・2回/年";
    }
  }

  // 結果を表示
  const premiumResult = document.getElementById("premium-result");
  const legalConsultationResult = document.getElementById("legal-consultation-result");
  const attorneyFeeResult = document.getElementById("attorney-fee-result");

  if (premium) {
    premiumResult.textContent = `${premium.toLocaleString()}円/${timesValue === "1" ? "月" : "年"}`;
    legalConsultationResult.textContent = legalConsultationText;
    attorneyFeeResult.textContent = attorneyFeeText;
  } else {
    premiumResult.textContent = "---";
    legalConsultationResult.textContent = "---";
    attorneyFeeResult.textContent = "---";
  }
}
