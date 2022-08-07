-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    CONSTRAINT "post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_post" ("authorId", "content", "createdAt", "id", "title") SELECT "authorId", "content", "createdAt", "id", "title" FROM "post";
DROP TABLE "post";
ALTER TABLE "new_post" RENAME TO "post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
