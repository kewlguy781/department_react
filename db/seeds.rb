# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# TODO Make changes below to fit your project.
# See Faker Documentation at:
# https://github.com/faker-ruby/faker

require "faker"

puts "Seeding database... Please wait"

comments = ['good','bad','ok','not so great','really great']
50.times do
  p = Product.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department: Faker::Commerce.department
    
  )
  2.times do 
    p.comments.create(text: comments.sample)
  end
end

puts "Database are seeded."
