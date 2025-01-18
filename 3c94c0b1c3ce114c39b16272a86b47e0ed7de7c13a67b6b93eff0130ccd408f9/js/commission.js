function calculate() {
  const rows = [
    { classId: "class1", planId: "plan1", timesId: "times1", resultId: "premium-result-1", countId: "" },
    { classId: "class2", planId: "plan2", timesId: "times2", resultId: "premium-result-2", countId: "" },
    { classId: "class3", planId: "plan3", timesId: "times3", resultId: "premium-result-3", countId: "" },
    { classId: "class4", planId: "plan4", timesId: "times4", resultId: "premium-result-4", countId: "" },
  ];

  rows.forEach(row => {
    const classValue = document.getElementById(row.classId)?.value;
    const planValue = document.getElementById(row.planId)?.value;
    const timesValue = document.getElementById(row.timesId)?.value;

    let premium = 0;

    if (classValue === "1") {
      premium = planValue === "1" ? (timesValue === "1" ? 4500 : 54000) : (timesValue === "1" ? 11700 : 140400);
    } else if (classValue === "2") {
      premium = planValue === "1" ? (timesValue === "1" ? 26500 : 318000) : (timesValue === "1" ? 63900 : 766800);
    } else if (classValue === "3") {
      premium = planValue === "1" ? (timesValue === "1" ? 22000 : 264000) : (timesValue === "1" ? 52800 : 633600);
    } else if (classValue === "4") {
      premium = planValue === "1" ? (timesValue === "1" ? 10000 : 120000) : (timesValue === "1" ? 22800 : 273600);
    }

    const premiumResult = document.getElementById(row.resultId);
    premiumResult.textContent = premium ? `${premium.toLocaleString()}円` : "---";
  });
}
