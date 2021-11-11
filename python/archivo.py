def solution(A = []):
    try:
        # obtener tipo objeto de A
        tipo = type(A)
        print (tipo)
        # si A es una lista
        if tipo != list:
            return "No es una lista"
        # si A esta vacia
        if len(A) == 0:
            return "No ingresó valores"

        if len(A) > 0:

            # solo integers
            listNumbers = []
            print(listNumbers)
            print(A)
            for i in range(len(A)):
                    if int(A[i]):
                        listNumbers.append(A[i])
            # si A tiene elementos
            print(listNumbers)

            contador=1
            valorMin=-100000
            valorMax=100000
            ##chequeo valores máximos y minimos.
            for i in range(len(listNumbers)):
                if listNumbers[i]>valorMax:
                    return "Numero excede limite máximo posible (100000)."
                elif listNumbers[i]<valorMin:
                    return "Numero excede limite mínimo posible (-100000)."
                ##busco el valor que sea mayor a 0 y que no esté en el array A.
            print(max(listNumbers))

            while contador<max(listNumbers):
                if contador not in listNumbers:
                    print("Resultado: Primer Numero entero que no está en la lista:" + str(contador))
                    return contador
                    pass
                else:
                    print("numero en lista: "+ str(contador))
                    contador+=1
                    continue
                    
                        
    except ValueError:
        e=Exception("Error: Los datos ingresados no son válidos.")
        print (e)
        return -1

# unittest.main()
lista1 = [1,3,6,4,1,2]
print(solution(lista1))