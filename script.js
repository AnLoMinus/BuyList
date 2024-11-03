let totalAmount = 0;

const categories = {
  "🥬 ירקות": [
    "🍅 עגבנייה",
    "🥒 מלפפון",
    "🥕 גזר",
    "🧅 בצל",
    "🧄 שום",
    "🫑 פלפל אדום",
    "🫑 פלפל ירוק",
    "🥔 תפוח אדמה",
    "🍠 בטטה",
    "🥒 קישוא",
    "🥬 חסה",
    "🥬 כרוב",
    "🥦 ברוקולי",
    "🥦 כרובית",
    "🍄 פטריות",
    "🌱 שומר",
    "🫑 גמבה",
    "🥬 סלק",
    "🥬 תרד",
  ],
  "🍎 פירות": [
    "🍎 תפוח",
    "🍌 בננה",
    "🍊 תפוז",
    "🍊 קלמנטינה",
    "🍑 אפרסק",
    "🍐 אגס",
    "🍇 ענבים",
    "🍍 אננס",
    "🍓 תותים",
    "🍎 רימון",
    "🥭 מנגו",
    "🍉 אבטיח",
    "🍈 מלון",
    "🥝 קיווי",
    "🍑 שזיף",
    "🍈 פאפאיה",
    "🍊 פומלה",
    "🌴 תמרים",
  ],
  "🥩 בשרים": [
    "🍗 עוף",
    "🥩 בקר",
    "🍖 כבש",
    "🍗 חזה עוף",
    "🍗 שוקיים",
    "🍗 כנפיים",
    "🥩 סטייק",
    "🍗 שניצל",
    "🍖 קציצות",
    "🥩 טחון בקר",
    "🌭 נקניקיות",
    "🥩 בשר טחון",
    "🍗 פרגיות",
    "🥩 סינטה",
    "🥩 אנטריקוט",
    "🥩 אסאדו",
  ],
  "🐟 דגים": [
    "🐟 סלמון",
    "🐟 טונה",
    "🐟 דג ים",
    "🐟 בורי",
    "🐟 ברמונדי",
    "🐟 דניס",
    "🐟 לוקוס",
    "🐟 מוסר",
    "🐟 אמנון",
    "🐟 סרדינים",
    "🐟 פילה דג",
    "🐟 קרפיון",
    "🐟 דג קוד",
    "🐟 סלמון מעושן",
    "🐟 מקרל",
  ],
  "🥛 מוצרי חלב": [
    "🥛 חלב",
    "🧈 חמאה",
    "🥛 יוגורט",
    "🥛 שמנת מתוקה",
    "🥛 שמנת חמוצה",
    "🧀 גבינת קוטג'",
    "🧀 גבינה לבנה",
    "🧀 גבינה צהובה",
    "🧀 גבינת פטה",
    "🧀 גבינת ריקוטה",
    "🥛 קצפת",
    "🥛 קפיר",
    "🧀 גבינת גאודה",
    "🧀 גבינת ברי",
  ],
  "🥖 מוצרי אפייה": [
    "🍞 לחם",
    "🥖 חלה",
    "🥖 לחמניות",
    "🫓 פיתות",
    "🫓 טורטיות",
    "🥨 קרקרים",
    "🍰 עוגות",
    "🍪 עוגיות",
    "🥨 בייגלה",
    "🥐 קרואסון",
    "🥐 מאפה חמאה",
    "🥐 בריוש",
    "🥟 בצק עלים",
    "🫓 בצק פיצה",
    "🍞 לחם שיפון",
    "🍞 לחם מלא",
  ],
  "❄️ מוצרים קפואים": [
    "🍕 פיצה קפואה",
    "🍗 שניצל קפוא",
    "🍔 המבורגר קפוא",
    "🥬 ירקות קפואים",
    "🍟 צ'יפס קפוא",
    "🧆 פלאפל קפוא",
    "🥟 בצק עלים קפוא",
    "🥐 מאפים קפואים",
    "🍎 פירות קפואים",
    "🐟 דגים קפואים",
    "🍨 גלידה",
    "🍦 ארטיקים",
    "🍨 סורבה",
  ],
  "🥫 מוצרים יבשים": [
    "🍚 אורז",
    "🍝 פסטה",
    "🥘 קוסקוס",
    "🫘 חומוס יבש",
    "🫘 עדשים",
    "🥜 שקדים",
    "🌰 אגוזי מלך",
    "🥜 קשיו",
    "🥜 פיסטוקים",
    "🌱 גרעינים",
    "🌾 קמח",
    "🧂 סוכר",
    "🥣 שיבולת שועל",
    "🧂 תבלינים",
    "🫘 קטניות",
    "🥫 חומוס משומר",
  ],
  "🥤 משקאות": [
    "💧 מים מינרליים",
    "🍊 מיץ תפוזים",
    "🍷 יין",
    "🍺 בירה",
    "🥃 וודקה",
    "🥤 קולה",
    "🥤 ספרייט",
    "🍇 מיץ ענבים",
    "🧊 תה קר",
    "🧃 מיץ טבעי",
    "☕ קפה",
    "🫖 תה",
    "🥛 שוקו",
    "🥤 משקאות אנרגיה",
    "🍎 סיידר תפוחים",
  ],
  "🍫 חטיפים וממתקים": [
    "🥨 ביסלי",
    "🥜 במבה",
    "🍫 שוקולד",
    "🍪 עוגיות",
    "🍬 סוכריות",
    "🥜 חטיפי גרנולה",
    "🍫 חטיפי אנרגיה",
    "🥨 קרקרים",
    "🍬 דובונים",
    "🍬 גומי",
    "🍫 חטיפי שוקולד",
    "🍬 טופי",
    "🥜 אגוזים מצופים",
    "🍬 מרשמלו",
    "🍫 שוקולד מריר",
    "🌴 חטיפי תמרים",
  ],
  "🧹 מוצרי ניקוי": [
    "🧴 סבון כלים",
    "🧹 מטליות",
    "🧴 מרכך כביסה",
    "🧴 אבקת כביסה",
    "🧴 מסיר שומנים",
    "🧻 נייר סופג",
    "🧻 מגבונים לחים",
    "🧹 מטליות ניקוי",
    "🗑️ שקיות אשפה",
    "🧴 נוזל ניקוי רצפות",
    "🧴 חומרי ניקוי חלונות",
    "🧴 סבון ידיים",
    "🧤 כפפות חד פעמיות",
    "🚽 נוזל ניקוי אסלות",
    "🧴 חומרי ניקוי רב שימושיים",
  ],
  "🧴 טואלטיקה": [
    "🦷 משחת שיניים",
    "🪥 מברשות שיניים",
    "🧻 מגבונים",
    "🧴 סבון גוף",
    "🧴 שמפו",
    "🧴 מרכך שיער",
    "🧻 תחבושות היגייניות",
    "🧴 דאודורנט",
    "🧻 נייר טואלט",
    "🧴 תחליב לחות",
    "🧴 קרם ידיים",
    "🧴 ג'ל רחצה",
    "🪒 מכונת גילוח",
    "🧴 קרם שיער",
    "🧴 משחת גילוח",
  ],
  "👶 מוצרי תינוקות": [
    "🧷 טיטולים",
    "🧻 מגבונים לתינוקות",
    "🍼 בקבוקים",
    "🥛 תחליפי חלב",
    "🍼 מוצצים",
    "🧴 שמפו לתינוק",
    "🧴 קרם החתלה",
    "🧤 כפפות לתינוקות",
    "🧦 גרביים לתינוקות",
    "🌡️ מדחום",
    "🧴 סבון עדין לתינוקות",
  ],
};

function populateCategories() {
  const categoryInput = document.getElementById("categoryInput");
  for (let category in categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryInput.appendChild(option);
  }
}

function populateItems() {
  const category = document.getElementById("categoryInput").value;
  const itemInput = document.getElementById("itemInput");
  itemInput.innerHTML = '<option value="">בחר פריט</option>';

  if (category && categories[category]) {
    categories[category].forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      itemInput.appendChild(option);
    });
  }
}

function addItem() {
  const category = document.getElementById("categoryInput").value;
  const item = document.getElementById("itemInput").value;
  const price = parseFloat(document.getElementById("priceInput").value);
  const quantity = parseInt(document.getElementById("quantityInput").value);

  if (!category || !item || isNaN(price) || isNaN(quantity)) {
    showAlert("אנא מלא את כל השדות לפני הוספה.");
    return;
  }

  hideAlert();

  const table = document.getElementById("shoppingTable").querySelector("tbody");
  const row = table.insertRow();
  row.insertCell(0).textContent = category;
  row.insertCell(1).textContent = item;
  row.insertCell(2).textContent = price.toFixed(2);
  row.insertCell(3).textContent = quantity;
  const totalPrice = (price * quantity).toFixed(2);
  row.insertCell(4).textContent = totalPrice;
  totalAmount += parseFloat(totalPrice);

  const deleteCell = row.insertCell(5);
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.onclick = () => {
    totalAmount -= parseFloat(totalPrice);
    row.remove();
    updateTotal();
    saveToLocalStorage();
  };
  deleteCell.appendChild(deleteButton);

  updateTotal();
  clearInputs();
  saveToLocalStorage();
}

function showAlert(message) {
  const alert = document.getElementById("alert");
  alert.textContent = message;
  alert.style.display = "block";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}

function hideAlert() {
  document.getElementById("alert").style.display = "none";
}

function clearInputs() {
  document.getElementById("categoryInput").value = "";
  document.getElementById("itemInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("quantityInput").value = "1";
}

function updateTotal() {
  const totalElement = document.getElementById("total");
  totalElement.textContent = `סכום כולל: ₪${totalAmount.toFixed(2)}`;
  totalElement.style.color = totalAmount > 1000 ? "red" : "inherit";
}

function applyDiscount() {
  const discount = parseFloat(document.getElementById("discountInput").value);
  if (!isNaN(discount) && discount > 0 && discount <= 100) {
    const discountAmount = totalAmount * (discount / 100);
    const newTotal = totalAmount - discountAmount;
    document.getElementById(
      "total"
    ).textContent = `סכום כולל אחרי הנחה: ₪${newTotal.toFixed(2)}`;
  } else {
    alert("הזן אחוז הנחה תקין בין 0 ל-100.");
  }
}

function copyInvoice() {
  let textToCopy = "רשימת קניות:\n";
  const rows = document.querySelectorAll("#shoppingTable tbody tr");
  rows.forEach((row) => {
    const columns = row.querySelectorAll("td");
    textToCopy += `${columns[1].textContent}: ₪${columns[2].textContent} x ${columns[3].textContent} = ₪${columns[4].textContent}\n`;
  });
  textToCopy += document.getElementById("total").textContent;
  navigator.clipboard.writeText(textToCopy);
  alert("החשבונית הועתקה!");
}

function sendWhatsApp() {
  let textToSend = "רשימת קניות:\n";
  const rows = document.querySelectorAll("#shoppingTable tbody tr");
  rows.forEach((row) => {
    const columns = row.querySelectorAll("td");
    textToSend += `${columns[1].textContent}: ₪${columns[2].textContent} x ${columns[3].textContent} = ₪${columns[4].textContent}\n`;
  });
  textToSend += document.getElementById("total").textContent;
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    textToSend
  )}`;
  window.open(whatsappURL, "_blank");
}

function clearAll() {
  totalAmount = 0;
  document.querySelector("#shoppingTable tbody").innerHTML = "";
  updateTotal();
}

function searchItem() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#shoppingTable tbody tr");
  rows.forEach((row) => {
    const item = row.querySelectorAll("td")[1].textContent.toLowerCase();
    if (item.includes(searchTerm)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

function saveToLocalStorage() {
  const items = [];
  const rows = document.querySelectorAll("#shoppingTable tbody tr");
  rows.forEach((row) => {
    const columns = row.querySelectorAll("td");
    items.push({
      category: columns[0].textContent,
      item: columns[1].textContent,
      price: columns[2].textContent,
      quantity: columns[3].textContent,
      total: columns[4].textContent,
    });
  });
  localStorage.setItem("shoppingList", JSON.stringify(items));
}

function loadFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("shoppingList")) || [];
  items.forEach((item) => {
    const table = document
      .getElementById("shoppingTable")
      .querySelector("tbody");
    const row = table.insertRow();
    row.insertCell(0).textContent = item.category;
    row.insertCell(1).textContent = item.item;
    row.insertCell(2).textContent = item.price;
    row.insertCell(3).textContent = item.quantity;
    row.insertCell(4).textContent = item.total;
    totalAmount += parseFloat(item.total);

    const deleteCell = row.insertCell(5);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.onclick = () => {
      totalAmount -= parseFloat(item.total);
      row.remove();
      updateTotal();
      saveToLocalStorage();
    };
    deleteCell.appendChild(deleteButton);
  });
  updateTotal();
}

function sendToNumber() {
  const phoneNumber = document.getElementById("phoneInput").value;
  if (phoneNumber.length === 10 && /^\d+$/.test(phoneNumber)) {
    const textToSend = generateInvoiceText();
    const whatsappURL = `https://api.whatsapp.com/send?phone=972${phoneNumber.substring(
      1
    )}&text=${encodeURIComponent(textToSend)}`;
    window.open(whatsappURL, "_blank");
  } else {
    alert("נא להזין מספר טלפון תקין (10 ספרות)");
  }
}

function generateInvoiceText() {
  let textToSend = "רשימת קניות:\n";
  const rows = document.querySelectorAll("#shoppingTable tbody tr");
  rows.forEach((row) => {
    const columns = row.querySelectorAll("td");
    textToSend += `${columns[1].textContent}: ₪${columns[2].textContent} x ${columns[3].textContent} = ₪${columns[4].textContent}\n`;
  });
  textToSend += document.getElementById("total").textContent;
  return textToSend;
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  populateCategories();
  loadFromLocalStorage();
});
