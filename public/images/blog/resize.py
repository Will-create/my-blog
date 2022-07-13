from PIL import Image
image = Image.open('4.jpg')
new = image.resize((1276,721))
#print('new',new.size)
new.save('4.jpg')
#new.show()
