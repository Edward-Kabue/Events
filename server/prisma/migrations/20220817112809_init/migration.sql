-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventOrganizer" (
    "bankAccount" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstname" TEXT,
    "id" TEXT NOT NULL,
    "lastname" TEXT,
    "phoneNumber" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventOrganizer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "firstname" TEXT,
    "id" TEXT NOT NULL,
    "lastname" TEXT,
    "phoneNumber" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventIdId" TEXT,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_eventIdId_fkey" FOREIGN KEY ("eventIdId") REFERENCES "EventOrganizer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
