vip_input = input("Do you have VIP status? (yes/no): ")
ticket_input = input("Do you have a valid ticket? (yes/no): ")

vip_status = vip_input == "yes"
valid_ticket = ticket_input == "yes"

if vip_status or valid_ticket:
    print("Access allowed.")
else:
    print("Access denied.")