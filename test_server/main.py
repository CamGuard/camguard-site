import socket
from time import sleep
from os import listdir

HOST = "127.0.0.1"  # The server's hostname or IP address
PORT = 65432  # The port used by the server
IMGS = [file for file in listdir("backend/resources/") if ".jpg" in file]

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    print(f"Server listening on {HOST}:{PORT}")

    conn, addr = s.accept()
    print(f"Connected by {addr}")

    i = 0
    while True:
        print("backend/resources/" + IMGS[i % len(IMGS)])
        data = open("backend/resources/" + IMGS[i % len(IMGS)], "rb").read()
        conn.sendall(data)
        sleep(1/30)
        i += 1