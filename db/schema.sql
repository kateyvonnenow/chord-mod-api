CREATE DATABASE chord_mod_app;
\c chord_mod_app

-- Creating Songs Table
CREATE TABLE songs(
  id SERIAL PRIMARY KEY,
  title TEXT,
  artist TEXT,
  lyrics TEXT,
  chords TEXT,
  user_id INTEGER
);

-- Reset Songs table
TRUNCATE TABLE songs;
ALTER SEQUENCE songs_id_seq RESTART WITH 1;

-- Inserting first song
INSERT INTO songs(title, artist, lyrics, chords, user_id)
VALUES
  ('Happy Birthday', 'Generic', 'Happy birthday to you,|Happy birthday to you,|Happy birthday, dear Jonathan,|Happy birthday to you.', '      G           D   |      D7          G   |      C           G   |      D7          G   ', 1);

UPDATE songs SET chords='      -G-           -D-   |      -D7-          -G-   |      -C-           -G-   |      -D7-          -G-   ' WHERE id = 1;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);