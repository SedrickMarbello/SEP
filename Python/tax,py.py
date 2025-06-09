
# Input: subtotal of the order
subtotal = float(input("Enter the subtotal: $"))

# Calculate tax (10% of subtotal)
tax = 0.10 * subtotal

# Initialize discount
discount = 0

# Check if discount applies
if subtotal > 100:
    discount = 0.05 * subtotal

# Calculate final price
final_price = subtotal + tax - discount

# Output
print(f"Subtotal: ${subtotal:.2f}")
print(f"Tax (10%): ${tax:.2f}")
print(f"Discount (5%): ${discount:.2f}")
print(f"Final Price: ${final_price:.2f}")
