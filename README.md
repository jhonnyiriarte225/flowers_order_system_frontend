# Flower Orders Deployment

This project is now split for deployment:

- `frontend/` is a React + Vite app (Netlify deploy target).
- `app.py` is a Flask API backend (deploy on Render/Railway/Fly.io).

## 1) Run locally

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
python app.py
```

Run frontend:

```bash
cd frontend
npm install
npm run dev
```

## 2) Deploy frontend to Netlify

This repo already includes `netlify.toml`:

```toml
[build]
  base = "frontend"
  command = "npm run build"
  publish = "dist"
```

In Netlify:

1. Import this repository.
2. Keep Netlify defaults from `netlify.toml`.
3. Deploy site.

## 3) Point frontend to your backend

After deploying your Flask API, create:

- `frontend/.env`

Set it to your backend URL:

```bash
VITE_API_BASE_URL=https://your-backend-url.com
```

Then redeploy Netlify.
