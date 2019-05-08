from PIL import Image

img = Image.open("img/background.JPG")
img = img.resize((1800,500), Image.ANTIALIAS)
img.save("img/background_downsampled.jpg")
