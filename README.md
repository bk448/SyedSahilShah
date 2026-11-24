# US Expat Tax Services Website (Next.js + TypeScript)

A modern, high-converting marketing website and secure Client Portal for US cross-border expat tax compliance. Designed with a clean, simple UI, robust templated content architecture, and Edge-compatible authentication built for smooth zero-config deployment on **Vercel**.

---

## 🚀 Quick Start

### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
```bash
npm run build
npm run start
```

---

## 🔐 Vercel-Ready Authentication & Client Portal

This project uses an Edge-runtime compatible, encrypted JWT session cookie architecture via `jose`, making authentication work smoothly on Vercel with zero database setup required for demo testing.

### Demo Logins (1-Click or Manual on `/login`):
* **Expat Client Portal:**
  * **Email:** `client@expat-tax.com`
  * **Password:** `demo123`
  * **Features:** 4-stage tax return milestone tracker, required documents checklist, assigned CPA info, and direct message scheduling.
* **CPA Advisor Portal:**
  * **Email:** `cpa@expat-tax.com`
  * **Password:** `demo123`
* **Custom Sign-in:** Any email with a password of 6+ characters will also authenticate and provision a temporary client session.

### Route Protection:
* `src/middleware.ts` runs on the Vercel Edge Runtime to protect `/portal/:path*`.
* Unauthenticated visitors are automatically redirected to `/login?callbackUrl=/portal`.

---

## 📂 Site Architecture & Templates

* **Practice Divisions (`/divisions/[slug]`):**
  * Accidental Americans & Catch-up Filers (`/divisions/accidental-americans`)
  * Expat Individuals & Families (`/divisions/individuals-families`)
  * Business Owners Abroad (`/divisions/business-owners`)
  * Green Card Holders Abroad (`/divisions/green-card-holders`)
  * Moving Abroad & Returning (`/divisions/moving-and-returning`)
  * Private Client & Foreign Trusts (`/divisions/private-client`)
* **Services Hub & Detail Pages (`/services` & `/services/[slug]`):**
  * Grouped by Annual Compliance, Streamlined Amnesty, CFC/GILTI Business, and Foreign Trusts.
* **Forms Directory (`/forms` & `/forms/[slug]`):**
  * Detailed breakdowns for Form 1040, FinCEN 114 (FBAR), Form 8938 (FATCA), Form 2555 (FEIE), Form 1116 (FTC), Form 5471 (CFC), Form 8621 (PFIC), and Form 3520 (Trusts/Gifts).
  * Prominent penalty callouts (e.g. $10,000+ fines).
* **Country Tax Guides (`/countries` & `/countries/[slug]`):**
  * 16 expat countries including UK, Canada, Australia, Germany, Singapore, and Japan.
  * Details US treaty position, local retirement account treatments (SIPPs, Super, RRSP/TFSA), local vs US deadlines, and PFIC traps.
* **Deadlines Calendar (`/deadlines`):**
  * Expat-specific calendar (April 15, June 15 automatic expat extension, October 15 extension, December 15 discretionary).
* **Interactive Lead Capture:**
  * **Book a Consultation (`/book-consultation`):** Browser timezone auto-detection, local time slot picker, situation dropdown, and international phone input.
  * **Request a Quote (`/request-quote`):** Multi-step tax qualification (years delinquent, foreign bank balance tier, entity ownership).

---

## ⚖️ Legal & Compliance Inclusions

* **IRS Circular 230 Disclosure:** Global header banner and footer disclosure compliant with Treasury regulations.
* **GDPR & UK GDPR Cookie Consent:** Non-intrusive consent banner with essential cookie option.
* **Anti-Sensitive Data Notice:** Disclaimers on forms warning users never to submit SSNs, ITINs, or bank account numbers via marketing forms.

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In the Vercel dashboard, click **Add New Project** and import the repository.
3. Next.js will be auto-detected.
4. (Optional) Set the environment variable:
   * `AUTH_SECRET`: A custom string for JWT signing (a secure fallback is included).
5. Click **Deploy**. Both the static pages and the edge-authenticated `/portal` routes will run immediately.

# SyedSahilShah
