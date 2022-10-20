#a = 15
#b = "Edad: "
#print(b + str(a))

#condicionales if... else

#numero = 0
#if(numero > 0):
#    print("numero es positivo")
#elif (numero == 0):
#    print("numero es cero")
#else:
#    print("numero es negativo")

from ctypes.wintypes import PINT
from pkg_resources import DefaultProvider


a = 8
b = 9
if a != b and a > b:
    print("Condición cumplida")

#repetitivas
#i = 0
#while i < 5:
#    print("Hola")
#    i += 1

#funciones
#def miFuncion():
#    nombre = "Pedro"
#    return 86


#resultado = miFuncion()
#print(resultado)

#def suma(numero1, numero2):
#    return numero1 + numero2

#a = 50.25
#b = 60.80
#resultado = suma(a, b)
#print(resultado)

#Listas (supongo que serían arrays en js)
#miLista = [1,2,3,4,5,6,7]

#i = 0
#for elemento in miLista:
#    miLista[i] += 5
#    i += 1

#print(miLista)

#ejercicio integrado
#funcion que reciba lista y devuelve lista con solo numeros positivos
def funcion():
    lista = [0,1,2,3,4,5]
    print("Recibir: " + str(lista))

funcion()