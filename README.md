# Tabi Spend — Japan trip expense tracker

An offline expense app for your iPhone. It records spending in **MYR and JPY** and is set up for your
29 Nov – 9 Dec trip (Tokyo → Hakone → Kyoto → Nara → Osaka).

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The whole app |
| `manifest.webmanifest` | Lets iPhone install it with a name and icon |
| `sw.js` | Makes it work offline |
| `icons/` | App icons |

## Put it on your iPhone (one-time, ~5 minutes)

The app has to be hosted at a web address once, so Safari can install it. GitHub Pages is free and permanent.

1. Go to <https://github.com> and sign in (or create a free account).
2. Click **+** (top right) → **New repository**. Name it `tabi-spend`, keep it **Public**, then click **Create repository**.
3. On the new page, click **uploading an existing file**. Drag in `index.html`, `manifest.webmanifest`, `sw.js`
   and the whole `icons` folder. Click **Commit changes**.
4. Open **Settings** → **Pages**. Under *Build and deployment*, set **Source** = *Deploy from a branch*,
   **Branch** = `main`, folder `/ (root)`, then click **Save**.
5. After about a minute the page shows your link: `https://YOUR-USERNAME.github.io/tabi-spend/`.
6. On your iPhone, open that link in **Safari**. Tap **Share** ⬆︎ → **Add to Home Screen** → **Add**.
7. From now on, open **Tabi Spend** from the home-screen icon. It works offline, even in flight mode.

> Only the app's code is public. Your expenses are never uploaded. They stay on your phone.

## Good to know

- **Use the home-screen icon, not the Safari tab.** iOS gives the installed app its own storage, so expenses you
  add in a Safari tab won't show up in the installed app.
- **Back up now and then:** Settings → *Back up* saves a file to Files or iCloud Drive. *Restore from backup*
  brings it back, for example on a new phone. *Export to spreadsheet* makes a CSV for Numbers or Excel.
- **Keep the same link.** Your data is tied to the web address, so don't rename the repository after you start using it.
- **Exchange rate:** when online, the app updates daily from the European Central Bank reference rate. Money changers
  and cards differ a little, so you can type your own rate. Each expense keeps the rate it was saved with.
- **Tax-free shopping:** since 1 Nov 2026 Japan refunds the consumption tax when you leave instead of removing it at
  the till. You pay full price in the shop (bring your passport), keep the items unused, and claim at customs at the
  airport **before check-in**. The minimum is ¥5,000 before tax, at one store on one day.

## Changing the app later

Edit `index.html`, then in `sw.js` change `VERSION` (for example to `tabi-spend-v2`). Upload both files to the
repository again. The phone picks up the new version the second time you open the app. Your expenses are kept.
