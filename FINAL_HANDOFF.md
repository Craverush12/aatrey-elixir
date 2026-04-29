# BURANSH Final Handoff And Operations SOP

Last updated: 2026-04-23

## Current Status

The site is technically ready for a controlled launch once production secrets, payment links, legal approvals, and final content permissions are supplied.

Latest local verification:

- `npm run lint`: pass
- `npm run build`: pass
- Built-route smoke test on `http://127.0.0.1:3001`: `/`, `/elixir`, `/about`, `/staycation`, `/more`, `/thank-you` all returned `200`.
- Playwright responsive pass:
  - Mobile `390x844`: home, elixir, about, staycation, more showed no horizontal overflow.
  - Tablet `768x1024`: thank-you showed no horizontal overflow.
  - Desktop `1440x900`: about showed no horizontal overflow.
  - Navigation overlay opens, locks body scroll, animates visible, closes on Escape, and restores body scroll.
  - Console error check after clean server restart: no current errors.
  - Visible text scan in browser: no `TODO`, `TBC`, `PLACEHOLDER`, or mojibake.

## What Changed In This Closeout

- Added the supplied Atri / Atreya shlokas to the About page in the existing crimson lineage panel.
- Kept the shlok presentation aligned with the current BURANSH editorial language: restrained, premium, lineage-led, and not over-explanatory.
- Reconfirmed lint, production build, route availability, mobile behavior, desktop behavior, and nav animation behavior.
- Added this final SOP plus `.env.production.example`.

## Recommended VPS Stack

Use a simple VPS setup:

- Ubuntu 24.04 LTS or 22.04 LTS
- Node.js 20 LTS or newer
- npm
- Git
- Nginx
- PM2
- Certbot for SSL

Recommended server sizing for launch:

- 2 vCPU
- 4 GB RAM
- 40 GB SSD
- Daily provider snapshots enabled

## First-Time VPS Setup

Run as a sudo-capable user:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nginx git curl certbot python3-certbot-nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

Clone and build:

```bash
git clone <repo-url> /var/www/buransh
cd /var/www/buransh
npm ci
cp .env.production.example .env.production
nano .env.production
NODE_OPTIONS=--max-old-space-size=4096 npm run build
pm2 start npm --name buransh -- start -- -p 3000
pm2 save
pm2 startup
```

After `pm2 startup`, run the command printed by PM2.

## Nginx Reverse Proxy

Create `/etc/nginx/sites-available/buransh`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it:

```bash
sudo ln -s /etc/nginx/sites-available/buransh /etc/nginx/sites-enabled/buransh
sudo nginx -t
sudo systemctl reload nginx
```

Add SSL:

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Environment Variables

Production env lives in `/var/www/buransh/.env.production`.

Required:

```bash
RESEND_API_KEY=
FROM_EMAIL=
TEAM_EMAIL=
GOOGLE_SHEETS_CREDENTIALS=
GOOGLE_SHEET_ID=
NEXT_PUBLIC_RAZORPAY_STANDARD_URL=
NEXT_PUBLIC_RAZORPAY_SUGARFREE_URL=
NEXT_PUBLIC_SITE_URL=
```

Optional legacy payment verification:

```bash
RAZORPAY_KEY_SECRET=
NEXT_PUBLIC_RAZORPAY_KEY_ID=
```

Important: `NEXT_PUBLIC_RAZORPAY_STANDARD_URL` and `NEXT_PUBLIC_RAZORPAY_SUGARFREE_URL` are build-time public values. If either changes, rebuild and restart the app.

## Google Sheets Database SOP

The operational database is Google Sheets. The app appends rows through `lib/sheets.ts`.

Put the Sheet ID in `GOOGLE_SHEET_ID`. In a Google Sheet URL:

```text
https://docs.google.com/spreadsheets/d/SHEET_ID_IS_HERE/edit
```

Create these tabs exactly:

- `CONTACT`
- `BULK_ORDERS`
- `STAYCATION_INQUIRIES`
- `OMAKASE_INQUIRIES`
- `WAITLIST_TEA`
- `WAITLIST_JAM`
- `ORDERS` only if legacy Razorpay verification is used

Every append starts with an ISO timestamp in column A.

To create `GOOGLE_SHEETS_CREDENTIALS`:

1. In Google Cloud, create or select a project.
2. Enable the Google Sheets API.
3. Create a service account.
4. Create a JSON key for that service account.
5. Copy the service account `client_email`.
6. Share the live Google Sheet with that `client_email` as Editor.
7. Base64 encode the JSON key and put the encoded value into `GOOGLE_SHEETS_CREDENTIALS`.

On macOS/Linux:

```bash
base64 -w 0 service-account.json
```

On Windows PowerShell:

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("service-account.json"))
```

To retrieve database records:

- Primary method: open the live Google Sheet and use each tab as the source of truth.
- Export method: Google Sheets `File -> Download -> Comma Separated Values` for the active tab.
- Backup method: schedule a daily manual or automated export of each tab to CSV before major campaigns.
- Audit method: sort by timestamp column A, newest first.

Do not commit the service account JSON or the base64 credential to Git.

## Form-To-Tab Map

- Footer/contact form: `CONTACT`
- Serving note submission: `CONTACT`
- Bulk/private order enquiry: `BULK_ORDERS`
- Staycation enquiry: `STAYCATION_INQUIRIES`
- Omakase request: `OMAKASE_INQUIRIES`
- Tea waitlist: `WAITLIST_TEA`
- Jam waitlist: `WAITLIST_JAM`
- Legacy verified payment route: `ORDERS`

## Updating The Website

For routine copy/content edits:

1. Edit the relevant source file.
2. Run:

```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run lint
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

3. On VPS:

```bash
cd /var/www/buransh
git pull
npm ci
NODE_OPTIONS=--max-old-space-size=4096 npm run build
pm2 restart buransh
pm2 logs buransh --lines 100
```

For env changes:

```bash
cd /var/www/buransh
nano .env.production
NODE_OPTIONS=--max-old-space-size=4096 npm run build
pm2 restart buransh
```

Rebuild after public env changes, payment links, metadata changes, or dependency changes.

## Rollback SOP

If a deployment fails:

```bash
cd /var/www/buransh
git log --oneline -5
git checkout <previous-good-commit>
npm ci
NODE_OPTIONS=--max-old-space-size=4096 npm run build
pm2 restart buransh
```

After rollback, check:

```bash
curl -I https://yourdomain.com
pm2 logs buransh --lines 100
sudo tail -100 /var/log/nginx/error.log
```

## Approval Items Still Open

- Production Razorpay payment links for Standard and Sugar-Free.
- Final approved prices and gifting quote policy.
- Shipping, return, refund, cancellation, privacy, and terms language.
- Legal review for food, process, origin, no-additive/no-preservative, sugar-free, wellness, Ayurvedic, and functional language.
- FSSAI or certification/licence numbers, if public.
- Final rights clearance for all images, video, packaging, portraits, and written copy.
- Testimonials, names, quotes, titles, locations, and written permissions if testimonials return.
- Women profile names, villages, quotes, portraits, and written permissions if profiles return.
- Documentary title, director, runtime, URL/asset, subtitles, and release policy.
- Project Aatmanirbhar public impact numbers.
- Staycation property/accommodation details, if public rather than enquiry-led.
- Production `TEAM_EMAIL`, Resend sender domain, and live Google Sheet.
- Final page-by-page approval on mobile and desktop.
- Shloka source/spelling/citation review if a formal citation is required; the supplied shlokas are currently displayed as client-provided brand content.

## Final Pre-Launch Smoke Test

Run after deployment:

```bash
curl -I https://yourdomain.com
curl -I https://yourdomain.com/elixir
curl -I https://yourdomain.com/about
curl -I https://yourdomain.com/staycation
curl -I https://yourdomain.com/more
curl -I https://yourdomain.com/thank-you
```

Manual browser checks:

- Open and close mobile navigation.
- Press Escape while nav is open.
- Check 390px mobile and 1440px desktop.
- Submit each form with staging-safe data.
- Confirm rows appear in the correct Sheet tabs.
- Confirm team emails and guest confirmations arrive.
- Confirm payment CTAs open the intended Razorpay-hosted pages.
