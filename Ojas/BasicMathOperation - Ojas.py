i="5"
while(i=="5"):
   print( "HELLO LETS PLAY A GAME")
   print("Type 1 to add 2 to subtract 3 to multiply 4 to divide")
   i=input()
   if i=="1":
    print("Enter 1st number")
    j=input()
    print("Enter 2nd number")
    k=input()
    print("NOW WATCH AS YOUR NUMBERS WILL BE ADDED")
    print(int(k)+int(j))
    i="5"
   elif i=="2":
    print("Enter 1st number")
    l=input()
    print("Enter 2nd number")
    m=input()
    print("NOW WATCH AS YOUR NUMBERS WILL BE SUBTRACTED")
    print(int(l)-int(m))
    i="5"
   elif i=="3":
    print("Enter 1st number")
    o=input()
    print("Enter 2nd number")
    a=input()
    print("NOW WATCH AS YOUR NUMBERS ARE MULTIPLIED")
    print(int(o)*int(a))
    i="5"
   elif i=="4":
    print("Enter 1st number")
    c=input()
    print("Enter 2nd number")
    d=input()
    print("NOW WATCH AS YOUR NUMBERS ARE DIVIDED")
    print(int(c)/int(d))
    i="5"
   else:
    print ("Goodbye")
