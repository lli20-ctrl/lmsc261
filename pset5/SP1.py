skateboard_colors = {}

count = 1
while count <= 4:
    key = input(f"enter the name of skater {count}: ")
    value = input("enter the skateboard color: ")
    skateboard_colors[key] = value
    count = count + 1