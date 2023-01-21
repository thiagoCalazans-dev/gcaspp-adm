/*
  Warnings:

  - You are about to alter the column `name` on the `contracts` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Made the column `first_invoice_date` on table `contracts` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contracts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" INTEGER NOT NULL,
    "number" TEXT NOT NULL,
    "modality_id" INTEGER NOT NULL,
    "initial_date" DATETIME NOT NULL,
    "due_date" DATETIME NOT NULL,
    "first_invoice_date" DATETIME NOT NULL,
    CONSTRAINT "contracts_modality_id_fkey" FOREIGN KEY ("modality_id") REFERENCES "modalities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_contracts" ("due_date", "first_invoice_date", "id", "initial_date", "modality_id", "name", "number") SELECT "due_date", "first_invoice_date", "id", "initial_date", "modality_id", "name", "number" FROM "contracts";
DROP TABLE "contracts";
ALTER TABLE "new_contracts" RENAME TO "contracts";
CREATE UNIQUE INDEX "contracts_name_key" ON "contracts"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
