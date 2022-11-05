- create migration 
* typeorm migration:create ./path-to-migrations-dir/PostRefactoring

- run migration  
* yarn typeorm migration:run -d src/data-source.ts

* yarn typeorm migration:generate -d src/data-source.ts src/database/migrations/RelationContactMessage