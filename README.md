# storeAPI_backend

- dotenv<br>
  I will use it in order to access my enviromental variables. Just import "dotenv/config" and your variables defined on ".env" file will appear on the "process.env" object<br>

- db.js<br>
  File in charge of connection<br>

- Repository folder<br>
  Store entities that comunicate with our DB and it is good to make layers of code, in order to abstrac SQL commands in my app<br><br>
  BaseRepository.js will be my common use/querys of all my entities. Example: If I want to consult all lines from users or from products, the framework to do that it is the same - "SELECT \* FROM [TABLE]", so I create a generical framework and on the specific ones (Like UserRepository) I will use this common structure but using "users" as a table.
