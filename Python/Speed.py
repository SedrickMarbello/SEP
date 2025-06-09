grades = {"Alice": 85, "Bob": 90}
name = input("Enter student name: ")

if name in grades:
    print(name, "grade is", grades[name])
else:
    print(name, "is not found in the records")




    