psql -d Barranquilla -c "UPDATE usuario SET estado = 'false' WHERE fechaexp < current_date" -h 104.154.211.159 -p 5432 -U postgres -w
