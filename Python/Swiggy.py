MIN_AMOUNT = 200.0

location_input = input("Are you in a serviceable location? (yes/no): ")
order_amount = float(input("Enter your order amount: "))

serviceable_location = location_input == "yes"

if serviceable_location or order_amount >= MIN_AMOUNT:
    print("Eligible for delivery.")
else:
    print("Not eligible for delivery.")