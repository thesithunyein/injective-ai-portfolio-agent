# ⚡ Quick Start (5 minutes)

Get Injective AI Portfolio Agent running locally in 5 minutes.

---

## 1️⃣ Clone & Install

```bash
git clone https://github.com/thesithunyein/injective-ai-portfolio-agent.git
cd injective-ai-portfolio-agent
npm install
```

**Time: 2 minutes**

---

## 2️⃣ Get API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up (free tier includes credits)
3. Copy your API key

**Time: 1 minute**

---

## 3️⃣ Setup Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx  # Paste your key here
NEXT_PUBLIC_INJECTIVE_NETWORK=testnet
NEXT_PUBLIC_INJECTIVE_CHAIN_ID=injective-888
NEXT_PUBLIC_INJECTIVE_ENV=testnet
```

**Time: 1 minute**

---

## 4️⃣ Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**Time: 1 minute**

---

## 5️⃣ Test It

1. Enter an Injective wallet address (starts with `inj`)
   - Example: `inj1abc123...` (any valid format)
2. Click "Analyze Portfolio"
3. Watch the magic happen! ✨

---

## 🎯 What You'll See

1. **Portfolio Display** – Your holdings, amounts, percentages
2. **AI Analysis** – Summary of your portfolio
3. **Risk Assessment** – Volatility and concentration analysis
4. **Recommendations** – 5 actionable insights
5. **Rebalancing Suggestion** – Target allocations with reasoning

---

## 🚀 Next Steps

### Deploy to Vercel (1 click)

```bash
vercel
```

### Record Demo Video

Show the app working with a real wallet address.

### Submit to Hackathon

See `SUBMISSION_GUIDE.md` for detailed steps.

---

## 🆘 Troubleshooting

### "Cannot find module" errors
```bash
npm install
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### API key not working
- Check `.env.local` is created
- Verify API key is correct
- Restart dev server

### Injective address validation fails
- Address must start with `inj`
- Must be 42 characters long
- Example: `inj1abc123def456ghi789jkl012mno345pqr678stu`

---

## 📚 Learn More

- [Injective Docs](https://docs.injective.network)
- [Claude API Docs](https://docs.anthropic.com)
- [Next.js Docs](https://nextjs.org/docs)

---

**You're all set! Happy analyzing! 🎉**
