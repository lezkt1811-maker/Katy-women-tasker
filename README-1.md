# Women Helping Women Task Service KC — Website

A simple, fast, mobile-first one-page website for **Women Helping Women Task Service KC**, a woman-owned task-help business serving the Kansas City Northland.

This site is plain **HTML, CSS, and JavaScript** — no frameworks, no build tools, no npm. You can upload it straight to GitHub Pages and it will work.

---

## What's in this folder

```
/
  index.html    → the page content and structure
  style.css     → all colors, fonts, spacing, and layout
  script.js     → mobile menu, footer year, and the request form
  README.md     → this file
```

---

## 1. Create a GitHub repository

1. Go to [github.com](https://github.com) and log in (or create a free account).
2. Click the **+** icon in the top right → **New repository**.
3. Name it: `women-helping-women-task-service-kc`
4. Set it to **Public** (GitHub Pages on a free account requires a public repo).
5. Do **not** check "Add a README file" — you already have one.
6. Click **Create repository**.

---

## 2. Upload the files

1. On your new (empty) repository page, click **uploading an existing file**.
2. Drag and drop all four files: `index.html`, `style.css`, `script.js`, `README.md`.
3. Scroll down and click **Commit changes**.

Make sure the files sit at the **top level** of the repository — not inside a subfolder — or GitHub Pages won't find `index.html`.

---

## 3. Turn on GitHub Pages

1. In your repository, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under "Build and deployment" → **Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
5. Wait a minute or two, then refresh the page. GitHub will show you a link like:

   `https://yourusername.github.io/women-helping-women-task-service-kc/`

That link is your live website.

---

## 4. Connect Formspree (so the request form actually sends you emails)

Right now the form is wired up but not connected to anything — it will tell visitors it isn't connected yet instead of pretending to work. Here's how to fix that:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Click **New Form**, name it something like "Task Requests," and set the email address where you want submissions to arrive.
3. Formspree will give you an endpoint URL that looks like:

   `https://formspree.io/f/abcd1234`

4. Open `index.html` in a text editor and find this line (search for `YOUR_FORM_ID`):

   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

5. Replace `YOUR_FORM_ID` with the code Formspree gave you, for example:

   ```html
   action="https://formspree.io/f/abcd1234"
   ```

6. Save the file, re-upload it to GitHub (or edit it directly on GitHub.com using the pencil icon), and commit the change.
7. Formspree's free plan requires you to confirm your first submission by clicking a link in your email — send yourself a test request through the live site to activate it.

That's it. The JavaScript in `script.js` automatically detects that you've connected Formspree and will submit requests properly, showing visitors an on-page "Thank you" message instead of leaving your site.

**Note on photo uploads:** Formspree's free plan has limits on file upload size/count. If you outgrow the free plan, Formspree's paid tiers raise those limits — check their pricing page.

---

## 5. Editing the site later

### Change the business name, tagline, or any text
Open `index.html` in any text editor (Notepad, TextEdit, or a free code editor like [VS Code](https://code.visualstudio.com/)) and edit the text between the HTML tags. For example:

```html
<h1>Practical help from a capable woman you can feel comfortable welcoming into your home.</h1>
```

Just change the sentence between `<h1>` and `</h1>`.

### Change prices
Search `index.html` for the **PRICING SECTION** comment. The dollar amounts are plain text inside `<span class="price-amount">` tags and list items — edit them directly.

### Change colors
Open `style.css` and look at the very top of the file, under **DESIGN TOKENS**. All colors are defined once, like this:

```css
--color-plum:    #4A2B54;
--color-cream:   #F6F0E4;
--color-rose:    #C98A93;
--color-gold:    #B5872A;
```

Change a hex code here and it updates everywhere that color is used across the whole site.

### Change the service area
Search `index.html` for **SERVICE AREA SECTION** and edit the list of neighborhoods.

### Change contact information
Search `index.html` for **"REAL DETAILS TO FILL IN"** in the footer, near the bottom of the file. Replace the placeholder email and phone number with your real ones:

```html
<p class="footer-contact">
  Email: <a href="mailto:yourname@example.com">yourname@example.com</a><br>
  Phone: <a href="tel:+18165550123">(816) 555-0123</a>
</p>
```

Also update the placeholder canonical/Open Graph URLs near the top of `index.html` once you know your final GitHub Pages (or custom domain) address.

---

## 6. Preview the site before publishing

You don't need any special software. Just double-click `index.html` on your computer and it will open in your web browser — this lets you preview changes before uploading them. (Note: the request form won't actually submit anywhere until it's connected to Formspree and viewed on the live, published site.)

---

## 7. Connecting a custom domain later

If you'd like something like `www.womenhelpingwomentaskservicekc.com` instead of the `github.io` address:

1. Buy a domain from a registrar (Namecheap, Google Domains successor squarespace domains, GoDaddy, etc.).
2. In your domain's DNS settings, add a **CNAME** record pointing your subdomain (e.g. `www`) to `yourusername.github.io`.
3. In your repository, go to **Settings → Pages → Custom domain**, and enter your domain there. GitHub will create a `CNAME` file in your repo automatically.
4. Wait for DNS to propagate (can take a few hours) and check the **Enforce HTTPS** box once it's available.

GitHub's own guide has more detail if you hit a snag: [docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Notes

- This site does **not** invent any licenses, certifications, insurance, background checks, or customer reviews — none of that language exists anywhere in the code. If you obtain any of these in the future, you're welcome to add truthful mentions of them.
- The Schema.org structured data in `index.html` (search for `LocalBusiness`) intentionally leaves out a street address, phone number, and hours since none were provided — fill those in yourself only once you have real, confirmed details you want public.
