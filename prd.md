# SHABLLON PRD (Product Requirements Document) — 1 Faqe

**Shkurtesat:** PWA (Progressive Web App – aplikacion web progresiv); PRD (Product Requirements Document – dokumenti i kërkesave të produktit); MVP (Minimum Viable Product – produkti minimal i përdorshëm).
**Kursi:** Programimi për Pajisje Mobile (2026/2027) • **Kolegji AAB**  
**Emri i Projektit:** Berberhane  
**Themeluesi / Ekipi:** [Bajram Acifi, 27227/24, Edi Sermaxhaj, 24906/24 ]  
**Data & Versioni:** Java 02 • Versioni 1.0 (Draft për MVP)

---

## 1. Përdoruesi dhe Problemi Real

- **Kush e përjeton dhimbjen?** Klientët e një berberhane dhe berberi/pronari.
- **Kur ndodh?** Kur klientët duan të dinë çmimet, shërbimet, orarin ose të kërkojnë një termin, sidomos gjatë orëve të ngarkuara.
- **Si e zgjidhin sot?** Telefonojnë, dërgojnë mesazhe në rrjete sociale ose shkojnë personalisht në berberhane. Mesazhet mund të humbasin dhe klientët nuk e dinë gjithmonë nëse berberi është i lirë.

## 2. Evidenca e Vëzhgimit (3 Bisedat me Përdoruesit)

- **Biseda 1 (Klient - Student):** "Shpesh duhet ta telefonoj berberin për të pyetur për çmimet dhe nëse ka kohë të lirë. Do të ishte më lehtë nëse mund t'i shihja shërbimet dhe çmimet direkt në telefon."
- **Biseda 2 (Klient - Punëtor):** "Ndonjëherë shkoj te berberi dhe duhet të pres, sepse ka klientë të tjerë para meje. Do të preferoja të kërkoja termin paraprakisht dhe të mos humbisja kohë duke pritur."
- **Biseda 3 (Berber - Pronar i biznesit):** \*"Gjatë punës nuk mund t'u përgjigjem gjithmonë telefonatave dhe mesazheve. Një aplikacion ku klientët mund t'i shohin çmimet, orarin dhe të kërkojnë termin do të ma lehtësonte organizimin e punës."

## 3. Hipoteza e Vlerës

> **Nëse** u ofrojmë klientëve një PWA mobile ku mund të shohin shërbimet, çmimet dhe orarin e berberhanes, si dhe të dërgojnë një kërkesë për termin.
> **atëherë** ata do ta gjejnë informacionin më shpejt dhe berberi do t'i marrë kërkesat në mënyrë më të organizuar.

## 4. Rrjedha Kryesore e Përdoruesit (Core Flow — Max 5 Hapa)

1. **Kyçja:** Klienti hap Berberi PWA në telefon.
2. **Kërkimi / Postimi:** Klienti sheh shërbimet, çmimet dhe orarin e punës.
3. **Kërkesa:** Klienti zgjedh shërbimin që dëshiron.
4. **Konfirmimi:** Klienti plotëson emrin, kontaktin dhe datën/orën e preferuar, pastaj dërgon kërkesën.
5. **Përfundimi:** Aplikacioni tregon se kërkesa është dërguar ose regjistruar. Berberi e konfirmon termin veçmas; aplikacioni nuk pretendon se termini është konfirmuar automatikisht.

## 5. Kufijtë e MVP-së (Scope Contract)

- **BRENDA MVP-së (Maksimumi 3 funksione):**
  1. Shërbimet dhe çmimet: Klienti mund të shohë listën e shërbimeve dhe çmimet.
  2. Orari dhe kontaktet: Klienti mund të shohë orarin e punës dhe mënyrat e kontaktit.
  3. Formulari i kërkesës për termin: Klienti dërgon kërkesë me shërbimin dhe kohën e preferuar dhe merr një mesazh se kërkesa u pranua nga formular
- **JASHTË MVP-së (Të përjashtuara qëllimisht për këtë semestër):**
  - Pagesat online ose me kartelë.
  - Llogaritë dhe autentikimi i klientëve.
  - sistem chat-i të brendshëm (përdoret telefonata/SMS direkt).
  - Kalendar i sinkronizuar me termine të lira në kohë reale.
  - Njoftimet automatike me SMS ose email.
  - Vlerësimet dhe komentet e klientëve.

## 6. Kriteret e Pranimit (Acceptance Criteria - Çfarë testohet)

- [ ] **AC-1:** Kur klienti hap aplikacionin, shfaqen shërbimet dhe çmimet.
- [ ] **AC-2:** Orari i punës dhe informacioni i kontaktit janë të dukshëm.
- [ ] **AC-3:** Formulari kërkon emrin, mënyrën e kontaktit, shërbimin dhe kohën e preferuar.
- [ ] **AC-4:** Nëse mungon një fushë e detyrueshme, aplikacioni tregon udhëzim dhe nuk e pranon formularin si të plotë.
- [ ] **AC-5:** Pas dërgimit të formularit, shfaqet një mesazh i qartë se kërkesa është dërguar/regjistruar.
- [ ] **AC-6:** Pamja funksionon dhe është e lexueshme në ekranin e telefonit.

## 7. Modeli Minimal i të Dhënave (Supabase PostgreSQL)

```sql
services (id,name,description,price_eur,duration_minutes)
business_info ( id,business_name,phone,address,opening_hours)
appointment_requests ( id,customer_name,customer_contact,service_id,preferred_datetime,status,created_at)
```

## 8. Rreziku Kryesor që Duhet Testuar

- **Rreziku:** Klientët mund të vazhdojnë të telefonojnë ose të dërgojnë mesazhe, në vend që të përdorin aplikacionin.
- **Testi në Javën 2:** Jepua aplikacionin disa klientëve dhe kërkoju të gjejnë çmimin e një shërbimi dhe të plotësojnë një kërkesë për termin. Pyeti nëse do ta përdornin përsëri dhe çfarë ishte e paqartë.

## 9. Veçoritë e Mundshme për të Ardhmen

- Konfirmim automatik i termineve.
- Njoftime kujtese me SMS ose email.
- Kalendar me oraret e lira në kohë reale.
- Panel administrimi për berberin.
- Llogari klientësh dhe histori e termineve.
- Pagesa online.
- Instalimi si PWA dhe mbështetje offline për informacionin bazë, sipas kërkesave teknike të kursit.
