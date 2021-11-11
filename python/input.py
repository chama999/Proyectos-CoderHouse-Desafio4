import archivo
    
# unittest.main()
lista1 = [1,3,6,4,1,2]
print(archivo.solution(lista1))

# unittest.error invalid numbers
lista1 = [1,"A",6,4,"C",2]
print(archivo.solution(lista1))

# unittest.error empty list
lista1 = []
print(archivo.solution(lista1))

# unittest.error maximum number exceeded
lista1 = [100001,3,6,4,1,2]
print(archivo.solution(lista1))

# unittest.error minimum number exceeded
lista1 = [-100001,3,6,4,1,2]
print(archivo.solution(lista1))