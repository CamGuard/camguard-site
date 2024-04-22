# echo-client.py

import socket
from os import listdir

HOST = "127.0.0.1"  # The server's hostname or IP address
PORT = 65432  # The port used by the server
IMGS = listdir("../backend/resources/")

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    i = 0
    while True:
        print("../backend/resources/" + IMGS[i])
        s.sendall(open("../backend/resources/" + IMGS[i], "rb").read())
        data = s.recv(1024)
        i += 1

print(f"Received {data!r}")