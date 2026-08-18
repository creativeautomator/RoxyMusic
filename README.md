# ROXY — Music Scoring Catalog

A searchable catalog of music scores available for use across GMA video executions. Built as a companion to Creative Multiverse: the site itself lives on GitHub Pages, but the audio files stay in OneDrive rather than the repo (with 200+ files, embedding them in git isn't practical).

## Files

- **`index.html`** — the public catalog site. List view, search, mood/genre filters, and an inline play button per track that streams straight from OneDrive — no linking out to open the file separately.
- **`data.js`** — the dataset the site reads from. Each track's `audioFile` field holds a direct-play OneDrive link. Starts with 5 sample entries from your first batch — the audio links are placeholders until you fill them in via `editor.html`.
- **`editor.html`** — a standalone tool (open it directly in a browser, no server needed) for adding, editing, and deleting scores. Saves to your browser's local storage as you work, and exports a fresh `data.js` when you're ready to publish. Has a "Test this link" button so you can confirm a OneDrive link actually plays before saving it.

## Getting a direct-play link from OneDrive

A normal "Copy link" from OneDrive opens a preview page in the browser — it won't play in an `<audio>` tag as-is. You need to convert it to a direct-download link first:

- **Personal OneDrive**: copy the share link, then add `&download=1` to the end.
- **OneDrive for Business / SharePoint (work account)**: copy the share link, then replace the trailing `?e=xxxxxx` with `?download=1`.

Paste the edited link into `editor.html` and hit **Test this link** — if it plays there, it'll play on the live site.

## Day-to-day workflow

1. Open `editor.html` locally (double-click it, or drag it into a browser tab).
2. Fill in the score's details, paste its direct-play OneDrive link, and test it. Save.
3. Repeat for as many scores as you're adding.
4. When ready to publish: click **Download data.js**.
5. Replace `data.js` in this folder with the downloaded one.
6. Commit and push to GitHub. Pages will redeploy automatically — nothing else to move, since the audio itself never leaves OneDrive.

## Deploying on GitHub Pages

1. Create a new repo (or a folder in an existing one) and push `index.html` and `data.js`, keeping `index.html` at the root.
2. In the repo's **Settings → Pages**, set the source to the branch/folder these files live in.
3. Your catalog will be live at `https://<username>.github.io/<repo-name>/`.

## A note on access

OneDrive share links are only playable by people who have access to the file (or anyone-with-the-link, depending on how you shared it). If your team is all on the same GMA OneDrive/SharePoint tenant, this should just work for them once they're logged in. If you want the catalog usable by people outside that tenant, you'll need to set sharing to "Anyone with the link" on each file — worth deciding on a consistent sharing setting before you tag all 200.

## robots.txt

`robots.txt` tells well-behaved search engines and crawlers (Google, Bing, etc.) not to index or list this site. Push it to the repo root alongside `index.html`.

**Important limitation:** `robots.txt` is a polite request, not a lock — it only works because reputable crawlers choose to respect it. It does nothing to stop someone who has the direct URL from opening the site, and it won't stop a scraper that's deliberately built to ignore it. Since GitHub Pages' free tier requires the repo to be public, there's no way to make ROXY genuinely private without moving to GitHub's paid tier (which supports private repos with Pages) or adding real authentication in front of it. If keeping this fully non-public matters, that's worth deciding on separately from robots.txt.

## Batch tagging

`roxy_batch_tagging.xlsx` is the working sheet for tagging your files in bulk — see that file for column-by-column instructions. Once a batch is filled in, send it back and it gets converted into `data.js` entries.

## Extending the schema

Each entry in `data.js` follows this shape — add fields as needed and update `editor.html`'s form + `index.html`'s render logic to match:

```js
{
  id, title, moodGenre, tempoBpm, durationSec,
  instrumentation, audioFile, notes, dateAdded
}
```
