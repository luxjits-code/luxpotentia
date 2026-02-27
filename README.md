# Lux Potentia Website

A static website to replace your Squarespace site, deployable for free on GitHub Pages.

## File Structure

```
luxpotentia/
├── index.html          ← Homepage
├── about.html          ← My Story page
├── work-with-me.html   ← Services overview
├── book-session.html   ← Private lessons booking form
├── semiprivate.html    ← Semi-private training form
├── seminars.html       ← Book a seminar form
├── mentorship.html     ← Mentoring page
├── courses.html        ← Courses (placeholder)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── nav.js          ← Nav menu toggle
└── images/             ← PUT YOUR PHOTOS HERE
    ├── hero-home.jpg         ← Homepage hero (you in pink rash guard + gi pants)
    ├── about-hero.jpg        ← About page hero (you in purple rash guard, side profile)
    ├── work-hero.jpg         ← Work With Me hero (you in purple rash guard, back angle)
    ├── private-lessons.jpg   ← Private lessons page photo
    ├── semiprivate-1.jpg     ← Semi-private photo 1
    ├── semiprivate-2.jpg     ← Semi-private photo 2
    ├── seminar-1.jpg         ← Seminar photo 1 (teaching class)
    ├── seminar-2.jpg         ← Seminar photo 2
    ├── mentorship.jpg        ← Mentorship page photo (you in pink outfit)
    ├── strip-1.jpg           ← Photo strip image 1 (competition/NAGA photo)
    └── strip-2.jpg           ← Photo strip image 2 (you with students)
```

## Step 1: Add Your Photos

Save your photos into the `images/` folder using the filenames listed above.
Any standard image format works (jpg, png, webp).

## Step 2: Set Up Contact Forms (FREE)

The contact forms currently post to `#` (nowhere). To make them work, use **Formspree** (free):

1. Go to https://formspree.io and create a free account
2. Create a new form — it gives you a URL like `https://formspree.io/f/xyzabc`
3. In each HTML file, find `action="#"` and replace it with your Formspree URL:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   You can use one form endpoint for all pages, or create separate ones.

## Step 3: Deploy to GitHub Pages (FREE)

1. Create a free account at https://github.com if you don't have one
2. Create a new repository named `luxpotentia` (or your preferred name)
3. Upload all these files to the repository (drag & drop in the GitHub UI)
4. Go to **Settings → Pages**
5. Under "Source", select `main` branch and click Save
6. Your site will be live at: `https://yourusername.github.io/luxpotentia/`

## Step 4: Connect Your Custom Domain (luxpotentia.com)

1. In your GitHub Pages settings, enter `luxpotentia.com` in the "Custom domain" field
2. In your domain registrar (wherever you bought luxpotentia.com), add these DNS records:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  yourusername.github.io
   ```
3. Wait up to 24 hours for DNS to propagate
4. Enable "Enforce HTTPS" in GitHub Pages settings once the domain is verified

## Customization Notes

- **Colors**: Edit CSS variables at the top of `css/style.css`
- **Fonts**: Currently using Playfair Display + Cormorant Garamond + Josefin Sans from Google Fonts
- **Links**: Update the "View My App" link in `courses.html` to point to your Gumroad app
- **Email**: Update `lux@luxpotentia.com` in `semiprivate.html` if your email differs
- **Newsletter**: The newsletter form on the homepage currently does nothing. Connect it to Mailchimp or ConvertKit using their embed instructions.

## Total Cost: $0/year
(Just keep paying for your domain name, ~$12-15/year)
