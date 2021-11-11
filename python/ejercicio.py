string="12"
print(len(string))
lista=list(string)
maximumValue=1
listaValores=[]
print(lista)
for i in lista:
    maximumValue=int(str(maximumValue)+"0")
print(maximumValue)
for i in range(0,maximumValue,1):
    listaValores.append(i)
print(listaValores)

newlist = [x for x in listaValores if (x%3 == 0)]
print (newlist)

listaFinal= [x for x in lista if lista[:x] in newlist[:x]]
print(listaFinal)



