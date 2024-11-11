# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## TASK

Crea una layout di base usando tre componenti React:
Header
Main
Footer
Descrizione:
crea un file per ciascun componente ed esportalo con il nome del componente.
Importa i tuoi componenti in App.js e rederizzali in pagina.
Stampa nell'header una variabile con il nome dell'app.
Stampa nel main una variabile con scritto welcome to my react app
Bonus:
usa la lista di tasks allegata e renderizzala nel componente Main.
stilizza la pagina come nello screenshot proposto
const tasks = [
{
id: 1,
title: "Implementare la homepage",
priority: 1,
estimatedTime: 120,
state: "completed"
},
{
id: 2,
title: "Sviluppare il menu di navigazione",
priority: 2,
estimatedTime: 60,
state: "completed"
},
{
id: 3,
title: "Creare il footer del sito",
priority: 3,
estimatedTime: 30,
state: "completed"
},
{
id: 4,
title: "Ottimizzare le performance",
priority: 1,
estimatedTime: 180,
state: "completed"
},
{
id: 5,
title: "Scrivere test per i componenti",
priority: 2,
estimatedTime: 90,
state: "completed"
},
{
id: 6,
title: "Implementare la pagina dei contatti",
priority: 3,
estimatedTime: 60,
state: "completed"
},
{
id: 7,
title: "Aggiungere animazioni CSS",
priority: 2,
estimatedTime: 30,
state: "backlog"
},
{
id: 8,
title: "Integrare l'API di autenticazione",
priority: 1,
estimatedTime: 120,
state: "in_progress"
},
{
id: 9,
title: "Aggiornare la documentazione",
priority: 3,
estimatedTime: 60,
state: "backlog"
},
{
id: 10,
title: "Rifattorizzare il codice CSS",
priority: 2,
estimatedTime: 90,
state: "in_progress"
}
];

console.log(tasks);
