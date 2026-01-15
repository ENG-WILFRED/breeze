-- CreateEnum
-- CreateTable
CREATE TABLE "Vendor" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "customerName" VARCHAR(100) NOT NULL,
    "orderDetails" JSONB NOT NULL,
    "deliveryLongitude" DOUBLE PRECISION NOT NULL,
    "deliveryLatitude" DOUBLE PRECISION NOT NULL,
    "deliveryAddressNote" TEXT,
    "subCounty" VARCHAR(50),
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "Vendor_longitude_latitude_idx" ON "Vendor"("longitude", "latitude");

-- CreateIndex
CREATE INDEX "Order_deliveryLongitude_deliveryLatitude_idx" ON "Order"("deliveryLongitude", "deliveryLatitude");
