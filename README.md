## 📘 README.md – Cypress E2E Testing for SauceDemo


![Cypress](https://img.shields.io/badge/tested%20with-Cypress-17202C?style=flat-square&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/language-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

```markdown

This project contains End-to-End (E2E) automated tests for [saucedemo.com](https://www.saucedemo.com) using Cypress. It demonstrates how to use Cypress for UI testing with best practices like the Page Object Model (POM) and custom commands.

---

## 🚀 Project Features

- 🔐 Login validation with error checking
- ✅ Successful login verification
- 🛍️ Product detail page navigation
- ♻️ Reusable test logic using **Custom Cypress Commands**
- 📦 Organized using the **Page Object Model (POM)**

---

## 🛠️ Tech Stack

- [Cypress](https://www.cypress.io/)
- JavaScript (ES6)
- Node.js

---

## 📁 Project Structure

Cypress_Project1/
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js             # ✅ Main test file
│   ├── pages/
│   │   ├── LoginPage.js            # ✅ POM: Login functionality
│   │   └── ProductsPage.js         # ✅ POM: Product page elements
│   └── support/
│       └── commands.js             # ✅ Custom Cypress commands
├── cypress.config.js               # ✅ Cypress configuration file
├── package.json                    # ✅ Project metadata and dependencies


````

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/saucedemo-cypress.git
   cd saucedemo-cypress
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Launch Cypress Test Runner:

   ```bash
   npx cypress open
   ```

---

## 🧪 How to Run Tests

Choose `login.cy.js` from the Cypress Test Runner interface. The test performs:

* ❌ Invalid login with error message verification
* ✅ Valid login with landing page check
* 🔍 Clicking on the first product and checking product detail page

---

## 🧠 Concepts Demonstrated

* **Custom Commands:** Added in `commands.js` to simplify login reuse.
* **Page Object Model (POM):** All selectors and functions separated into clean, reusable classes.
* **Assertions:** Used `.should()` for validation of app behavior.

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/ef5b12e2-325f-441a-9dbc-e33db56e5066)
![image](https://github.com/user-attachments/assets/88476fb0-9843-4a7c-a6fd-f0eaae4e530a)
![image](https://github.com/user-attachments/assets/f2031b0a-574a-4a1b-87d4-58a94c75d2d9)
![image](https://github.com/user-attachments/assets/31e277cb-4d42-4005-a1f5-b42df4b1f203)



---

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to open a pull request.

---

## 📝 License

This project is for educational purposes only and is not affiliated with saucedemo.com.

---

## 🙋‍♀️ Author

* 💻 **Mahnoor Asif** 

```
---

