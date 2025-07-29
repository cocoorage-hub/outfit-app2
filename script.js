// トップスとボトムスの配列（今後のコーデ提案用）
let tops = [];
let bottoms = [];

// トップスを追加
function addTop() {
const input = document.getElementById('topInput');
if (input.value) {
tops.push(input.value);
updateList('topList', tops);
input.value = '';
}
}

// ボトムスを追加
function addBottom() {
const input = document.getElementById('bottomInput');
if (input.value) {
bottoms.push(input.value);
updateList('bottomList', bottoms);
input.value = '';
}
}

// リストを更新
function updateList(listId, items) {
const ul = document.getElementById(listId);
ul.innerHTML = '';
items.forEach(item => {
const li = document.createElement('li');
li.textContent = item;
ul.appendChild(li);
});
}

// コーデを提案
function suggestOutfit() {
if (tops.length === 0 || bottoms.length === 0) {
alert('トップスとボトムスを両方追加してください');
return;
}

const top = tops[Math.floor(Math.random() * tops.length)];
const bottom = bottoms[Math.floor(Math.random() * bottoms.length)];

const resultArea = document.getElementById('resultArea');
resultArea.innerHTML = `👕 今日のコーデ：<br>トップス → ${top}<br>ボトムス → ${bottom}`;
}

// 画像を選択したときにプレビュー＋保存
document.getElementById('imageInput').addEventListener('change', function(event) {
const file = event.target.files[0];
if (file && file.type.startsWith('image/')) {
const reader = new FileReader();
reader.onload = function(e) {
const imageData = e.target.result;
document.getElementById('preview').src = imageData;

// 🔽 画像をローカルストレージに保存
localStorage.setItem('savedImage', imageData);
};
reader.readAsDataURL(file);
}
});

// ページを開いたときに保存された画像を表示
window.addEventListener('load', function() {
const savedImage = localStorage.getItem('savedImage');
if (savedImage) {
document.getElementById('preview').src = savedImage;
}
});
