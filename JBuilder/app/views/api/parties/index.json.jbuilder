json.array! @parties do |party|
  json.name party.name
  json.guests party.guests, :name, :age
end
