# Setup Proyek Backend

Proyek backend ini dibangun menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## Prerequisites
- [Bun](https://bun.sh) runtime terinstal

## Cara Menjalankan

1. Instal dependensi:
   ```bash
   bun install
   ```

2. Konfigurasi Environment:
   - Duplikasi `.env.example` dan ubah namanya menjadi `.env`.
   - Sesuaikan kredensial MySQL di `.env`.

3. Jalankan Migrasi Database (drizzle-kit):
   ```bash
   bun run db:generate
   bun run db:push
   ```

4. Jalankan Server Mode Development:
   ```bash
   bun run dev
   ```

Server secara default akan berjalan di http://localhost:3000.
Terdapat route default `/` dan `/health` untuk memeriksa status aplikasi.
