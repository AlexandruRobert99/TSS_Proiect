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

## Prezentarea platformei de testare: Saucedemo

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

### Pentru problem_user am încărcat capturi de ecran din timpul unei testări în Selenium.
**La problem_user apar erori, cum era de așteptat.**

![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(11).png)

Prima problemă este faptul că unele butoane nu pot fi apăsate.
![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(12).png)

O altă problemă constă în faptul că în câmpul Last Name nu pot fi scrise caractere. Mai mult, în câmpul First Name se preia mereu ultima literă care se încearcă a fi scrisă în Last Name, ștergând conținutul scris anterior. În acest exemplu inițial în First Name era scris "John", iar în Last Name s-a încercat să se scrie "Doe". "e" fiind ultima literă din "Do**e**" în First Name a rămas doar acel caracter. Când se încearcă să se trimită formularul primim o eroare deoarece nu au fost completate toate câmpurile.

![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(13).png)

## Procedură de testare 

Vom rula mai multe teste pentru a compara viteza de rulare și numărul de linii de cod, printre care:
- Testarea paginii de login
- Testarea add to cart
- Testarea checkout-ului
- Testarea finalizării checkout-ului
- Testarea pentru doi useri simultan (secvențial)
- Testarea pentru doi useri simultan (paralel)

Scopul testelor este de a măsura viteza de execuție pentru a face o comparație între viteza și numărul de linii de cod între Selenium și Cypress.

### Selenium

Mai sus am văzut cum a rulat un test în Selenium. În cadrul acestei lucrări vom folosi **Jupyter Notebooks** și **Python** pentru a scrie codurile testelor în Selenium. Fișierele se pot găsi în folderul **Selenium**.

Am creat 3 notebook-uri diferite, câte unul pentru fiecare browser (Google Chrome, Mozilla Firefox și Microsoft Edge).

În această imagine se poate vedea timpul de rulare al testului.

![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(22).PNG)

În cadrul notebook-urilor se pot observa timpii de rulare pentru toate testele. Acești timpi au fost notați într-un tabel, alături de numărul de linii de cod necesari pentru a realiza fiecare test în parte.

### Cypress

Un prim lucru care se observă imediat la Cypress în comparație cu Selenium este interfața interactivă. Totodată, cu același cod se pot rula teste în browsere diferite, pe când în Selenium trebuie schimbat driver-ul.

![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(23).PNG)

![Alt text](https://raw.githubusercontent.com/AlexandruRobert99/TSS_Proiect/main/Screenshots/Screenshot%20(14).PNG)

## Alte comparații

### Selenium

Browsere compatibile: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge și Opera.
Limbaje de programare suportate: Python, Java, JavaScript, C#, Ruby.
Interfață interactivă: Nu.
Raportarea rezultatelor: Nu.

### Cypress

Browsere compatibile: Google Chrome, Mozilla Firefox, Microsoft Edge.
Limbaje de programare suportate: Doar JavaScript.
Interfață interactivă: Da.
Raportarea rezultatelor: Da.

