# Comparație între Selenium și Cypress în web automation testing

Studiul își propune să realizeze o comparație între Selenium și Cypress, două dintre cele mai utilizate instrumente în domeniul testării automate a aplicațiilor web. Analiza va aborda aspecte cheie precum compatibilitatea cu diferite browsere, eficiența în scrierea și executarea testelor, viteza de rulare a testelor, precum și suportul disponibil pentru fiecare. Scopul final al acestui studiu este de a oferi dezvoltatorilor și testerilor de software o perspectivă clară asupra avantajelor și limitărilor fiecărui instrument, facilitând astfel alegerea cea mai potrivită pentru nevoile lor specifice de proiect.

## Date despre articolele științifice alese

### Web Program Testing Using Selenium Python: Best Practices and Effective Approaches

#### Autori
- Rusdiansyah
- Nining Suharyanti
- Hendra Supendar
- Tuslaela

#### Instituții
- Universitas Bina Sarana Informatika
- Universitas Nusa Mandiri, Indonesia

#### Detalii publicare
- Data publicării: 1 Aprilie 2024
- Publicație științifică: Sinkron: Jurnal dan Penelitian Teknik Informatika
- DOI: [https://doi.org/10.3395/v8i2.13569](https://doi.org/10.3395/v8i2.13569)


### Technical Analysis of Selenium and Cypress as Functional Automation Framework for Modern Web Application Testing

#### Autori
- Fatini Mobaraya
- Shahid Ali

#### Instituție
- Department of Information Technology, AGI Institute, Auckland, New Zealand

#### Detalii publicare
- Data publicării: Decembrie 2019
- Publicație științifică: 9th International Conference on Computer Science, Engineering and Applications (ICCSEA 2019)
- DOI: [10.5121/csit.2019.91803](https://dx.doi.org/10.5121/csit.2019.91803)

## Metodologie

Vom folosi un site-ul folosit în primul articol științific: [Saucedemo](https://www.saucedemo.com).
Pe parcursul testelor noastre vom folosi **standard_user** și **problem_user**.
Mai jos putem observa cum arată site-ul pe care vom rula testele în Selenium și Cypress pentru a realiza comparațiile.
Pentru început vom folosi **standard_user**.

**1. Ecranul de autentificare:** Prima imagine arată ecranul de autentificare unde utilizatorii se pot loga folosind nume de utilizator predefinite și o parolă comună. Această pagină este punctul de plecare pentru accesarea contului pe platformă. 
![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(1).png)

**2. Selecția produselor și coșul de cumpărături:** Imaginile următoare prezintă produsele pe măsură ce sunt adăugate în coșul de cumpărături. Pe măsură ce articolele sunt selectate, butonul "Add to cart" (Adaugă în coș) se schimbă în "Remove" (Elimină), indicând că produsul a fost adăugat în coș.

![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(2).png)
![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(3).png)

**3. Vizualizarea și gestionarea coșului de cumpărături:** Această imagine arată coșul de cumpărături cu toate produsele selectate, unde utilizatorii pot elimina produse dacă doresc.

![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(6).png)

**4. Procesul de checkout:** După ce și-au finalizat selecția de produse, utilizatorii trec la procesul de checkout unde completează informații personale și de plată.

![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(7).png)

**6. Finalizarea comenzii:** Ultimele imagini arată ecranul final de confirmare a comenzii, unde utilizatorii sunt informați că comanda lor a fost plasată și urmează să fie livrată.

![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(8).png)
![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(9).png)

