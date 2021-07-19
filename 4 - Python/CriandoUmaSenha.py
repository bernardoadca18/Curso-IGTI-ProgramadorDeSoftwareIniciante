import random as rand
import string as str


def randomPassword(password_length):
    password = ""
    i = 0
    while(i < password_length):
        password += rand.choice(str.ascii_letters)
        i += 1
    return password

print(randomPassword(15))