# Contact Form Setup Guide

Your contact form is configured to send emails to **tehzeebh456@gmail.com** using Web3Forms.

## Setup Steps (Takes 2 minutes):

### 1. Get Your Free Access Key

1. Go to: https://web3forms.com/
2. Click "Get Started for Free"
3. Enter your email: **tehzeebh456@gmail.com**
4. Click "Create Access Key"
5. Check your email and verify
6. Copy your Access Key (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### 2. Add Access Key to Your Project

1. Open `components/Contact.tsx`
2. Find line with: `access_key: "YOUR_ACCESS_KEY_HERE"`
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

### 3. Push to GitHub

```bash
git add components/Contact.tsx
git commit -m "Add Web3Forms access key for contact form"
git push origin main
```

### 4. Test It!

Once deployed, fill out your contact form and you'll receive an email at **tehzeebh456@gmail.com**!

## Features:

✅ **Free Forever** - No credit card required
✅ **Unlimited Submissions** - No limits on the free plan
✅ **Spam Protection** - Built-in spam filtering
✅ **Email Notifications** - Instant email to your Gmail
✅ **No Backend Needed** - Works directly from frontend

## Email Format:

You'll receive emails with:
- Sender's name
- Sender's email (so you can reply)
- Their message
- Subject: "New Contact Form Submission from Portfolio"

## Troubleshooting:

- **Not receiving emails?** Check your spam folder
- **Form not working?** Make sure you replaced the access key
- **Need help?** Visit https://web3forms.com/docs

---

**Note:** Keep your access key private. Don't share it publicly!
