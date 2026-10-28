# 🐟 YAR'S - Marisquería & Cevichería

Página web de una sola pantalla (Single-Page) y asistente virtual de IA integrado (con Gemini) para la cevichería y restaurante marino **YAR'S**.

---

## 🌟 Características Principales

- **Portada (Hero):** Badge dinámico *"Abierto hoy hasta las 5:00 PM"*, llamada de bienvenida y botón destacado que abre directamente el asistente virtual.
- **Especialidades Insignia:** Sección destacada para el Dúo Marino, Trío Marino YAR'S y Parihuela Especial con etiqueta *"Favorito del salón"*.
- **Carta Marina Completa:** Entradas, ceviches, tiraditos, platos calientes y bebidas con precios oficiales exactos en Soles (S/).
- **Condiciones y Delivery:** Modalidades (salón, recojo en local, delivery), tiempos, tolerancia y medios de pago (Yape, Plin, Transferencia, Tarjetas, Efectivo).
- **Horario de Atención:** Martes a Domingo de 11:30 a.m. a 5:00 p.m. (Cierre de cocina: 4:30 p.m.). Lunes cerrado.
- **Contacto Directo:** Enlace a WhatsApp oficial (971 281 473): [wa.me/51971281473](https://wa.me/51971281473).
- **Asistente Virtual (Chatbot):**
  - Powered by **Google Gemini 3.8 Flash** con temperatura `0.4`.
  - Starters rápidos interactivos.
  - Memoria de conversación en la sesión.
  - Despliegue sin fricción en **Vercel** mediante Serverless Functions (`/api/chat.ts`).

---

## 🚀 Guía de Despliegue Paso a Paso

### Paso 1: Subir el proyecto a GitHub

1. **Crear un nuevo repositorio en GitHub:**
   - Ve a [github.com/new](https://github.com/new).
   - Asigna un nombre al repositorio, por ejemplo: `yars-cevicheria`.
   - Selecciona **Público** o **Privado**.
   - **No** marques las casillas de agregar README, .gitignore ni licencia (ya están incluidos en el proyecto).
   - Haz clic en **Create repository**.

2. **Subir los archivos desde tu terminal local:**
   Abre una terminal en la carpeta del proyecto y ejecuta:

   ```bash
   # Asegurar rama principal 'main'
   git branch -M main

   # Preparar y hacer commit de los archivos
   git add .
   git commit -m "feat: YAR'S Marisqueria con asistente virtual y soporte para Vercel"

   # Vincular tu repositorio remoto (reemplaza TU_USUARIO y TU_REPOSITORIO)
   git remote add origin https://github.com/TU_USUARIO/yars-cevicheria.git

   # Subir el código a GitHub
   git push -u origin main
   ```

---

### Paso 2: Desplegar en Vercel

1. **Iniciar sesión en Vercel:**
   - Ingresa a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.

2. **Importar el Repositorio:**
   - En tu panel de control (Dashboard), haz clic en **"Add New..."** > **"Project"**.
   - En la lista de repositorios de GitHub, busca `yars-cevicheria` y haz clic en **"Import"**.

3. **Configuración del Proyecto (Build & Output Settings):**
   Vercel detectará automáticamente que es un proyecto **Vite**:
   - **Framework Preset:** `Vite` (detectado automáticamente).
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
   *(Gracias a `vercel.json`, la ruta `/api/chat` se ejecutará como Serverless Function de forma automática).*

4. **Configurar Variables de Entorno (Environment Variables):**
   - Despliega la sección **"Environment Variables"** antes de presionar Deploy.
   - Agrega tu clave de API de Gemini:
     - **Key:** `GEMINI_API_KEY`
     - **Value:** `tu_clave_de_gemini_api` (obtenida en [Google AI Studio](https://aistudio.google.com/app/apikey))
   - Haz clic en **"Add"**.

5. **Lanzar el Despliegue:**
   - Haz clic en el botón azul **"Deploy"**.
   - En aproximadamente 1 minuto, Vercel compilará la aplicación y te entregará una URL pública segura (ejemplo: `https://yars-cevicheria.vercel.app`).

---

## 🛠️ Ejecución Local

Para probar el proyecto en tu máquina local:

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variable de entorno
cp .env.example .env
# Coloca tu GEMINI_API_KEY en el archivo .env

# 3. Iniciar servidor de desarrollo (con Express + Vite + Gemini)
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
