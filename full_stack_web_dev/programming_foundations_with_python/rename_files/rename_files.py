# remove all numbers from a group of files

import os


def rename_files():
    file_list = os.listdir(r"C:\Users\frank\Desktop\prank")
    os.chdir(r"C:\Users\frank\Desktop\prank")

    for file_name in file_list:
        os.rename(file_name, file_name.translate(None, "0123456789"))


rename_files()