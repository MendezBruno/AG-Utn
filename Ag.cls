"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Ag
	instanceVariableNames: 'poblacionInicial poblacionSeleccionada poblacionMundial mutacion cruzamiento seleccion aptitud'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Ag guid: (GUID fromString: '{0418FE3E-735A-4CA4-8089-1D862A0B4BD0}')!
Ag comment: ''!
!Ag categoriesForClass!Unclassified! !
!Ag methodsFor!

aptitud
	^aptitud!

aptitud: anObject
	aptitud := anObject!

cargarPoblacion
|fileIn byteArray|
fileIn:= FileStream read: 'C:\Users\bruno\prueba3' . 
byteArray:= fileIn collection asByteArray.
poblacionMundial := ODBDeserializer deserializeFromBytes:byteArray.!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum!

cruzamiento
	^cruzamiento!

cruzamiento: anObject
	cruzamiento := anObject!

guardarPoblacion
|fileOut|
fileOut :=FileStream write: 'poblacion'.
fileOut nextPutAll:  (ODBSerializer serializeToBytes: self poblacionMundial).
fileOut flush; close.!

mutacion
	^mutacion!

mutacion: anObject
	mutacion := anObject!

poblacionInicial
	^poblacionInicial!

poblacionInicial: anObject
	poblacionInicial := anObject!

poblacionMundial
	^poblacionMundial!

poblacionMundial: anObject
	poblacionMundial := anObject!

poblacionSeleccionada
	^poblacionSeleccionada!

poblacionSeleccionada: anObject
	poblacionSeleccionada := anObject!

seleccion
	^seleccion!

seleccion: anObject
	seleccion := anObject! !
!Ag categoriesFor: #aptitud!accessing!private! !
!Ag categoriesFor: #aptitud:!accessing!private! !
!Ag categoriesFor: #cargarPoblacion!public! !
!Ag categoriesFor: #convertir_a_decimal:!public! !
!Ag categoriesFor: #cruzamiento!accessing!private! !
!Ag categoriesFor: #cruzamiento:!accessing!private! !
!Ag categoriesFor: #guardarPoblacion!public! !
!Ag categoriesFor: #mutacion!accessing!private! !
!Ag categoriesFor: #mutacion:!accessing!private! !
!Ag categoriesFor: #poblacionInicial!accessing!private! !
!Ag categoriesFor: #poblacionInicial:!accessing!private! !
!Ag categoriesFor: #poblacionMundial!accessing!private! !
!Ag categoriesFor: #poblacionMundial:!accessing!private! !
!Ag categoriesFor: #poblacionSeleccionada!accessing!private! !
!Ag categoriesFor: #poblacionSeleccionada:!accessing!private! !
!Ag categoriesFor: #seleccion!accessing!private! !
!Ag categoriesFor: #seleccion:!accessing!private! !

