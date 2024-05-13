# ProjektMVC
System monitorowania wydatków

#spis treści:

Funkcjonalnosci:
  1.1 Metoda GET.
  1.2 Metoda POST.
  1.3 Metoda PUT. 
  1.4 Metoda DELETE. 
  1.5 Zapis danych.

Instrukcja obsługi 
	2.1 Wymagane Pakiety 
	2.2 Jak Uruchomić

Funkcjonalności:
	1.1 Metoda GET - żądanie HTTP do pobierania danych z jakiegoś zasobu, użytkownik pobiera z bazy danych iformacje o swoich wydatkach. 
	1.2 Metoda POST - żądanie HttP do wysłania danych do zasobu, użytkownik ma możliwosc utworzenia i zapisu nowego wydatku. 
	1.3 Metoda PUT - żądanie HTTP do akutalizacji danych w danym zasobie informacji, użytkownik może zawsze edytkować każdą ceche swojego wydatku. 
	1.4 Metoda DELETE - żądanie HttP do usunięcia danych z zasobu, użytkownik może usunąc dany wydatek z bazy danych. 
	1.5 Zapis danych - aplikacja zapisuje dane w bazie danych w formacie JSON(w pliku forms.json).

2.Instrukcja obsługi:

2.1 Wymagane pakiety: 
- Express.js (instalacja poprzez komende "npm i express") 
- EJS (instalacja poprzez komende "npm i ejs")
- Method-override(instalacja poprzez komende "npm i method-override")
- Nodemon(instalacja poprzez komende "npm i nodemon")

2.2 Jak uruchomić:
	W celu uruchomienia aplikacji należy wejsc w plik aplikacji i w terminalu wpisać "nodemon Server.js", nastepnie aby przejść do strony kliknij na link wyświetlony w konsoli(domyślnie: "http://localhost3000").
