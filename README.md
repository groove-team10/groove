# Teknisk dokumentation for Tema 7 gruppeprojekt
Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:
Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

 - HTML-filerne er opdelt, så der er en separat produktliste (produktliste.html), index, about og en produktdetaljeside (produkter.html).
 - CSS-filer er opdelt i en generel styles-fil (generel.css), som indeholder den styling som går geælder for hver side og en specifik style-fil for hver html side.
 - JavaScript-filerne er separat placeret og håndterer API-fetching og dynamisk indhold.
 - Billeder som logo og ikoner er organiseret i img/-mappen, og produktbilleder hentes dynamisk fra  https://dummyjson.com/products.

## Navngivning:
Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Filer: Bruges små bogstaver uden mellemrum (produktliste.html, produktliste.js).
- CSS-klasser: Bruges med - eller _ mellem ord (product_grid, category-title), alt efter hvad man er vant til.
- Ved at kalde hver vores html, css og javascript filer for det samme, sikrer vi at holde styer på hvilke filer der hører sammen.
- JavaScript-variabler: Bruges i camelCase (fetchProducts, displayProducts).
- HTML-id'er: Bruges til specifikke elementer som billeder (categoryImage).

## Link til scripts:
- JavaScript-filen (produktliste.js) er placeret i bunden af <body> for at sikre, at DOM'en er indlæst før JS køres.

## Git branches:
- Vi kalder vores branches det feauture vi har lavet og så med vores navn til sidst. F.eks: ny-header-navn

## Arbejdsflow:
- Vir fordeler arbejdet således at, vi laver en generel.css sammen, som kun må røres af en person efterfølgende. Hver person for tildelt en html og dertil deres css og js, som kun den person må ændre i. Dette undgår at vi overskriver hinandens kode.
- Commit-beskeder: Bør være beskrivende (fx fix: Ensret kortstørrelser i produktliste i stedet for update css).

## Kode:
- JavaScript-funktioner: Bruger både function keyword og arrow functions (fetchProducts() bruger async/await, displayProducts() er en funktion med en løkke).
- CSS-selectorer: ID'er bruges til JavaScript (document.getElementById("categoryImage")), klasser bruges til styling (.product_grid, .card).

# Funktionalitet
Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

Websitet indeholder:
- Hentning af produkter fra API (fetchProducts(category))
- Filtrering af produkter baseret på brugerens kategori (Beauty, Fragrances).
- Dynamisk ændring af produktbillede baseret på kategori (document.getElementById("categoryImage").src).
- En formular, som brugeren kan udfylde, til at give en review.

# API endpoints
Dette afsnit skal liste de endpoints fra API'et i har benyttet:
- Vi har benyttet = https://dummyjson.com/products

# Dokumentation af Funktion 
Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter: 

En vigtig funktion i projektet er fetchProducts(category), som henter og viser produkter fra API’et:

Beskrivelse
 - Funktion: Henter produkter fra API’et og filtrerer dem efter kategori.
 - Sammenhæng: Spiller sammen med displayProducts() for at vise produkterne i produktliste.html.

Parametre
async function fetchProducts(category)
- category (string) → Brugerens valgte kategori (fx "beauty", "fragrances").

Retunerer
- Funktion manipulerer DOM'en direkte, returnerer ikke en værdi.

Eksempel på brug:
const category = "beauty";
fetchProducts(category);

Fordel: Funktionaliteten sikrer, at kun relevante produkter vises dynamisk på websitet.

# Konklusion
- Godt struktureret projekt med opdeling af filer.
- Klar og ensartet kodebase gør det let at forstå for alle i gruppen.
- Dynamisk funktionalitet med API-fetching giver en interaktiv brugeroplevelse.
