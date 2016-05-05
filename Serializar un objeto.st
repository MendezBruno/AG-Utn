persitor:= File new.


"C:\Users\bruno\prueba2"

animal:= Animal new.
animal name: 'pepin'.
fileOut:= ODBSerializer serializeToBytes: animal.
animal2:= ODBDeserializer deserializeFromBytes: file.
ODBFileStream createNewOn: 'prueba23'.

file asString.
FileStream write: file .


fileOut :=FileStream write: 'C:\Users\bruno\prueba3'.
fileOut nextPutAll:  (ODBSerializer serializeToBytes: animal).
fileOut flush; close.
fileIn:= FileStream read: 'C:\Users\bruno\prueba3' . 
byteArray:= fileIn collection asByteArray.
animal3:= ODBDeserializer deserializeFromBytes:byteArray.



"****************************************CRUZAMIENTO********************************************"
|iteracion temp|

iteracion:=0

cromo1 do: 
[:unValor |
iteracion = 10 ifTrue: [temp=unValor ].
[unValor=cromo2 at:10].
[cromo2 at:10 = temp].
iteracion := iteracion + 1].
cruzarCromosoma:cromo1 y:cromo2

|iteracion temp|

iteracion:=0

cromo1 do: 
[:unValor |
iteracion = 10 ifTrue: [temp=unValor ].
[unValor=cromo2 at:10].
[cromo2 at:10 = temp].
iteracion := iteracion + 1].

"***************************************************************************************"


