// 開くボタンと閉じるボタンを取得
const openButtons = document.querySelectorAll('.js-modal-open'),
  closeButtons = document.querySelectorAll('.js-modal-close');

// 「開くボタン」をクリックしてモーダルを開く
function modalOpen(event) {
  const modalId = event.currentTarget.getAttribute('data-modal'); // クリックしたボタンのdata-modal属性を取得
  const modal = document.getElementById(modalId); // 該当のモーダル要素を取得
  modal.classList.add('is-active');
}

// 全ての開くボタンに対してイベントリスナーを追加
openButtons.forEach(button => {
  button.addEventListener('click', modalOpen);
});

// 「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose(event) {
  const modal = event.currentTarget.closest('.js-modal'); // クリックしたボタンの親要素のモーダルを取得
  modal.classList.remove('is-active');
}

// 全ての閉じるボタンに対してイベントリスナーを追加
closeButtons.forEach(button => {
  button.addEventListener('click', modalClose);
});

// 「モーダルの外側」をクリックしてモーダルを閉じる
function modalOut(event) {
  const modal = document.querySelector('.js-modal.is-active');
  if (modal && event.target === modal) {
    modal.classList.remove('is-active');
  }
}
window.addEventListener('click', modalOut);

// モーダルを閉じる関数
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('is-active'); // is-active クラスを削除してモーダルを閉じる
  }
}

// button1クリック時の処理
document.querySelector('.button1').addEventListener('click', function(event) {
  event.preventDefault(); // デフォルトのリンク動作を防ぐ
  closeModal('modal1'); // モーダル1を閉じる
  setTimeout(function() {
    window.location.href = "https://kizuna-ssi.jp/agency01#05"; // 0.5秒後に指定のURLへ移動
  }, 500); // モーダルが閉じてから遷移
});


