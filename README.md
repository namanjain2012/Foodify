# Foodify

**Foodify — A client-side food-ordering demo (HTML / CSS / JavaScript)**

## 📖 Short Description
Foodify is a lightweight client-side food/menu demo built with plain HTML, CSS, and JavaScript.  
The app displays products from `products.json`, allows adding items to a cart, and includes a mocked
client-side payment flow (`payments.js`).  
It’s suitable as a prototype or a starter frontend for a food-ordering service.

---

## 📂 Project Structure
```
Foodify/
├── index.html          # Entry point
├── style.css           # Styling
├── main.js             # Main app logic (render, cart, events)
├── payments.js         # Mock payment flow
├── products.json       # Product/menu data
├── Images/             # Images for UI and products
└── .vscode/            # VS Code workspace settings
```

---

## ✨ Features
- Client-side product listing powered by `products.json`  
- Add-to-cart and cart summary  
- Mocked payment flow handled in `payments.js`  
- Static, dependency-free frontend (no backend required to view)  

---

## 🛠️ Tech Stack
- **HTML5**  
- **CSS3**  
- **JavaScript (vanilla)**  
- **Static assets** (JSON + images)  

---

## 🚀 How to Run

Because this is a static site, you should use a local server to avoid `fetch()` restrictions when loading `products.json`.

### Option 1 — Python HTTP Server
```bash
cd Foodify
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2 — Node.js Serve
```bash
npm install -g serve
serve .
```

### Option 3 — Open File Directly
Double-click `index.html`.  
⚠️ Note: Some browsers block `fetch('products.json')` when opening directly.  
A local server is recommended.

---

## 🔒 Security Note
Payments implemented purely client-side are insecure and for demo purposes only.  
Do **not** process real payments without moving payment logic to a secure backend and using a trusted payment provider.

---

## 🤝 Contributing
Pull requests and suggestions are welcome!  
For major changes, please open an issue to discuss what you’d like to change.

---

## 📜 License
This project currently does not specify a license.  
If you intend others to use or contribute, please add an open-source license (e.g., MIT).
