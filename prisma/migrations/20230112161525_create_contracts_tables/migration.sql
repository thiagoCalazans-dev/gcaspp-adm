-- CreateTable
CREATE TABLE "contracts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "modality_id" INTEGER NOT NULL,
    "initial_date" DATETIME NOT NULL,
    "due_date" DATETIME NOT NULL,
    CONSTRAINT "contracts_modality_id_fkey" FOREIGN KEY ("modality_id") REFERENCES "modalities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "renewals" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" INTEGER NOT NULL,
    "initial_date" DATETIME NOT NULL,
    "due_date" DATETIME NOT NULL,
    "contract_id" INTEGER,
    CONSTRAINT "renewals_contract_id_fkey" FOREIGN KEY ("contract_id") REFERENCES "contracts" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" INTEGER NOT NULL,
    "contractId" INTEGER,
    "value" DECIMAL NOT NULL,
    "taxes" DECIMAL NOT NULL,
    "net_value" DECIMAL NOT NULL,
    "reference_date" DATETIME NOT NULL,
    "payment_date" DATETIME NOT NULL,
    "next_invoice" DATETIME NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "invoices_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "contracts" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "modalities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "contracts_name_key" ON "contracts"("name");
