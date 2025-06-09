password = "helo"
for attempt in range(3):
    user_input = input("Enter password: ")
    if user_input ==password:
        print("Access granted.")
        break
else:
    print("Access denied.")