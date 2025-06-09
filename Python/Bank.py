amount = int(input("Enter withdrawal amount: "))

for bill in [2000, 500, 200, 100]:
    count = amount // bill
    print(bill, ":", count)
    amount = amount % bill