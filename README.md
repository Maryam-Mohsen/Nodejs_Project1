# User Management System (CRUD & Filter)

## 1. Introduction
The User Management System is a lightweight, responsive web application designed to manage, track, and clean user profile data efficiently. It serves as an administrative dashboard to register new users, display details dynamic tables, modify existing records, and safely remove profiles. 

The system provides synchronous filtering capabilities, allowing seamless searches across user credentials (name/email) while enabling role-based categorization by technical specialty.

---

## 2. Main Architecture & Features

### Core CRUD Operations
*   **Create:** Dynamic user registration with integrated multi-layer validation checks.
*   **Read:** Live DOM manipulation rendering tabular user datasets instantly.
*   **Update:** Dynamic index tracking that maps selected rows back to the primary state array, allowing inline editing and changes validation.
*   **Delete:** Safe deletion mechanisms using interactive confirmation protocols to prevent operational mistakes.

### Searching & Filtering Engine
The application employs an aggregate filtering algorithm where two distinct search predicates run simultaneously:
1.  **Text Search:** Evaluates sub-string matching across multiple record fields (`Name` and `Email`), converting strings to lower case for case-insensitive accuracy.
2.  **Specialty Classification:** Employs an optional select picker (`Backend`, `Frontend`, `Fullstack`) acting as an exact-match categorical filter.

---

## 3. Data Integrity & Validation Rules

To prevent data corruption, the application enforces automated front-end validation rules prior to manipulating state records:

*   **Field Completeness Check:** Rejects any submission containing empty strings or whitespace-only inputs (`.trim()`).
*   **Email Format Validation:** Enforces syntax compliance by verifying the structural existence of key email signifiers (`@` and `.`).
*   **Age Boundary Control:** Restricts non-positive values ($Age \le 0$) to protect demographic metrics.

---

## 4. Technical Stack
*   **Frontend Interface:** Semantic HTML5 structured with isolated presentation controls.
*   **Dynamic Engine:** Native ECMAScript 6 (JavaScript) utilizing functional programming paradigms (`.filter()`, `.forEach()`, `.indexOf()`) and advanced DOM API integration.