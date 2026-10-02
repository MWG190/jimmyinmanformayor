# Jimmy Inman for Mayor

Campaign website for Jimmy Inman, candidate for Mayor of Covington, Louisiana.
Municipal primary: April 17, 2027.

Live domain: https://jimmyinmanformayor.com

## Publish

This app is a Vite / TanStack Start site. Host it on Vercel, then point the domain at that project.

1. Open https://vercel.com/new and import `MWG190/jimmyinmanformayor`.
2. Framework preset: Vite. Build command: `npm run build`. Leave the output settings on the defaults Vercel detects.
3. Deploy.
4. In the Vercel project, add the domains `jimmyinmanformayor.com` and `www.jimmyinmanformayor.com`.
5. At the domain registrar, use the DNS records Vercel shows. For most projects that is:
   - A record `@` → `76.76.21.21`
   - CNAME `www` → the target on the Vercel domain card
6. Redirect one host to the other so there is a single public address.

Local preview: `npm install` then `npm run dev`.
