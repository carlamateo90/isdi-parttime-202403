curl -X PATCH http://localhost:9090/avatar -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmNhYzRlZTRhNzYyOTU5N2Y4OGJiMmIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MjQ1NjUwMjMsImV4cCI6MTcyNjI5MzAyM30.RMdhFX3gs25VI4x_imf6O-73wRU1jr7u-Vp6wHQhHy4" -d '{ "avatar":"avatars/morado.png"}' -v