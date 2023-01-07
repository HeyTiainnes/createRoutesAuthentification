# A-Z Node Api Books
To start you have to type this line to install dependencies

(Pour commencer tu dois écrire cette ligne de commande dans ton bash pour installer les dépendances)

```bash
npm i
```

Dependencies : 
- express 
- cors
- typeorm 
- reflect-metadata 
- pg
  
Dev dependencies : 
- @types/express 
- typescript 
- ts-node
- nodemon
- @types/cors
- @types/node 

## Info init project
You __don't have to do this__, I already executed it while project initialization.

(Tu __n'as pas à executer__, c'est ce que j'ai fais pour initialiser le projet)

Initialization of `.git` hidden folder

```bash
git init
```

Initialization of `.gitignore` file and add node_modules in it

```bash
echo node_modules >> .gitignore
echo dist >> .gitignore
```

Connect my local repo and remote repo by url ([REPO_URL] to change with yours)

```bash
git remote add origin [REPO_URL]
```

Initialization of `package.json` file

```bash
npm init -y
```

Initialization of `tsconfig.json` file

```bash
tsc --init
```
and in the file `tsconfig.json`, and uncomment/modify this option `"outDir": "./dist"` (l.52)

---
Installation of dependencies : 
```bash
npm i express cors typeorm reflect-metadata pg
```

Installation of dev dependencies : 
```bash
npm i -D typescript @types/express ts-node nodemon @types/cors @types/node 
```
## Create database 

Dans un shell PSQL : 

```sql
CREATE DATABASE library;
```

Ensuite je me connecte à cette base de données avec `\c library` et je créer la table book : 
```sql
CREATE TABLE book(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255)
);
```

On insère quelques données de test :
```sql
INSERT INTO book (title) VALUES ('The Hobbit'), ('The Lord of the Rings');
```